const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(async (username, password, done) => {
    const user = await User.findOne({ username: username });

    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, user);
  })
);
