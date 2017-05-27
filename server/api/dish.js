const db = require('../models');

const dish = {
  add: (req, res) => {
    const { name, description, resId } = req.body;
    db.Dish.build({ name, description, restaurantId: resId }).save()
      .then((buildedDish) => res.json({ success: true, buildedDish }))
      .catch((err) => res.status(500).json({ errors: err }));
  },
  edit: (req, res) => {
    const id = req.params.id;
    const { name, description } = req.body;
    db.Dish.findById(id).then(
      (dishQueried) => {
        dishQueried.update({
          name,
          description,
        }).then((dishUpdated) => res.status(200).json({ dishUpdated }));
      }
    );
  },
  destroy: (req, res) => {
    const id = req.params.id;
    db.Dish.destroy(
      { where: {
        id,
      } }
    ).then(() => res.status(200).json({ success: true }), (err) => res.json({ errors: err }));
  },
};


module.exports = dish;
