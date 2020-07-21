const path = require('path');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const nextConfiguration = {};

module.exports = withPlugins(
  [
    withImages({
      exclude: path.resolve(__dirname, 'assets/images/svgs'),
      assetPrefix: process.env.NODE_ENV === 'production' ? '/hackers' : '',
      webpack(config, options) {
        config.module.rules.push({
          test: /\.svg$/,
          issuer: {
            test: /\.(js|ts)x?$/
          },
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                svgoConfig: {
                  plugins: {
                    removeViewBox: false
                  }
                }
              }
            }
          ]
        });
        return config;
      }
    })
  ],
  nextConfiguration
);
