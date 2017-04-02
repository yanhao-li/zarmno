const express = require('express');
const validateInput = require('../shared/validations/signup');
const bcrypt = require('bcrypt');
const models = require('../models');
const router = express.Router();

// when a post is made to the homepage

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);
  if (isValid) {
    const { email, password } = req.body;
    const passwordDigest = bcrypt.hashSync(password, 10);

    models.User.build({ email: email, passwordDigest: passwordDigest}).save()
      .then(() => res.json({ success: true }))
      .catch((err) => res.status(500).json({ errors: err }));
  } else {
    res.status(400).json(errors);
  }
});

module.exports = router;
