import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { NextRequest, NextResponse } from "next/server";

function message(text: string, status = 200) {
  const response = new NextResponse(text, { status, headers: { "Cache-Control": "no-store", "Content-Type": "text/plain; charset=utf-8", "Referrer-Policy": "no-referrer" } });
  response.cookies.delete("spotify_oauth_state");
  return response;
}

export async function GET(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (process.env.NODE_ENV !== "development" || !/^127\.0\.0\.1:\d+$/.test(host)) {
    return message("Spotify setup is only available on the local development server.", 403);
  }
  const state = request.nextUrl.searchParams.get("state");
  if (!state || state !== request.cookies.get("spotify_oauth_state")?.value) {
    return message("This connection link expired. Open /api/spotify/connect to try again.", 400);
  }
  const code = request.nextUrl.searchParams.get("code");
  if (request.nextUrl.searchParams.has("error") || !code) {
    return message("Spotify connection was canceled. Open /api/spotify/connect to try again.", 400);
  }
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  if (!clientId || !clientSecret) return message("Add your Spotify credentials to .env.local and restart the development server.", 400);

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ grant_type: "authorization_code", code, redirect_uri: `http://${host}/callback` }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return message("Spotify could not complete the connection. Check your credentials and registered redirect URI, then open /api/spotify/connect to try again.", 502);
    const token = await response.json();
    if (typeof token.refresh_token !== "string" || !/^[\w-]+$/.test(token.refresh_token)) {
      return message("Spotify did not return a usable refresh token. Try connecting again.", 502);
    }
    const path = join(process.cwd(), ".env.local");
    const current = await readFile(path, "utf8");
    const line = `SPOTIFY_REFRESH_TOKEN=${token.refresh_token}`;
    const updated = /^SPOTIFY_REFRESH_TOKEN=.*$/m.test(current)
      ? current.replace(/^SPOTIFY_REFRESH_TOKEN=.*$/gm, line)
      : `${current.trimEnd()}\n${line}\n`;
    await writeFile(path, updated, { mode: 0o600 });
    process.env.SPOTIFY_REFRESH_TOKEN = token.refresh_token;
    return message("Spotify connected! Your refresh token was saved to .env.local. Return to http://127.0.0.1:3000 and play a song in Spotify. If the widget does not update within 30 seconds, restart the development server.");
  } catch {
    return message("Could not finish Spotify setup. Check your connection and that .env.local is writable, then open /api/spotify/connect to try again.", 500);
  }
}
