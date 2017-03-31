const express = require('express');
const validateInput = require('../shared/validations/signup');

const router = express.Router();

// when a post is made to the homepage

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);
  if (isValid) {
    res.json({ success: true });
  } else {
    res.status(400).json(errors);
  }
});

module.exports = router;
