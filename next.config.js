/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD,
  },
};

module.exports = nextConfig;
