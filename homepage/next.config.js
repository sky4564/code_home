/** @type {import('next').NextConfig} */

const nextConfig = {
  // Vercel 배포 시에는 basePath 불필요 (별도 도메인 사용)
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
}

module.exports = nextConfig

