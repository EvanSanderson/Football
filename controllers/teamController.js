var mongoose = require("mongoose")
var TeamModel = require("../models/team")
var PlayerModel = require("../models/player")
var teamController = {
  index: function(req,res){
    var teams = []
    PlayerModel.find({}, function(err,docs){
      for(i=0; i<docs.length; i++){
        teams.push(docs[i].team.name)
      }
    })
    res.json(teams)
  }
}

module.exports = teamController
