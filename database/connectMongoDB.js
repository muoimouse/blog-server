const mongoClient = require('mongodb').MongoClient;
var config = require('../config/config');
var state = {
  db: null
}

exports.connect = function (url, done) {
  
}