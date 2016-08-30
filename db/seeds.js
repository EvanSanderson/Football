var mongoose = require("mongoose")

var conn = mongoose.connect("mongodb://localhost/football")

var PlayerModel = require("../models/player")
var TeamModel = require("../models/team")

PlayerModel.remove({}, function(err){

})

TeamModel.remove({}, function(err){

})

var tyler = new PlayerModel({name: "Tyler"})
var evan = new PlayerModel({name: "Evan"})
var jacqui = new PlayerModel({name: "Jacqui"})

var giants = new TeamModel({name: "Giants"})
var packers = new TeamModel({name: "Packers"})
var redskins = new TeamModel({name: "Redskins"})

var players = [tyler, evan, jacqui]
var teams = [giants, packers, redskins]

for(i=0; i<players.length; i++){
  players[i].team.push(teams[i])
  players[i].save(function(err){
    if(err){
      console.log(err)
    } else {
      console.log("player was saved")
    }
  })
}
