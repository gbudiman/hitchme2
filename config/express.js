var passport = require('passport');

module.exports.express = {
  custom_middleware: function(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function(req, res, next) {
      res.locals.user = req.session.user;
      next();
    })
  }
}