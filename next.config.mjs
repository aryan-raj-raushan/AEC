/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`${process.env.IMAGE_DOMAIN_CDN_URL}`, "*"],
  },
};

export default nextConfig;
