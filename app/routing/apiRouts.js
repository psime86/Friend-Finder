var friends = require("../data/friends.js");

module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var friendObject = {
            name: req.body.name,
            photo: req.body.name,
            scores: []
        }
    })
}