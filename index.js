"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///
// deployed on Heroku
// Url: https://ressource001.herokuapp.com/
///
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
//setup express app
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
/*Middleware ...*/
app.use(cors());
app.use(bodyParser.json());
app.use(function (err, req, res, next) {
    res.status(422).send({ errInfo: err.message });
});
/*MONGO connection...*/
//ConnectionString to mongoo-DB (Creates obj schema in DB)
//mongoose.connect('mongodb://localhost/obj');
//Overwrites to the global Node.js Promise prop.
//(<any>mongoose).Promise = global.Promise;
/*HTTP Methods...*/
app.get('/api/obj', function (req, res) {
    var testMsg = "Get Request";
    console.log(testMsg);
    res.send(testMsg);
});
app.post('/api/obj', urlencodedParser, function (req, res) {
    var testMsg = "Get Request";
    console.log(testMsg);
    //res.send(testMsg);
    var data = req.body;
    console.log(data);
    if (req.body.Key === "") {
        console.log("FUCK");
        res.send(data);
    }
    else {
        console.log("bla bla bla");
        res.send("data is not defined!");
    }
});
app.put('/api/obj', function (req, res) {
});
app.delete('/api/obj', function (req, res) {
});
//start the API server & listens for requests
app.listen(process.env.port || 3000, function () {
    console.log("listening for requests");
});
