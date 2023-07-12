/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "s3-lc-upload.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
