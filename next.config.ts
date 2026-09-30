import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Spotify authorization and live listening require server route handlers.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
