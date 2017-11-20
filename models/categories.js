var mongooes = require('mongoose')
var Schema = mongooes.Schema

var CategoriesSchema = new Schema({
    name: {
        type: Number,
        required: true
    }
})

module.exports = mongooes.model('Categories', CategoriesSchema)