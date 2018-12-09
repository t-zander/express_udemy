const express = require('express');
const app = express();
const mongooseConnect = require('./database/connect');

const bodyParser = require('body-parser');
const morgan = require('morgan');

const feedRoutes = require('./routes/feed.routes');

const PORT = 8000;

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET POST PUT PATCH DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api/feed', feedRoutes);

mongooseConnect.connectToMongoose();
app.listen(PORT);
