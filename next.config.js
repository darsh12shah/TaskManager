/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "https://img.clerk.com", "img.clerk.com"],
  }, typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
