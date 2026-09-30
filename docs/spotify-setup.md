# Spotify listening widget

The landing page’s vinyl widget polls `/api/spotify` every 30 seconds while the tab is visible. It displays your current song and artist, links to the song, and stops the record when playback is paused or idle. Without credentials, it shows a decorative spinning record with neutral copy. Visitors can pause the animation, and reduced-motion preferences are respected.

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

Keep all three variables on the server; do not prefix them with `NEXT_PUBLIC_` or commit `.env.local`. The endpoint returns only the song details, never tokens. If Spotify returns an authorization or network error, the widget shows its music-break state and retries on the next poll.

Deploy with a host that runs Next.js server routes (for example, Vercel or a Node.js server). GitHub Pages cannot run the authorization or live Spotify endpoints; this project therefore does not use `output: "export"`.

API references: [currently playing](https://developer.spotify.com/documentation/web-api/reference/get-the-users-currently-playing-track), [refreshing tokens](https://developer.spotify.com/documentation/web-api/tutorials/refreshing-tokens).
