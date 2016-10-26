var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require('../models/users');
var Saved = require('../models/saved');
var axios = require('axios');
var methodOverride  = require("method-override");
var x  = '';




/* GET home page. */
router.get('/', function(req, res, next) {

  axios.get('http://api.icndb.com/jokes/random')
    .then(function (response) {
      console.log(response.data.value.joke);
       x = response.data.value.joke;
    })
    .catch(function (error) {
      console.log(error);
    });

    if(!req.user){
      res.redirect('/login');
          }else{
      res.render('index', { user : req.user,title : 'Homepage',response : x});
    }


});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res, next) {
    Users.register(new Users({ username : req.body.username }), req.body.password, function(err, Users) {
        if (err) {
          return res.render('register', { error : err.message });
        }
        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user, error : req.flash('error')});
});
///////login
router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), function(req, res, next) {
    req.session.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/logout', function(req, res, next) {
    req.logout();
    req.session.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/jokes', function(req, res) {
  if(!req.user){
    res.redirect('/login');
        }else{
          Saved.find({}, function(err, jokes) {
          if (err) throw err;
          res.render('jokes', {
                  "jokes" : jokes
              });
          });
  }
});

router.post('/jokes', function(req, res) {
  var newSaved = Saved({
    joke : req.body.joke,
  });

  newSaved.save(function(err) {
    if (err) throw err;
    console.log('joke created!');
  });

res.redirect('/');

});

router.delete('/delete/:id', function(req, res) {

      var uid = req.params.id;
      Saved.remove({"_id":uid}, function(err, result) {
        var result =  (result === 1) ? { msg: 'Deleted' } : { msg: 'error: '+ err } ;
        console.log(result);
        res.redirect('/jokes');
      });
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;
