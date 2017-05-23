var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burgers = require("../models/burgers.js");


// Create all our routes and set up logic within routes.
router.get("/", function(req, res) {
    burgers.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Route for posting new burgers in database
router.post("/", function(req, res) {
    burgers.create([
        "burger_name", "devoured"
    ], [
        req.body.name, false
    ], function() {
        res.redirect("/");
    });
});


// update the status of the burger
router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.update({
        devoured: true
    }, condition, function() {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;