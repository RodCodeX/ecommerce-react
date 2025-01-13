import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn1.gstatic.com',
        // port: '',
        pathname: '/images/**',
        // search: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        // port: '',
        pathname: '/**',
        // search: '',
      },
    ],
  },
}

export default nextConfig
