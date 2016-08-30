var mongoose = require('mongoose')

var Schema = mongoose.Schema


var TeamSchema = new Schema({
  name: String
})

var PlayerSchema = new Schema({
  name: String,
  team: [TeamSchema]
})

var Player = mongoose.model("Player", PlayerSchema)
var Team = mongoose.model("Team", TeamSchema)

module.exports = {
  Player: Player,
  Team: Team
}
