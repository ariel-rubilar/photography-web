import { CONFIG } from "@/lib/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [new URL(CONFIG.APP.PHOTO_BUCKET_URI)],
  },
};

export default nextConfig;
