/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {
  'auth/facebook': function(req, res, next) {
    passport.authenticate('facebook',
      function (err, user) {
        req.logIn(user, function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log('Log in successful');
          }
        })
    }) (req, res, next);
  },

  'auth/facebook/callback': function(req, res, next) {
    passport.authenticate('facebook',
      function (req, res) {
        console.log('callbacked');
      }) (req, res, next);
  }
};

