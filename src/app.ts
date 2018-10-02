if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import * as graphqlHTTP from 'express-graphql';
import cookieSession = require('cookie-session');
import passport = require('passport');
import schema from './graphql/schema';

class App {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public app: express.Application;

  private config(): void {
    this.app.use(bodyParser.json());

    this.app.use(
      '/graphql',
      graphqlHTTP({
        schema,
        graphiql: true,
      }),
    );

    this.app.use(
      cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEY],
      }),
    );

    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  private routes(): void {
    const router = express.Router();

    // Sample routes.
    router.get('/', (req: Request, res: Response) => {
      res.status(200).send({
        message: 'Hello World!',
      });
    });

    router.post('/', (req: Request, res: Response) => {
      const data = req.body;
      res.status(200).send(data);
    });

    this.app.use('/', router);
  }
}

export default new App().app;
