# Spotify listening widget

On a server host, the landing page’s vinyl widget polls `/api/spotify` every 30 seconds while the tab is visible. It displays your current song and artist while Spotify is playing. When playback is paused, idle, unconfigured, or unavailable, it displays “Friday I’m in Love” by The Cure and links to the track on Spotify. The record keeps spinning unless a visitor pauses the animation; reduced-motion preferences are respected. The widget does not play audio automatically.

## Connect your account

1. Create an app in the [Spotify developer dashboard](https://developer.spotify.com/dashboard). Register a redirect URI you control (for local setup, `http://127.0.0.1:3000/callback`).
2. Add your client ID and secret to `.env.local` as shown below. Leave the refresh token blank initially.
3. Create `.env.local` at the project root:

   ```dotenv
   SPOTIFY_CLIENT_ID=your_client_id
   SPOTIFY_CLIENT_SECRET=your_client_secret
   SPOTIFY_REFRESH_TOKEN=your_refresh_token
   ```

4. Restart the development server and open `http://127.0.0.1:3000/api/spotify/connect`. Sign in with your own Spotify account and approve access. The local `/callback` route saves your refresh token to `.env.local` automatically. These setup routes are disabled in production. Add all three variables to your hosting provider for production and redeploy.
5. Play a song in Spotify and visit the landing page. `/api/spotify` should return `status: "playing"` with the song details.

Keep all three variables on the server; do not prefix them with `NEXT_PUBLIC_` or commit `.env.local`. The endpoint returns only the song details, never tokens. If Spotify returns an authorization or network error, the widget shows the default track and retries on the next poll.

For live Spotify status, deploy with a host that runs Next.js server routes (for example, Vercel or a Node.js server) using `npm run build`.

The live GitHub Pages site uses `npm run build:pages`. This exports the site to `out/`, excludes the server routes during the build, and disables Spotify polling. The default Cure track and record animation remain available. Server route files are restored after the export, even if the build fails.

API references: [currently playing](https://developer.spotify.com/documentation/web-api/reference/get-the-users-currently-playing-track), [refreshing tokens](https://developer.spotify.com/documentation/web-api/tutorials/refreshing-tokens).
