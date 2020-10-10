import { ConnectionOptions } from 'typeorm';
import config from '.';

const ormOptions: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'hackers_and_painters',
  synchronize: config.env === config.dev,
  logging: false,
  entities: ['dist/**/*Entity.js'],
  migrations: ['dist/migrations/**/*.js'],
  subscribers: ['dist/subscriber/**/*.js'],
  cli: {
    entitiesDir: 'dist/**/*Entity.js',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscriber'
  }
} 

export = {
  ...ormOptions
};
