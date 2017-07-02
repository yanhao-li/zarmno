const express = require('express');
const logger = require('./logger');
const bodyParser = require('body-parser');
const models = require('./models');
const allowCrossDomain = require('./middlewares/allowCrossDomain');

const app = express();
app.use(bodyParser.json());
app.use(allowCrossDomain);
app.use('/v1', require('./api/app'));

models.sequelize.sync();

app.listen(8080, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(8080, 'localhost');
});
