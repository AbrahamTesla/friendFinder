//Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
var express = require("express");
var path = require("path");

var app = express();

var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT,()=>console.log("APP is listening to port: " + PORT));


