const express = require('express');
const models = require('../models');
const router = express.Router();

router.post('/', (req, res) => {
  const { dishesName, dishesDescription, RestaurantId } = req.body;

  models.Dish.build({ name: dishesName, discription: dishesDescription, RestaurantId: RestaurantId }).save()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json({ errors: err }));
});

module.exports = router;
