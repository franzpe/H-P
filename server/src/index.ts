import Server from './server';
import express from 'express';

import config from './config';
import { createConnection } from 'typeorm';
import ormOptions from './config/orm';

process.on('uncaughtException', e => {
  console.log(e);
  process.exit(1);
});

process.on('unhandledRejection', e => {
  console.log(e);
  process.exit(1);
});

(async () => {
  const server = new Server(express());
  await createConnection(ormOptions as any);
  await server.setup();
  server.start(config.port);
})();
