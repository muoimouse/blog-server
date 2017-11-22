'use strict'
const mongooes = require('mongoose')
const Schema = mongooes.Schema

const CategoriesSchema = new Schema({
    title: {
        type: Number,
        required: true,
        unique: true
    }
})

module.exports = mongooes.model('Categories', CategoriesSchema)