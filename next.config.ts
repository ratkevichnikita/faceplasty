import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.accelonline.io'],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
