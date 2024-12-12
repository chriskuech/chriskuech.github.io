
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
//   swcMinify: true,
  output: 'export',
  images: {
    // domains: ['example.com'],
    unoptimized: true,
  }
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//     }
//     return config;
//   },
};

export default nextConfig;
