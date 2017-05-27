var express = require("express");
var db = require('../models');
var router  = express.Router();


var router = express.Router();

// Import the model to use its database functions.
var burgers = require("../models/burgers.js");


// Create all our routes and set up logic within routes.
router.get("/", function(req, res) {
    db.burgers.findAll({
  }).then(function(burger_data){
    res.render('index', {
      burger_data
    }); 
  })
})

// Route for posting new burgers in database
router.post('/add', function(req,res) {
  console.log(req.body.burger_name + " burger added to database!");
  db.burgers.create({
    burger_name: req.body.burger_name,
    devoured: 0
  }).then(function(){
    res.redirect('/');
  });
});


// update the status of the burger
router.post('/burger/:id', function(req,res){
  console.log(req.params.id);
  db.burgers.update(
    {
      devoured: true,
    },
    {
      where: {
        id: req.params.id
    }
  }).then(function() {
    res.redirect('/');
  });
});

// Deletes all burgers in the mySQL db
router.post('/delete', function(req,res) {
  db.burgers.destroy({
    where: {}
  }).then(function(){
    res.redirect('/');
  });
});


// Export routes for server.js to use.
module.exports = router;
