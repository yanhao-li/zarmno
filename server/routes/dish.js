const express = require('express');
const db = require('../models');
const router = express.Router();

router.post('/', (req, res) => {
  const { dishesName, dishesDescription, RestaurantId } = req.body;

  models.Dish.build({ name: dishesName, discription: dishesDescription, RestaurantId }).save()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json({ errors: err }));
});

router.put('/', (req, res) => {
  console.log(req.body)
  const { id, name, description, img  } = req.body;
  db.Dish.findById(id).then(
    function(dish){
      dish.update({
        name: name,
        description: description,
      }).then((dish) => res.status(200).json({dish: dish}));
    }
  );
})


module.exports = router;
