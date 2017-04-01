const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

const router = express.Router();

router.post('/', (req, res) => {
  const { email, password } = req.body;

  User.query({
    where: { email },
  }).fetch().then((user) => {
    if (user) {
      if (bcrypt.compareSync(password, user.get('password_digest'))) {
        const token = jwt.sign({
          id: user.get('id'),
          email: user.get('email'),
        }, config.jwtsecret);
        res.json({ token });
      } else {
        res.status(401).json({ errors: { form: 'username or password incorrect' } });
      }
    } else {
      res.status(401).json({ errors: { form: 'username or password incorrect' } });
    }
  });
});

module.exports = router;
