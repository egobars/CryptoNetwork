var express = require('express');
const jwt = require('jsonwebtoken')
var router = express.Router();

router.get('/', function(req, res, next) {
  if (req.user) {
    res.render('index_with_profile', {name: req.user.Username});
  }
  else
    res.render('index')
});

module.exports = router;
