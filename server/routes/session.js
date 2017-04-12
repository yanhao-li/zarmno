const express = require('express');
const db = require('../models');
const secretKey = require('../config/secretKeys');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/', function(req, res) {
  const { email, password } = req.body;
  db.User.findOne({where: {email: email}}).then(
    function(user){
      if (bcrypt.compareSync(password, user.passwordDigest)){
        const token = jwt.sign({
          id: user.id,
          email: user.email
        }, secretKey.jwtSecret);
        res.json({ token });
      } else {
        res.status(401).json({ errors: { form: 'email or password incorrect' } });
      }
    })
    .catch(
      function(err){
        res.status(401).json({ errors: { form: 'email or password incorrect' } });
      }
    );
});

router.get('/', function(req, res) {

});

module.exports = router;
