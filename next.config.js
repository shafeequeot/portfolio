/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['shafeeque.ml', 'https://portfolio-theta-gules-71.vercel.app/'],
  }
}

module.exports = nextConfig
