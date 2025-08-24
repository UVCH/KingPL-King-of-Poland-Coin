/** @type {import('next').NextConfig} */
const path = require('path');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,

  // Ignore TS/ESLint errors and stub any `ox` imports for preview builds
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      ox: path.resolve(__dirname, 'stubs/ox.js'),
    };
    return config;
  },
};

module.exports = nextConfig;
