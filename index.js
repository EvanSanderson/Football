var mongoose = require("mongoose");
var express = require("express");
var hbs = require("express-handlebars");
var conn = mongoose.connect("mongodb://localhost/football");
var parser = require("body-parser");
var methodOverride = require('method-override');

var app = express();


var cors = require('cors')

app.use(cors());
app.use(methodOverride('_method'))



app.set("port", process.env.PORT || 4000);
app.set("view engine", "hbs")
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use("/assets", express.static("public"));


var playersController = require("./controllers/playerController.js");
var teamController = require("./controllers/teamController.js");

app.get("/", function(req,res){
  res.render("app-welcome")
});

app.get("/players", playersController.index)
app.post("/players", playersController.create)
app.get("/players/:id", playersController.show)
app.get("/teams", teamController.index);

app.listen("4000", function(){
  console.log("HELLOOOO")
})
