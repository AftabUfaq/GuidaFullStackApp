const { getDefaultConfig } = require('expo/metro-config');

// Get the default configuration
const defaultConfig = getDefaultConfig(__dirname);

// Destructure transformer and resolver from default config
const { transformer, resolver } = defaultConfig;

// Modify transformer to include babelTransformerPath for SVG files
defaultConfig.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("metro-react-native-babel-transformer"),
};

// Modify resolver to exclude SVG files from asset extensions and include them in source extensions
defaultConfig.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg"],
};

// Export the modified configuration
module.exports = defaultConfig;
