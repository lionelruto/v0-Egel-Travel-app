/** @type {import('next').NextConfig} */
const repoName = '/v0-Egel-Travel-app'
const nextConfig = {
  output: "export",
  //basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  basePath: repoName,
  assetPrefix: repoName,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
