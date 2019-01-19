var express = require("express");
var path = require("path");
var data = require("../data/friends.js");

function init(expressApp) {
    console.log("API ROUTES");

    //Routes
    expressApp.get("/api/friends", function (req, res) {
        return res.json(data.arrFriends.arr);
    });

    expressApp.post("/api/friends", function (req, res) {

        var newFriend = req.body;
        var min = -1;
        var id = -1;
        for(var i = 0; i < data.arrFriends.arr.length; ++i)
        {
            var TotalDifference =0;
            for(var j = 0; j < data.arrFriends.arr[i].scores.length; ++j)
            {
                TotalDifference += Math.abs(data.arrFriends.arr[i].scores[j] - newFriend.scores[j]);
            } 
            
            if(TotalDifference < min || id == -1)
            {
                min = TotalDifference;
                id = i;
            }
        }

        data.arrFriends.arr.push(newFriend);
        res.json(data.arrFriends.arr[id]);
    });
};

exports.init = init;
