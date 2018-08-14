var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

//get all burgers
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//add a burger to table
router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name"], [req.body.burger_name], function(result) {
    res.json({ id: result.insertId });
  });
});

//update a burger
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      //if there's no changed rows, the id doesn't exist, so return 404
      return res.status(404).end();
    } else {
      //otherwise status is OK
      res.status(200).end();
    }
  });
});

module.exports = router;
