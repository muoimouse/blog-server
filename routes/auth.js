'use strict'
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const users = require('../app/models/users')

const app = express;

router.post('/authenticate', function (req, res) {
    users.findOne({
        username: req.body.username
    }, function (err, user) {
        if ( err ) throw err
        if ( !user ) {
            res.json({ success: false, message: 'Authenticate failed. User not found.' })
        } else if (user) {
            if (user.password !== req.body.password) {
                res.json({success: false, message: 'Authenticate failed. Wrong password.'})
            } else {
                var token = jwt.sign(user, app.get('superSecret'))
            }
        }
    })
})

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource')
})

module.exports = router
