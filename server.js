//================================================================
//Dependencies -  a group of npm packages that give functionality
//================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//================================================================
//EXPRESS CONFIGURATION - sets up the server
//================================================================

var app = express();

//set up initial PORT

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'app/public/assets')));

//================================================================
//ROUTER
//the routes/maps of how to respond when users enter or request information from the URLS
//================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//================================================================
//LISTENER - "starts" the server
//================================================================

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT  + " visit http://localhost:" + PORT);
});
