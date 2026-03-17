import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/telegram",
        destination: "/telegram/index.html",
      },
    ];
  },
};

export default nextConfig;
