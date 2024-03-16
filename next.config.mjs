/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com'],
    unoptimized : true,
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  
};
export default nextConfig;
