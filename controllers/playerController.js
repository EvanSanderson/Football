var mongoose = require("mongoose")
var PlayerModel = require("../models/player")
var TeamModel = require("../models/team")

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
},
create: function(req,res){
  var player = new PlayerModel({name: req.body.name})
  var team = new TeamModel({name: req.body.team[0].name})
  player.team.push(team)
  player.save(function(err){
    if(!err){
      console.log(player)
    }
  })
},
update: function(req,res){
  console.log(req.body);
  console.log(req.body.player);
  console.log("update gettin hit")
  PlayerModel.findOneAndUpdate({_id: req.body._id}, req.body, {new:true}).then(function(player){
    console.log(player)
    res.json(player)
  })
},
delete: function(req,res){
  console.log("delete gettin hit")
  console.log(req.params.id)
  PlayerModel.findOneAndRemove({_id: req.params.id}).then(function(res){
      console.log(res)
  })
}
}

module.exports = playersController
