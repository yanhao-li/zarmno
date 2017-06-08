const validateInput = require('../utils/validations/signupValidation');
const bcrypt = require('bcryptjs');
const db = require('../models');


// User Register: Create a user

const user = {
  add: (req, res) => {
    const { errors, isValid } = validateInput(req.body);
    if (isValid) {
      const { email, password, role } = req.body;
      const passwordDigest = bcrypt.hashSync(password, 10);

      db.User.findOrCreate({ where: { email }, defaults: { passwordDigest, role } }).then(
        (result) => {
          const created = result[1];
          if (created) {
            res.json({ success: true });
          } else {
            res.status(400).json({ errors: { email: 'This email already existed' } });
          }
        }).catch(
          (err) => res.status(400).json({ errors: { form: err } })
        );
    } else {
      res.status(400).json(errors);
    }
  },
};

module.exports = user;
