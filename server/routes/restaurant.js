const express = require('express');
const db = require('../models');
const authenticate = require('../middlewares/authenticate');
const router = express.Router();

router.post('/', authenticate, (req, res) => {
  const { restaurantName, location, currentUserId } = req.body;
  db.Restaurant.build({ name: restaurantName, location, UserId: currentUserId }).save()
    .then((x) => { res.json(x.get('id')); })
    .catch((err) => res.status(500).json({ errors: err }));
});

router.get('/', authenticate, (req, res) => {
  if(req.currentUser.role === "business"){
    db.Restaurant.findAll()
  } else if(req.currentUser === "customer") {

  }
})

module.exports = router;
