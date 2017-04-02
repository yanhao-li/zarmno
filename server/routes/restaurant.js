const express = require('express');
const models = require('../models');
const router = express.Router();

router.post('/', (req, res) => {
  const { restaurantName, location, currentUserId } = req.body;
  models.Restaurant.build({ name: restaurantName, location: location, UserId: currentUserId }).save()
    .then(function(x){res.json(x.get('id'))})
    .catch((err) => res.status(500).json({ errors: err }));
});

module.exports = router;
