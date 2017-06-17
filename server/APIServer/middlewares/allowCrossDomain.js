const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'),
  res.header('Access-Control-Allow-Method', '*'),
  res.header('Access-Control-Allow-Headers', '*');

  next();
}

module.exports = allowCrossDomain;
