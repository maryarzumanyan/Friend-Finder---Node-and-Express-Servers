var express = require("express");
var path = require("path");

function init(expressApp) {
    console.log("HTML ROUTES");

    // Routes
    expressApp.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    expressApp.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};

exports.init = init;