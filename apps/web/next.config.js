/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui","@local/trpc"]
}

module.exports = nextConfig
