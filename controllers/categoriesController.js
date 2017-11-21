'use strict'
const categories = require('../models/categories')
const baseController = require('./baseController')

class categoriesController extends baseController {
    index(req, res, next) {
        this.data = new categories();
        // console.log(this.data.findAll(function(err, categories) {
        //     console.log(categories)
        // }));
        console.log(this.data)
        // this.data.find({}, function(err, docs) {
        //     console.log(docs)
        // })
        // console.log(result);
        // res.json({message: 'ok'})

        // console.log(this.data.find({}));
    }

    save(req, res, next) {
        this.data = new categories()
        this.data = Object.assign(this.data, req)
        this.saveRecord(res)
    }
}

module.exports = categoriesController
