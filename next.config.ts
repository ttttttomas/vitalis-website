import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_API_URL: process.env.API_URL_DEV ?? process.env.API_URL_PROD,
  },
};

export default nextConfig;
