/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {
  login: function (req, res) {
    res.view();
  },

  'facebook': function(req, res, next) {
    passport.authenticate('facebook', { scope: ['id', 'email', 'displayName', 'link'] },
      function (err, user) {
        req.logIn(user, function (err) {
          if (err) {
            console.log(err);
          } else {

          }
        })
    }) (req, res, next);
  },

  'facebook/callback': function(req, res, next) {
    passport.authenticate('facebook',
      function (req, res) {

      }) (req, res, next);
  }
};

