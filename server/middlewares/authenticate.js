const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secretKeys');
const db = require('../models');

const authenticate = {
  authenticateUser: function authenticateUser(req, res, next) {
    const authorizationHeader = req.headers.authorization;
    let token;

    if (authorizationHeader) {
      token = authorizationHeader.split(' ')[1];
    }

    if (token) {
      jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
          res.status(401).json({ error: 'Failed to authenticate' });
        } else {
          db.User.findOne({
            where: { id: decoded.id },
            attributes: ['id', 'email', 'role'],
          }).then((user) => {
            req.user = user;
            next();
            return null;
          }).catch(() => {
            res.status(404).json({ error: 'No such user' });
          });
        }
      });
    } else {
      res.status(403).json({
        error: 'No token provided',
      });
    }
  },
};

module.exports = authenticate;
