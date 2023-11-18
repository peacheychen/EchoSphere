/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    // Enable source maps in development
    if (dev) {
      config.devtool = 'source-map';
    }

    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

module.exports = nextConfig;
