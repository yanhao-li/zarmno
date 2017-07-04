const db = require('../models');
const secretKey = require('../config/config.secret.json');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authToken = {
  add: (req, res) => {
    const { email, password } = req.body;
    db.User.findOne({ where: { email } })
    .then(
      (user) => {
        if (bcrypt.compareSync(password, user.passwordDigest)) {
          const token = jwt.sign({
            id: user.id,
            email: user.email,
            role: user.role,
          }, secretKey.jwt);
          res.json({ token });
        } else {
          res.status(401).json({ errors: { password: 'Incorrect Password' } });
        }
      })
      .catch(
        () => {
          res.status(401).json({ errors: { email: "Email doestn't exist" } });
        }
      );
  },
};

module.exports = authToken;
