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
  entities: ['dist/**/*.model.{js,ts}', 'dist/**/*.repository.{js,ts}'],
  migrations: ['dist/migrations/**/*.{js,ts}'],
  subscribers: ['dist/subscriber/**/*.{js,ts}'],
  cli: {
    entitiesDir: 'dist/**/*.model.js',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscriber'
  }
};

export = {
  ...ormOptions
};
