import { Request, Response } from 'express';
import passport = require('passport');

export default class AuthRoutes {
  public routes(app): void {
    // Google routes.
    app.get(
      '/auth/google',
      passport.authenticate('google', {
        scope: ['profile', 'email'],
      }),
    );

    app.get(
      '/auth/google/callback',
      passport.authenticate('google'),
      (req: Request, res: Response) => {
        res.redirect('/');
      },
    );

    // Local auth routes.
    app.post(
      '/api/login',
      passport.authenticate('local', {
        successRedirect: '/campaigns',
        failureRedirect: '/login',
        failureFlash: true,
      }),
    );

    // Sign up route.
    app.post('/api/signup', async (req, res) => {
      const { username, password, email } = req.body;

      const user = await new User({
        username,
        password,
        email,
      }).save();

      res.send('fuck yeah');
    });

    app.get('/api/logout', (req, res) => {
      req.logout();
      res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
      res.send(req.user);
    });
  }
}
