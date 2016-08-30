var mongoose = require("mongoose")
var PlayerModel = require("../models/player")

var playersController = {
  index: function(req, res){
    PlayerModel.find({}, function(err,docs){
      res.json(docs)
    })
  }
}

module.exports = playersController
