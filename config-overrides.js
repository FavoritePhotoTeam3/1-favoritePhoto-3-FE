const path = require('path');

module.exports = function override(config) {
  config.resolve.alias = {
    '@components': path.resolve(__dirname, 'src/components'),
    '@feature': path.resolve(__dirname, 'src/feature'),
    '@api': path.resolve(__dirname, 'src/api'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@util': path.resolve(__dirname, 'src/util'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@route': path.resolve(__dirname, 'src/route'),
    '@store': path.resolve(__dirname, 'src/store'),
    '@page': path.resolve(__dirname, 'src/page'),
    '@layout': path.resolve(__dirname, 'src/layout'),
  };
  return config;
};