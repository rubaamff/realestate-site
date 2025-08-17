/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { serverActions: { bodySizeLimit: '2mb' } },
  i18n: {
    locales: ['ar'],
    defaultLocale: 'ar',
    localeDetection: false
  },
};

export default nextConfig;
