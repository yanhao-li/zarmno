const express = require('express');
const models = require('../models');
const router = express.Router();

router.post('/', (req, res) => {
  const { restaurantName, location } = req.body;

  models.Restaurant.build({ name: restaurantName, location: location }).save()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json({ errors: err }));
});

module.exports = router;
