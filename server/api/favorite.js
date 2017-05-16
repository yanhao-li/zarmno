const express = require('express');
const db = require('../models');
const router = express.Router();

const favorite = {
  add: (req, res) => {

  },

  browse: (req, res) => {
    const userId = req.user.id;
    db.Favorite.findAll({
      where: {
        user_id: userId
      },
      attributes: ['restaurant_id']
    }).then((favorites) => {
      res.status(200).json({ favorites: favorites });
    })
  }
}

module.exports = favorite
