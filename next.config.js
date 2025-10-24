/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 14
  output: 'standalone',
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  // Optimize for Vercel
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}

module.exports = nextConfig
