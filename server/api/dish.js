const express = require('express');
const db = require('../models');
const router = express.Router();

router.post('/', (req, res) => {
  const {name, description, resId} = req.body;
  db.Dish.build({ name: name, description: description, restaurantId: resId }).save()
    .then((dish) => res.json({ success: true, dish: dish }))
    .catch((err) => res.status(500).json({ errors: err }));
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { name, description, img } = req.body;
  db.Dish.findById(id).then(
    function(dish){
      dish.update({
        name: name,
        description: description,
      }).then((dish) => res.status(200).json({dish: dish}));
    }
  );
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.Dish.destroy(
    {where: {
      id: id
    }}
  ).then(() => res.status(200).json({success: true}), (err) => res.json({errors: err}));
});


module.exports = router;
