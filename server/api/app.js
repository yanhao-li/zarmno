const express = require('express');
const router = express.Router();
const api = require('../api');
const authenticate = require('../middlewares/authenticate');

//user
router.post('/user', api.user.add);

//session
router.post('/session', api.session.add);

//restaurant
router.post('/restaurant', api.restaurant.add);
router.get('/restaurant', api.restaurant.browse);
router.get('/restaurant/:id', api.restaurant.read);
router.put('/restaurant/:id', api.restaurant.edit);

//dish
router.post('/dish', api.dish.add);
router.put('/dish/:id', api.dish.edit);
router.delete('/dish/:id', api.dish.destroy);

//favorite
router.get('/favorite', authenticate.authenticateUser, api.favorite.browse);
router.post('/favorite', api.favorite.add);


module.exports = router;
