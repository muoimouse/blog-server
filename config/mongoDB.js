var mongoClient = require('mongodb').MongoClient
var mongooes = require('mongoose');
// var Db = require('mongodb').Db;
// var Server = require('mongodb').Server;
var state = {
  db: null
}

exports.connect = function (url, done) {
  if ( state.db ) return done()
  mongoClient.connect(url, function (err, db) {
    if ( err ) return done(err)
    state.db = db
    done()
  })
}

exports.get = function () {
  return state.db
}

exports.close = function (done) {
  if ( state.db ) {
    state.db.close(function (err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}