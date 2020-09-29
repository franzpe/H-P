export type Config = {
  env: string;
  dev: string;
  prod: string;
  port: string;
  version: number;
  auth: {
    accessTokenSecret: string;
    accessTokenExpiration: string;
    refreshTokenSecret: string;
    refreshTokenExpiration: string;
  };
};

const config: Config = {
  dev: 'development',
  prod: 'production',
  env: '',
  port: process.env.PORT || '3000',
  version: 1,
  auth: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || 'accessTokenSecret',
    accessTokenExpiration: process.env.ACCESS_TOKEN_EXPIRATION || '15m',
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || 'refreshTokenSecret',
    refreshTokenExpiration: process.env.REFRESH_TOKEN_EXPIRATION || '7d'
  }
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

let envConfig;
// require could error out if
// the file don't exist so lets try this statement
// and fallback to an empty object if it does error out
try {
  envConfig = require('./' + config.env);
  // just making sure the require actually
  // got something back :)
  envConfig = envConfig || {};
} catch (e) {
  envConfig = {};
}

// merge the two config files together
// the envConfig file will overwrite properties
// on the config object
export default { ...config, ...envConfig.default } as Config;
