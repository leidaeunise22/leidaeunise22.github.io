type SpotifyPlayback = {
  is_playing: boolean;
  currently_playing_type: string;
  item?: { name: string; artists: { name: string }[]; external_urls: { spotify: string } };
};

const headers = { "Cache-Control": "no-store" };
let accessToken: { value: string; expires: number } | undefined;

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) {
    return Response.json({ status: "unconfigured" }, { headers });
  }

  try {
    if (!accessToken || accessToken.expires <= Date.now()) {
      const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: refreshToken }),
        cache: "no-store",
        signal: AbortSignal.timeout(8000),
      });
      if (!tokenResponse.ok) throw new Error("Spotify authorization unavailable");
      const token = await tokenResponse.json();
      if (!token.access_token || !token.expires_in) throw new Error("Invalid Spotify authorization");
      accessToken = { value: token.access_token, expires: Date.now() + (token.expires_in - 60) * 1000 };
    }

    const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: { Authorization: `Bearer ${accessToken.value}` },
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (response.status === 204) return Response.json({ status: "idle" }, { headers });
    if (response.status === 401) accessToken = undefined;
    if (!response.ok) throw new Error("Spotify playback unavailable");
    const playback: SpotifyPlayback = await response.json();
    if (!playback.item || playback.currently_playing_type !== "track") {
      return Response.json({ status: "idle" }, { headers });
    }
    return Response.json({
      status: playback.is_playing ? "playing" : "paused",
      title: playback.item.name,
      artist: playback.item.artists.map(artist => artist.name).join(", "),
      url: playback.item.external_urls.spotify,
    }, { headers });
  } catch {
    return Response.json({ status: "unavailable" }, { headers });
  }
}
