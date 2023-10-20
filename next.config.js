/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/M/**',
      },
      {
        protocol: 'https',
        hostname: 'filmdez.com',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
};
