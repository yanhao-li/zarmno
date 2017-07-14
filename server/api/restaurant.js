const db = require('../models');

const restaurant = {
  add: (req, res) => {
    const body = req.body;
    const ownerId = req.user.id;
    db.Restaurant.build({ id: ownerId, name: body.name, location: body.location }).save()
      .then((rst) => { res.status(200).json({ rst }); })
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
    const id = req.params.restaurantId;
    db.Restaurant.findOne({ where: { id } })
      .then((restaurant) => {
        res.status(200).json({ restaurant: restaurant});
      }
    );
  },

  edit: (req, res) => {
    const restaurantId = req.params.id;
    const { name, location, description } = req.body;
    db.Restaurant.findById(restaurantId).then(
      (rst) => {
        rst.update({
          name,
          location,
          description,
        })
        .then(
          (updatedRestaurant) => res.status(200).json({ updatedRestaurant })
        );
      }
    );
  },

  destroy: (req, res) => {

  },
};

module.exports = restaurant;
