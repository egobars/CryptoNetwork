var express = require('express');
var passport = require('passport');
var request = require('request')

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', function(req, res, next) {
  var user = {username: req.body.username, password: req.body.password};
  request.post(
    {
      url: 'https://cryptonetworkapi.azurewebsites.net/crypto-network/account/create?login=' + req.body.username + '&password=' + req.body.password + '&username=kek',
    },
    (err, response, body) => {
      if (err) {
      next(err)
      }
      req.logIn(user, function(err) {
        return err
            ? next(err)
            : res.redirect('/');
      })
    }
  )
});

module.exports = router;
