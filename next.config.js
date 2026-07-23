/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === 'production' ? '/snow-learning-solutions' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/snow-learning-solutions' : '',
  output: 'export',
  trailingSlash: true,
};

module.exports = nextConfig;
