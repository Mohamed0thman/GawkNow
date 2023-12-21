const {getDefaultConfig, mergeConfig} = require("@react-native/metro-config");

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const defaultAssetExts =
  require("metro-config/src/defaults/defaults").assetExts;
const defaultSourceExts =
  require("metro-config/src/defaults/defaults").sourceExts;

const config = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    assetExts: defaultAssetExts.filter(ext => ext !== "svg"),
    sourceExts: [...defaultSourceExts, "svg"],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
