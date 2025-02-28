import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    loader: "custom",
    domains: ["images.microcms-assets.io"],
  },
};

export default nextConfig;
