var express = require('express');
var router = express.Router();
// require('../config/connectDB');
// Database
// var mongo = require('mongodb');
// var monk = require('monk');
// var db = monk('localhost:27017/blog');

var MongoClient = require('mongodb').MongoClient;
var Db = require('mongodb').Db,
    Server = require('mongodb').Server;
const url = 'mongodb://localhost:27017/blog';
var db = new Db('blog', new Server('localhost', 27017));
db.open(function(err, db){
    db.collection('products').find({}).toArray(function (err, result) {
        if (err) throw err;

        console.log(result);
    });
    db.close();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express ssssss' });
    var db1 = req.db;
    db.collection('products').find({}).toArray(function (err, result) {
    if (err) throw err;
        res.send(result);
    // console.log(result);
});
});
router.get('/test', function (req, res) {
    res.send('hello');
});
module.exports = router;
