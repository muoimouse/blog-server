const express = require('express')
const router = express.Router()
const categoriesController = require('../app/controllers/categoriesController')

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
        categories.index(req, res)
    })
    .post(function(req, res) {
        categories.save(req, res)
    })
    .delete(function(req, res) {
        categories.delete(req, res)
    })

module.exports = router
