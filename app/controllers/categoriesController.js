'use strict'
const categories = require('../models/categories')
const baseController = require('./baseController')

class categoriesController extends baseController {
    index(req, res) {
        categories.find(function (err, docs) {
            if (err) res.send(err)
            res.json(docs)
        })
    }

    save(req, res) {
        this.data = new categories()
        this.data = Object.assign(this.data, req)
        this.saveRecord(res)
    }

    delete(req, res) {
        categories.remove()
    }
}

module.exports = categoriesController
