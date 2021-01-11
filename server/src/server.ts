import 'reflect-metadata';
import { container } from 'tsyringe';
import { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import { routes, resolvers } from './modules';
import errorHandlers from './middleware/errorHandlers';
import publicAssets from './middleware/publicAssets';

export default class Server {
  private _app: Express;

  constructor(app: Express) {
    this._app = app;
  }

  setup = async () => {
    this.setupRest();
    await this.setupGraphql();
    applyMiddleware(publicAssets, this._app);
    applyMiddleware(errorHandlers, this._app);
  };

  private setupRest = () => {
    applyMiddleware(middleware, this._app);
    applyRoutes(routes(), this._app, '/api/v1');
  };

  private setupGraphql = async () => {
    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: resolvers,
        container: { get: c => container.resolve(c as any) }
      }),
      context: ({ req, res }) => ({ req, res })
    });

    apolloServer.applyMiddleware({
      app: this._app as any,
      cors: false
    });
  };

  start = (port: string) => {
    this._app.listen(port, () => console.log(`Server is running http://localhost:${port}...`));
  };
}
