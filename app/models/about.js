'use strict'
const mongooes = require('mongoose')
const Schema = mongooes.Schema

const Aboutchema = new Schema({
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