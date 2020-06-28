const path = require('path');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const nextConfiguration = {};

module.exports = withPlugins(
  [
    withImages({
      exclude: path.resolve(__dirname, 'assets/images/svgs'),
      webpack(config, options) {
        config.module.rules.push({
          test: /\.svg$/,
          issuer: {
            test: /\.(js|ts)x?$/
          },
          use: ['@svgr/webpack']
        });
        return config;
      }
    })
  ],
  nextConfiguration
);
