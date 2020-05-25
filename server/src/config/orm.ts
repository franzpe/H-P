import { ConnectionOptions } from 'typeorm';
import config from '.';

export const ormOptions: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'hackers_and_painters',
  synchronize: config.env === config.dev,
  logging: false,
  entities: ['dist/**/*Entity.js'],
  migrations: ['dist/migration/**/*.js'],
  subscribers: ['dist/subscriber/**/*.js'],
  cli: {
    entitiesDir: 'dist/**/*Entity.js',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  }
};
