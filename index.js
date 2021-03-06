var mongoose = require("mongoose");
var express = require("express");
var hbs = require("express-handlebars");

if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGOLAB_URI);
}else{
  mongoose.connect("mongodb://localhost/football");
}
var parser = require("body-parser");
var methodOverride = require('method-override');

var app = express();


var cors = require('cors')

app.use(methodOverride('_method'))



app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs")
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use("/assets", express.static("public"));


var playersController = require("./controllers/playerController.js");

app.get("/", function(req,res){
  res.render("app-welcome")
});

app.get("/players", playersController.index)

app.post("/players", playersController.create)
app.get("/players/:id", playersController.show)
app.put("/players/:id", playersController.update)
app.delete("/players/:id", playersController.delete)


app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
