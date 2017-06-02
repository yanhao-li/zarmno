const validateInput = require('../shared/validations/signup');
const bcrypt = require('bcryptjs');
const db = require('../models');


// User Register: Create a user

const user = {
  add: (req, res) => {
    const { errors, isValid } = validateInput(req.body);
    if (isValid) {
      const { email, password, role } = req.body;
      const passwordDigest = bcrypt.hashSync(password, 10);

      db.User.build({ email, passwordDigest, role }).save()
        .then(() => res.json({ success: true }))
        .catch((err) => res.status(500).json({ errors: err }));
    } else {
      res.status(400).json(errors);
    }
  },
};

module.exports = user;
