/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
  images: {
    domains: ["openweathermap.org"],
  },
};

module.exports = nextConfig;
