const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
  // Google routes.
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );

  // Local auth routes.
  app.post(
    '/api/login',
    passport.authenticate('local', {
      successRedirect: '/campaigns',
      failureRedirect: '/login',
      failureFlash: true
    })
  );

  // Sign up route.
  app.post('/api/signup', async (req, res) => {
    const { username, password, email } = req.body;

    const user = await new User({
      username,
      password,
      email
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
};
