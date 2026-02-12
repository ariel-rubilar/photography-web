import { SERVER_CONFIG } from "./src/shared/lib/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  typescript: {
    tsconfigPath: "./tsconfig.app.json",
  },
  images: {
    remotePatterns: [new URL(SERVER_CONFIG.PHOTO_BUCKET_URI)],
  },
};

export default nextConfig;
