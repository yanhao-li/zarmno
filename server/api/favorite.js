const db = require('../models');

const favorite = {
  add: (req, res) => {
    const restaurantId = req.params.id;
    const userId = req.user.id;
    db.Favorite.build({ user_id: userId, restaurant_id: restaurantId }).save()
      .then(() => res.status(200).json({ success: true }))
      .catch((err) => res.status(500).json({ errors: err }));
  },

  browse: (req, res) => {
    const userId = req.user.id;
    db.Favorite.findAll({
      where: {
        user_id: userId,
      },
      attributes: ['restaurant_id'],
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
        user_id: userId,
        restaurant_id: restaurantId,
      },
    }).then(() => res.status(200).json({ success: true }), (err) => res.json({ errors: err }));
  },
};

module.exports = favorite;
