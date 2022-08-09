/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://raw.githubusercontent.com/shafeequeot/portfolio/main/public/'],
  }
}

module.exports = nextConfig
