const db = require('../models');

const search = {
  query: (req, res) => {
    const key = req.query.key
    //query restaurant name
    if(isNaN(key)){
      db.Restaurant.findAll({
        where: {
          name: {
            $like: `%${key}%`
          }
        },
        limit: 5
      })
      .then(
        (restaurants) => {
          res.status(200).json({restaurants: restaurants})
        }
      )
    }
    //query restaurant code
    else {
      db.Restaurant.findAll({
        where: {
          id: {
            $like: `%${key}%`
          }
        },
        limit: 5
      })
      .then(
        (restaurants) => {
          res.status(200).json({restaurants: restaurants})
        }
      )
    }
  },
};

module.exports = search;
