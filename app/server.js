//Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
var express = require("express");
var path = require("path");
var cors = require('cors');

var app = express();

var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;


// require("./routing/apiRoutes")(app);
// require("./routing/htmlRoutes")(app);
var apiRoutes = require('./routing/apiRoutes.js');
var htmlRoutes = require('./routing/htmlRoutes.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



//cors
app.use(cors());

//router
apiRoutes(app);
htmlRoutes(app);

//server listening to port 3000
app.listen(PORT,()=>console.log("APP is listening to port: " + PORT));


