const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = withMDX(nextConfig)
