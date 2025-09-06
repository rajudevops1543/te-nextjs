import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'logos-world.net',
      'upload.wikimedia.org',
      'cdn1.iconfinder.com'
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': join(__dirname, 'app'),
      '@assets': join(__dirname, 'attached_assets'),
    }
    return config
  }
}

export default nextConfig;