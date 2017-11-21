'use strict'
const chai = require('chai')
const assert = chai.assert

const baseController = class Controller {
    constructor () {}

    saveRecord (res) {
        if ( this.data ) {
            this.data.save(function (err) {
                if ( err ) {
                    return res.send(err)
                }
                return res.json({ message: 'Categories created' })
            })
        }
    }
}
module.exports = baseController