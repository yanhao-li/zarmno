var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var db = reuqire('../models');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id)
  });

  passport.deserializeUser(function(id, done) {
    db.User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done) {
      process.nextTick(function() {
        User.findOne({where: {email: email}}).then(function(user){
          if (user) {
             return done(null, false, {errors: 'Email already existed'})
          } else {
            const passwordDigest = db.User.generateHash(password)
            db.User.build({ email: email, passwordDigest: passwordDigest}).save()
              .then(() => res.json({ success: true }))
              .catch((err) => res.status(500).json({ errors: err }));
          }
        });
      })
  }
))


}
