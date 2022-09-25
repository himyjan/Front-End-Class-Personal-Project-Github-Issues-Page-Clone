const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

// const viteTsconfig = require('vite-tsconfig-paths');
// const tsconfigPaths = viteTsconfig.default;
// const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-backgrounds',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, '../src')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: true },
        },
      },
    },
    '@storybook/addon-a11y',
    'storybook-addon-themes',
    'storybook-addon-designs',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    previewMdx2: true,
    storyStoreV7: true,
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
  // async viteFinal(config) {
  //   return mergeConfig(config, {
  //     plugins: [tsconfigPaths()],
  //   });
  // },
};
