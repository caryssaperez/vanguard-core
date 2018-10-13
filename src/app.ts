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

// Routes
import AuthRoutes from './routes/authRoutes';

class App {
  public routePrv: AuthRoutes = new AuthRoutes();
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

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
}

export default new App().app;
