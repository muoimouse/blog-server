var express = require('express')
var router = express.Router()
var db = require('../config/mongoDB')
var categoriesController = require('../controllers/categoriesController')

/* Categories route */
router.get('/categories', function (req, res, next) {
    var categories = new categoriesController()
    categories.all({ name: 'hihi' }, res)
})
 router.post('/categories', function (req, res, next) {
     
 })



router.get('/test', function (req, res) {
    res.send('hello')
})
module.exports = router
