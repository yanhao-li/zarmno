const express = require('express');
const db = require('../models');
const router = express.Router();

const restaurant = {
  add: (req, res) => {
    const restaurant = req.body;
    const ownerId = req.user.id;
    db.Restaurant.build({ id: ownerId, name: restaurant.name, location: restaurant.location }).save()
      .then((restaurant) => { res.status(200).json({ restaurant }); })
      .catch((err) => res.status(500).json({ errors: err }));
  },

  browse: (req, res) => {
    db.Restaurant.findAll().then(
      (restaurants) => {
        res.status(200).json({ restaurants });
      }
    );
  },

  read: (req, res) => {
    const restaurantId = req.params.id;
    let restaurantInfo;
    let menu;
    const fetchRestaurantInfo = db.Restaurant.findOne({ where: { id: restaurantId } }).then(
      (restaurant) => {
        restaurantInfo = restaurant;
      }
    );
    const fetchDishes = db.Dish.findAll({ where: { restaurantId } }).then(
      (dishes) => {
        menu = dishes;
      }
    );
    Promise.all([fetchRestaurantInfo, fetchDishes]).then(
      () => {
        res.json({ restaurant: {
          info: restaurantInfo,
          menu,
        } });
      }
    );
  },

  edit: (req, res) => {
    const restaurantId = req.params.id;
    let { name, location, description } = req.body;
    db.Restaurant.findById(restaurantId).then(
      (restaurant) => {
        restaurant.update({
          name,
          location,
          description,
        }).then((restaurant) => res.status(200).json({ restaurant }));
      }
    );
  },
};

module.exports = restaurant;
