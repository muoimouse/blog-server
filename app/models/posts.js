'use strict'
const mongooes = require('mongoose')
const Schema = mongooes.Schema

const PostSchema = new Schema({
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