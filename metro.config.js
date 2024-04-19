// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);
// const path = require('path');
// const { generate } = require('@storybook/react-native/scripts/generate');

// generate({
//   configPath: path.resolve(__dirname, './.storybook'),
// });

// module.exports = {
//   /* existing config */
//   transformer: {
//     unstable_allowRequireContext: true,
//   },
//   resolver: {
//     sourceExts: [...defaultConfig.resolver.sourceExts, 'mjs'],
//   },
// };
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');
const {generate} = require('@storybook/react-native/scripts/generate');

// Generate Storybook configuration
generate({
  configPath: path.resolve(__dirname, './.storybook'),
});

// Get default Metro config
const defaultConfig = getDefaultConfig(__dirname);

// Merge with additional configurations for Storybook
const config = {
  transformer: {
    unstable_allowRequireContext: true,
  },
  resolver: {
    sourceExts: [...defaultConfig.resolver.sourceExts, 'mjs'],
  },
};

// Merge default config with Storybook config
module.exports = mergeConfig(defaultConfig, config);
