import { CONFIG } from "./src/lib/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  typescript: {
    tsconfigPath: "./tsconfig.app.json",
  },
  images: {
    remotePatterns: [new URL(CONFIG.APP.PHOTO_BUCKET_URI)],
  },
};

export default nextConfig;
