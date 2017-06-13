const express = require('express');
const router = express.Router();
const api = require('../api');
const authenticate = require('../middlewares/authenticate');

/* -------------- user -------------- */
router.post('/user', api.user.add);

/* -------------- authToken -------------- */
router.post('/auth_token', api.authToken.add);

/* -------------- restaurant -------------- */
// add new restaurant
router.post('/restaurant', authenticate.authenticateUser, api.restaurant.add);
// browse all restaurants in the database
router.get('/restaurant', api.restaurant.browse);


// read the information of a restaurant
router.get('/restaurant/:restaurant_id', api.restaurant.read);
// edit one restaurant
router.put('/restaurant/:restaurant_id', authenticate.authenticateUser, api.restaurant.edit);

// list all items of the restaurant
router.get('/restaurant/:restaurant_id/item', api.item.browse);
// add a new item for the restaurant
router.post('/restaurant/:restaurant_id/item', api.item.add);

// for specific menu item
// view a item detail
router.get('/restaurant/:restaurant_id/item/:item_id', api.item.read);
// update dish information
router.put('/restaurant/:restaurant_id/item/:item_id', api.item.edit);
// delete a dish from the restaurant
router.delete('/restaurant/:restaurant_id/item/:item_id', api.item.destroy);

/* -------------- favorite -------------- */
router.get('/favorite', authenticate.authenticateUser, api.favorite.browse);
router.post('/favorite/:id', authenticate.authenticateUser, api.favorite.add);
router.delete('/favorite/:id', authenticate.authenticateUser, api.favorite.destroy);


module.exports = router;
