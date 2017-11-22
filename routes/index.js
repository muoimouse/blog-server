var express = require('express')
var router = express.Router()
var categoriesController = require('../app/controllers/categoriesController')

// Middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next();
});

/* Test route */
router.get('', function(req, res) {
    res.json({ message: 'Welcome to API' }, 200)
})
/* Categories route */
var categories = new categoriesController()
router.route('/categories')
    .get(function(req, res) {
        categories.index({ name: 'hihi' }, res)
    })
    .post(function(req, res) {
        categories.save(req.body, res)
    })
    .delete(function(req, res) {
        categories.save({name: 'hihi'}, res)
    })


module.exports = router
