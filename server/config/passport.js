const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('../models');
const passport = require('passport');

module.exports = function() {
  passport.serializeUser(function(user, done) {
    done(null, user.id)
  });

  passport.deserializeUser(function(id, done) {
    db.User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    function(email, password, done){
      db.User.findOne({
        where: { email: email },
      }).then(function(user){
        if (user) {
          if (bcrypt.compareSync(password, user.passwordDigest)) {
            return done(null, user)
          } else {
            return done(null, false, { errors: { form: 'username or password incorrect' } });
          }
        } else {
          return done(null, false, { errors: { form: 'username or password incorrect' } });
        }
      }, function(err) {
        return done(err);
      });
    }
  ));


}
