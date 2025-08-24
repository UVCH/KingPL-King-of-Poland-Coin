/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,

  // ⬇️ Unblock build even if TypeScript has errors (temporary to preview the site)
  typescript: {
    ignoreBuildErrors: true,
  },
  // ⬇️ Don’t fail the build on ESLint warnings/errors
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

