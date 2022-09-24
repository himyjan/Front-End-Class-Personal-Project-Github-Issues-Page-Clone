const UnoCSS = require('@unocss/webpack').default;

const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.cache = false;
    config.plugins.push(UnoCSS());
    return config;
  },
  typescript: {
    ignoreBuildErrors: true
  }
});
