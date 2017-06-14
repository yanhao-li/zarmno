const db = require('../models');

const favorite = {
  restaurant: {
    add: (req, res) => {
      const restaurantId = req.params.id;
      const userId = req.user.id;
      db.Favorite.build({ userId: userId, restaurantId: restaurantId }).save()
        .then(() => res.status(200).json({ success: true }))
        .catch((err) => res.status(500).json({ errors: err }));
    },

    browse: (req, res) => {
      const userId = req.user.id;
      db.Favorite.findAll({
        where: {
          userId: userId,
        },
        attributes: ['restaurantId'],
      }).then((favorites) => {
        const temp = favorites.map((everyFavorite) => everyFavorite.restaurant_id);
        res.status(200).json({ favorites: temp });
      });
    },

    destroy: (req, res) => {
      const restaurantId = req.params.id;
      const userId = req.user.id;
      db.Favorite.destroy({
        where: {
          userId: userId,
          restaurantId: restaurantId,
        },
      }).then(() => res.status(200).json({ success: true }), (err) => res.json({ errors: err }));
    },
  },

  item: {
    add: (req, res) => {

    },

    browse: (req, res) => {

    },

    destroy: (req, res) => {

    },

    read: (req, res) => {

    },
  },

  user: {
    browse: (req, res) => {

    }
  }
};

module.exports = favorite;
