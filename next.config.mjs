/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/my-mordi-app",
  assetPrefix: "/my-mordi-app/",
};

export default nextConfig;
