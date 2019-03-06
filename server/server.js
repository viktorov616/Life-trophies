const express          = require('express');
const session          = require('express-session');
const mongoose         = require('mongoose');
const MongoStore       = require('connect-mongo')(session);
const cookieParser     = require('cookie-parser');
const bodyParser       = require('body-parser');
const expressValidator = require('express-validator');
const apiRoutes        = require('./routes');
const errorHandlers    = require('./handlers/errorHandlers');

const app = express();

app.use(express.static('public/assets'));
app.use('/public/images', express.static('public/images'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());

app.use(cookieParser(process.env.SECRET));

app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));

app.use('/', apiRoutes);

app.use(errorHandlers.notFound);
app.use(errorHandlers.validationErrors);

if (app.get('env') === 'development') {
  app.use(errorHandlers.developmentErrors);
}

app.use(errorHandlers.productionErrors);


module.exports = app;
