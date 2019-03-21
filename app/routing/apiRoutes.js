var friends = require("../data/friends.js");

//Rounting the apiRoutes 
module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.post('/api/friends', function(req,res){
        var bestMatch = {
            name: "",
            photo: "",
            friendMatch: 1000
        };

        //results of the user's survey POST and parse it
        var userData = req.body;
        var userScores = userData.scores;

        var userName = userData.name;
        var userPhoto = userData.photo;




        //loop through friends data array to get each score

        for (var j = 0; j < friends.length; j++){
            console.log(friends[j].name);
            var totalDifference = 0;
        

        //loop through friends score and the user score to calculate the absolute difference between the two 

        for (var i = 0; i < 10; i++){
            totalDifference += Math.abs(parseInt(userScores[i]) - parseInt(friends[j].scores[i]));
        }

        if (totalDifference < bestMatch.friendMatch){

            bestMatch.name = friends[j].name;
            bestMatch.photo = friends[j].photo;
            bestMatch.friendMatch = totalDifference;
        }
    }
            friends.push(userData);

            res.json(bestMatch);

    });
};
