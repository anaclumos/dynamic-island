/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com', 'cho.sh', 'cataas.com'],
  },
}

module.exports = nextConfig
