const express = require('express');
const router = express.Router();
const api = require('../api');
const auth = require('../middlewares/auth');

/* -------------- user -------------- */
router.post('/user', api.user.add);
router.get('/user', api.user.browse);
router.get('/user/:userId', api.user.read);
router.put('/user/:userId', api.user.edit);
router.delete('/user/:userId', api.user.destroy);

/* -------------- authToken -------------- */
router.post('/auth_token', api.authToken.add);

/* -------------- restaurant -------------- */
// add new restaurant
router.post('/restaurant', auth.loginRequired, api.restaurant.add);
// browse all restaurants in the database
router.get('/restaurant', api.restaurant.browse);

// read the information of a restaurant
router.get('/restaurant/:restaurantId', api.restaurant.read);
// edit one restaurant
router.put('/restaurant/:restaurantId', api.restaurant.edit);
router.delete('/restaurant/:restaurantId', api.restaurant.destroy);


/* -------------- menu item -------------- */

// list all items of the restaurant
router.get('/item/restaurant/:restaurantId', api.item.browse);
// add a new item for the restaurant
router.post('/item/restaurant/:restaurantId', api.item.add);

// view a item detail
router.get('/item/:itemId', api.item.read);
// update dish information
router.put('/item/:itemId', api.item.edit);
// delete a dish from the restaurant
router.delete('/item/:itemId', api.item.destroy);

/* -------------- favorite -------------- */
router.get('/favorite/restaurant', api.favorite.restaurant.browse);
router.get('/favorite/restaurant/:restaurantId', api.favorite.restaurant.read);
router.post('/favorite/restaurant/:restaurantId', api.favorite.restaurant.add);
router.delete('/favorite/restaurant/:restaurantId', api.favorite.restaurant.destroy);

router.get('/favorite/item', api.favorite.item.browse);
router.post('/favorite/item/:itemId', api.favorite.item.add);
router.get('/favorite/item/:itemId', api.favorite.item.read);
router.delete('/favorite/item/:itemId', api.favorite.item.destroy);

router.get('/favorite/user', api.favorite.user.browse);

/* -------------- rating -------------- */
router.get('/rating/restaurant/:restaurantId', api.rating.restaurant.read);
router.post('/rating/restaurant/:restaurantId', api.rating.restaurant.add);
router.put('/rating/restaurant/:restaurantId', api.rating.restaurant.edit);

router.get('/rating/item/:itemId', api.rating.item.read);
router.post('/rating/item/:itemId', api.rating.item.add);
router.put('/rating/item/:itemId', api.rating.item.edit);

/* -------------- comment -------------- */
router.get('/comment/:commentId', api.comment.read);
router.put('/comment/:commentId', api.comment.edit);
router.delete('/comment/:commentId', api.comment.destroy);
router.post('/comment/restaurant/:restaurantId', api.comment.restaurant.add);
router.get('/comment/restaurant/:restaurantId', api.comment.restaurant.browse);
router.post('/comment/item/:itemId', api.comment.item.add);
router.get('/comment/item/:itemId', api.comment.item.browse);

module.exports = router;
