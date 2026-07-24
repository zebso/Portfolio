import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.16.244.111"],
  reactStrictMode: true,
  turbopack: {
    root: __dirname
  }
};

export default nextConfig;
