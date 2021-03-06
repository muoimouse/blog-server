'use strict'
const categories = require('../models/categories')
const baseController = require('./baseController')

class categoriesController extends baseController {
    index (req, res) {
        this.data = categories
        if ( req.query._id ) {
            return this.getRecord(req, res)
        }
        return this.getAll(res)
    }

    save (req, res) {
        this.data = new categories()
        this.data = Object.assign(this.data, req.body)
        return this.saveRecord(res)
    }

    delete (req, res) {
        // console.log(req.query)
        this.data = categories
        return this.deleteRecord(req, res)
    }
}

module.exports = categoriesController
