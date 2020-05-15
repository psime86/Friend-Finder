//Dependencies:

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Vars:

var app = express();
var PORT = process.env.PORT || 3000;

//Body parser and Express

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

//Routs:

require("./app/routing/apiRouts.js")(app);
require("./app/routing/htmlRouts")(app);


app.listen(PORT, function(){
    console.log("listening on PORT " + PORT);
});