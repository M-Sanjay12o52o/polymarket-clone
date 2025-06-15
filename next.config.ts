import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
      ),
    ],
  },
};

export default nextConfig;
