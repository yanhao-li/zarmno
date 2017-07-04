const express = require('express');
const logger = require('./logger');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
app.use(bodyParser.json());
app.use('/api/v1', require('./api/app'));

models.sequelize.sync();

app.listen(3001, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(3001, 'localhost');
});
