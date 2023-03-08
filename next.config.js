/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "links.papareact.com",
      "avatars.githubusercontent.com",
      "images.unsplash.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
