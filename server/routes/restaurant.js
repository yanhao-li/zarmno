const express = require('express');
const db = require('../models');
const authenticate = require('../middlewares/authenticate');
const router = express.Router();

router.post('/', authenticate, (req, res) => {
  const { restaurantName, location } = req.body;
  const ownerId = req.currentUser.id;
  db.Restaurant.build({ name: restaurantName, location: location, owner_id: ownerId }).save()
    .then((x) => { res.json(x.get('id')); })
    .catch((err) => res.status(500).json({ errors: err }));
});

router.get('/', authenticate, (req, res) => {
  const userId = req.currentUser.id;
  const role = req.currentUser.role;
  if(role === "business"){
    db.Restaurant.findAll({where: { owner_id: userId }}).then(
      function(restaurants){
        res.status(200).json({restaurants: restaurants});
      }
    );
  } else if(req.currentUser === "customer") {

  }
})

router.get('/:id', (req, res) => {
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
      res.json({restaurant: restaurantInfo, menu: menu});
    }
  );

})

router.put('/:id', (req,res) => {
  let restaurantId = req.params.id;
  let {fieldName, formValue} = req.body
  db.Restaurant.findById(restaurantId).then(
    function(restaurant){
      restaurant.update({
        [fieldName]: formValue
      }).then(() => res.json({success: true}));
    }
  );
})

module.exports = router;
