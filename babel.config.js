module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          'components/core': './src/components/core',
          configs: './src/configs',
          constant: './src/constant',
          contexts: './src/contexts',
          hooks: './src/hooks',
          layouts: './src/layouts',
          routes: './src/routes',
          screens: './src/screens',
          styles: './src/styles',
          types: './src/types',
          utils: './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        path: '.env',
      },
    ],
  ],
};
