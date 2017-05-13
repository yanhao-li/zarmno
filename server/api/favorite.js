const express = require('express');
const db = require('../models');
const router = express.Router();

const favorite = {
  add: (req, res) => {
    const restaurantId = req.params.id;
    const userId = req.currentUser.id;
    db.Favorite.build({user_id: userId, restaurant_id: restaurantId}).save()
      .then(() => res.json({ success: true }))
      .catch((err) => res.status(500).json({success: false, errors: err}));

  },
  destroy: (req, res) => {
    const restaurantId = req.params.id;
    const userId = req.currentUser.id;
    db.Favorite.destroy(
      {
      where: {
        user_id: userId,
        restaurant_id: restaurantId
      }
    })
    .then(() => res.status(200).json({success: true}))
    .catch((err) => res.status(500).json({ success: false, errors: err}))
  }
}

module.exports = favorite;
