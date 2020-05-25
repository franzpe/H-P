import 'reflect-metadata';
import { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import { routes, resolvers } from './services';
import errorHandlers from './middleware/errorHandlers';

export default class Server {
  private _app: Express;

  constructor(app: Express) {
    this._app = app;
  }

  setup = async () => {
    this.setupRest();
    await this.setupGraphql();
    applyMiddleware(errorHandlers, this._app);
  };

  private setupRest = () => {
    applyMiddleware(middleware, this._app);
    applyRoutes(routes, this._app, '/api/v1');
  };

  private setupGraphql = async () => {
    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: resolvers
      }),
      context: ({ req, res }) => ({ req, res })
    });

    apolloServer.applyMiddleware({ app: this._app, cors: { credentials: true, origin: 'localhost:3000' } });
  };

  start = (port: string) => {
    this._app.listen(port, () => console.log(`Server is running http://localhost:${port}...`));
  };
}
