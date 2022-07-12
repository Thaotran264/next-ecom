/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.pexels.com",
      "images.pexels.com",
      "tastee-pro.s3.ap-southeast-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
