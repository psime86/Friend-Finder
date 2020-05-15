//Dependencies:

var express = require("express");

//Express var:

var app = express();
var PORT = process.env.PORT || 3000;

//Routs:

require("./app/routing/apiRouts.js");
require("./app/routing/htmlRouts");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function(){
    console.log("listening on PORT " + PORT);
});