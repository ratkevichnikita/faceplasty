import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.accelonline.io'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: false,
};

export default nextConfig;
