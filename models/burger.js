var orm = require("../config/orm.js");

var burger = {
  //select all
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  //add a burger
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  //update a burger
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
