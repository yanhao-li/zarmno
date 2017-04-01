const express = require('express');
const validateInput = require('../shared/validations/signup');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const router = express.Router();

// when a post is made to the homepage

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);
  if (isValid) {
    const { email, password } = req.body;
    const passwordDigest = bcrypt.hashSync(password, 10);

    User.forge({
      email, passwordDigest,
    }, { hasTimestamps: true }).save()
      .then(() => res.json({ success: true }))
      .catch((err) => res.status(500).json({ error: err }));
  } else {
    res.status(400).json(errors);
  }
});

module.exports = router;
