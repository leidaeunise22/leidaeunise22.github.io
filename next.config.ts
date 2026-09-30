import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.GITHUB_PAGES === "true" ? { output: "export" as const } : {}),
  // Spotify authorization and live listening require server route handlers.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
