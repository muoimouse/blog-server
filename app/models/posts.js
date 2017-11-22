var mongooes = require('mongoose')
var Schema = mongooes.Schema

var PostSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: false
    }
})

module.exports = mongooes.model('Posts', PostsSchema)