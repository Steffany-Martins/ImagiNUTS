/** @type {import('next').NextConfig} */


const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  publicRuntimeConfig: {
    apiKey: process.env.API_KEY,
    // Add other public runtime configuration properties here
  },
    images: {
    remotePatterns: [
      {
        hostname: '***',
      },
    ],
  },
  // Other Next.js configuration options go here
};