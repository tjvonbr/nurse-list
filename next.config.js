/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
  images: {
    domains: ["openweathermap.org"],
  },
};

module.exports = nextConfig;
