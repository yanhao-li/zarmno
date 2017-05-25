const express = require('express');
const db = require('../models');
const router = express.Router();

const restaurant = {
  add: (req, res) => {
    const restaurant = req.body;
    const ownerId = req.user.id;
    db.Restaurant.build({ id: ownerId, name: restaurant.name, location: restaurant.location }).save()
      .then((restaurant) => { res.status(200).json({ restaurant: restaurant }) })
      .catch((err) => res.status(500).json({ errors: err }));
  },

  browse: (req, res) => {
    db.Restaurant.findAll().then(
      function(restaurants){
        res.status(200).json({restaurants: restaurants});
      }
    );
  },

  read: (req, res) => {
    let restaurantId = req.params.id;
    let restaurantInfo;
    let menu;
    let fetchRestaurantInfo = db.Restaurant.findOne({where: {id: restaurantId}}).then(
      function(restaurant){
        restaurantInfo = restaurant;
      }
    );
    let fetchDishes = db.Dish.findAll({where: {restaurantId: restaurantId}}).then(
      function(dishes){
        menu = dishes;
      }
    );
    Promise.all([fetchRestaurantInfo, fetchDishes]).then(
      function(){
        res.json({restaurant:{
          info: restaurantInfo,
          menu: menu
        }});
      }
    );
  },

  edit: (req, res) => {
    let restaurantId = req.params.id;
    let { name, location, description } = req.body
    db.Restaurant.findById(restaurantId).then(
      function(restaurant){
        restaurant.update({
          name: name,
          location: location,
          description: description
        }).then((restaurant) => res.status(200).json({restaurant: restaurant}));
      }
    );
  }
}

module.exports = restaurant;
