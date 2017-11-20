var mongooes = require('mongoose')
var Schema = mongooes.Schema

var Aboutchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

module.exports = mongooes.model('about', Aboutchema)