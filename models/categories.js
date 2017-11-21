var mongooes = require('mongoose')
var Schema = mongooes.Schema

var CategoriesSchema = new Schema({
    title: {
        type: Number,
        required: true,
        unique: true
    }
})

// CategoriesSchema.statics.findAll = function(cb) {
//     return this.find({}, cb)
// }

module.exports = mongooes.model('Categories', CategoriesSchema)