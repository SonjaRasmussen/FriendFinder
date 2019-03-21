//================================================================
//Dependencies - include the path for out html
//================================================================

var path = require("path");

//================================================================
//Routing
//================================================================

module.exports = function(app){
    //HTML get requests
    //Below code handles when users "visits" a page

    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};