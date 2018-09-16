if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./models/Event');
require('./models/Arc');
require('./models/Weapon');

const schema = require('./graphql/schema');

require('./services/googleAuth');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
