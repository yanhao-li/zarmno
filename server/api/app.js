const express = require('express');
const router = express.Router();
const api = require('../api');
const authenticate = require('../middlewares/authenticate');

/*-------------- user --------------*/
router.post('/user', api.user.add);

/*-------------- authToken --------------*/
router.post('/auth_token', api.authToken.add);

/*-------------- restaurant --------------*/

//add new restaurant
router.post('/restaurant', authenticate.authenticateUser, api.restaurant.add);
//browse all restaurants in the database
router.get('/restaurant', api.restaurant.browse);
//read the information of a restaurant
router.get('/restaurant/:id', api.restaurant.read);
//edit one restaurant
router.put('/restaurant/:id', authenticate.authenticateUser, api.restaurant.edit);

/*-------------- dish --------------*/
router.post('/dish', api.dish.add);
router.put('/dish/:id', api.dish.edit);
router.delete('/dish/:id', api.dish.destroy);

/*-------------- favorite --------------*/
router.get('/favorite', authenticate.authenticateUser, api.favorite.browse);
router.post('/favorite/:id', authenticate.authenticateUser, api.favorite.add);
router.delete('/favorite/:id', authenticate.authenticateUser, api.favorite.destroy);


module.exports = router;
