var mongoose = require("mongoose")
var PlayerModel = require("../models/player")

var playersController = {
  index: function(req, res){
    PlayerModel.find({}, function(err,docs){
      res.json(docs)
    })
  },
show: function(req,res){
  PlayerModel.findById({_id: req.params.id}, function(err,doc){
    res.json(doc)
  })
}
}

module.exports = playersController
