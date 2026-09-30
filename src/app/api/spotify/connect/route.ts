import { randomBytes } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (process.env.NODE_ENV !== "development" || !/^127\.0\.0\.1:\d+$/.test(host)) {
    return new Response("Open http://127.0.0.1:3000/api/spotify/connect on your local development server.", { status: 403 });
  }
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  if (!clientId || !process.env.SPOTIFY_CLIENT_SECRET) {
    return new Response("Fill in SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in .env.local, then restart the development server.", { status: 400 });
  }
  const state = randomBytes(32).toString("hex");
  const redirectUri = `http://${host}/callback`;
  const url = new URL("https://accounts.spotify.com/authorize");
  url.search = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: "user-read-currently-playing",
    state,
    show_dialog: "true",
  }).toString();
  const response = NextResponse.redirect(url);
  response.headers.set("Cache-Control", "no-store");
  response.cookies.set("spotify_oauth_state", state, { httpOnly: true, sameSite: "lax", path: "/", maxAge: 600 });
  return response;
}
