'use strict'
var categories = require('../models/categories');

const controller = class Controller {
    constructor() {
        this.categories = new categories()
    }

    all(req, res, next) {
        this.categories.name = req.name
        this.categories.save(function (err) {
            if ( err ) {
                res.send(err)
            }
            res.json({ message: 'Categories created' })
        })
    }
}
module.exports = controller
