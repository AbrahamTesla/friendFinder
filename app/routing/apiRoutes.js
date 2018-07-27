/*Your apiRoutes.js file should contain two routes:
A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.*/

var friendsArray = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/getAllFriends", (req, res) => { 
        res.json(friendsArray)
    });

app.post('/api/friends',function(req,res){
    var friendsScores = req.body.scores;
    var scoresArray = [];
    var bestMatch =0;

    for(var i=0;i<friendsArray.length;i++){
        var scoresDiff = 0;

        for(var k=0;k<friendsScores.length;k++){
            scoresDiff += (Math.abs(parseInt(friendsArray[i].scores[k]) - parseInt(friendsScores[k])));   
        }
    
    scoresArray.push(scoresDiff);
}
// scoresArray = [ 4, 5, 6, 3, 10, 9];

//after all friends are compared, find best match
// for(var i=0; i<scoresArray.length; i++){
    //initial best match is 0. Then go thru each index
    //e.g. scoresArray[0]<=scoresArray[0] = bestMach=4
//     if(scoresArray[i] <= scoresArray[bestMatch]){
//       bestMatch = i;
//     }
//   }
for (var i =0;i<scoresArray.length;i++){
    if(scoresArray[i]<=scoresArray[bestMatch]){
        bestMatch = i;
    };
}
 
// return the best match result
var bestResult = friendsArray[bestMatch];
res.json(bestResult);

//pushes the new submission into the friendsArray
friendsArray.push(req.body);

  //return bestMatch data
//   var bff = friendList[bestMatch];
//   res.json(bff);

  //pushes new submission into the friendsList array
//   friendList.push(req.body);

});
};
