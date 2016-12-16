var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

function find_by_id(id, fn) {
  User.findOne(id).then(function (err, user) {
    if (err) {
      return fn(null, null);
    } else {
      return fn(null, user);
    }
  })
}

function find_by_facebook_id(id, fn) {
  User.findOne({fb_id: id}).then(function (err, user) {
    if (err) {
      return fn(null, null);
    } else {
      return fn(null, user);
    }
  })
}

passport.serializeUser(function (user, done) {
  done(null, user.id);
})

passport.deserializeUser(function (id, done) {
  find_by_id(id, function (err, user) {
    done(err, user);
  })
})

passport.use(new FacebookStrategy({
  clientID: process.env.FB_CLIENT_ID,
  clientSecret: process.env.FB_CLIENT_SECRET,
  callbackURL: 'http://localhost:1337/auth/facebook/callback'
}, function (access_token, refresh_token, profile, done) {
  find_by_facebook_id(profile.id, function (err, user) {
    console.log(user);
  })
}))