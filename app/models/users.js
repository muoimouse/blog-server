'use strict'
const mongooes = require('mongoose')
const Schema = mongooes.Schema

const UsersSchema = new Schema({
    username: {
        type: String,
        length: 30,
        required: true,
        unique: true
    },
    password: {
        type: String,
        length: {
            min: 8,
            max: 16
        },
        unique: false,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    created: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongooes.model('Categories', UsersSchema)