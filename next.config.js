/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    minimumCacheTTL: 31536000,
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
