/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // هذا يسمح لك باستخدام المسارات مثل "@/components/..."
    styledComponents: true
  },
  experimental: {
    appDir: true
  },
  // إعدادات أخرى يمكنك إضافتها إذا لزم الأمر
};

module.exports = nextConfig;
