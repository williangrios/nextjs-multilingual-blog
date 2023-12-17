/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "unsplash.com",
        protocol: "https",
      },
      {
        hostname: "directus-production-2344.up.railway.app",
        protocol: "https",
      },
    ],
  },
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig;
