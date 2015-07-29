/**
 * Created by lukedowell on 7/29/15.
 */
var express = require("express");
var path = require("path");
var app = express();

//Set our port
app.set('port', (process.env.PORT || 5000));

//Base request
app.get("/", function(req, res, next) {
    //The below code will work, but does not account for more complex actions later on
    //res.sendFile(__dirname + "/public/views/index.html");
    //We use path to handle creating our absolute paths so as to avoid mix ups
    res.sendFile(path.join(__dirname, "./public/views/index.html"));
});

//Create server
//Callback function isn't necessary
app.listen(app.get('port'), function() {
   console.log("Hey! Listening on Port: " + app.get("port"));
});