import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    nextScriptWorkers: true,
  },
  //   i18n: {
  //     locales: ['en', 'vi'], // Các ngôn ngữ bạn hỗ trợ (ví dụ: Tiếng Anh, Việt, Pháp)
  //     defaultLocale: 'vi', // Ngôn ngữ mặc định
  //   },
};

module.exports = withNextIntl(nextConfig);

export default nextConfig;
