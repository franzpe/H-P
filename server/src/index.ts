import Server from './server';
import express from 'express';
import { container } from 'tsyringe';
import { createConnection, useContainer } from 'typeorm';

import config from './config';
import ormOptions from './config/orm';
import di from './utils/di';

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

  useContainer({
    get: c => container.resolve(c as any)
  });

  const connection = await createConnection(ormOptions as any);
  di.register(connection);

  await server.setup();
  server.start(config.port);
})();
