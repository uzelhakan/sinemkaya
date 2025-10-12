/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // eğer harici resim kullanıyorsan buraya ekle, örn: ['firebasestorage.googleapis.com']
  },
};

module.exports = nextConfig;
