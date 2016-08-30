var mongoose = require("mongoose");
var express = require("express");
var conn = mongoose.connect("mongodb://localhost/football");

var app = express();

var playersController = require("./controllers/playerController.js");

app.get("/", playersController.index);

app.listen("4000", function(){
  console.log("HELLOOOO")
})
