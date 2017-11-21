'use strict'
const chai = require('chai')
const assert = chai.assert
const fs = require('fs')

/**
 * @class baseController
 * @type {Controller}
 */
const baseController = class Controller {
    constructor () {}

    /**
     * function saveRecord
     * @description used to save record to mongoDB
     * @param res
     */
    saveRecord (res) {
        if ( this.data ) {
            this.data.save(function (err) {
                if ( err ) {
                    fs.writeFile('storage/logs/log', err, 'utf8')
                    return res.send(err)
                }
                return res.json({ message: 'Categories created' })
            })
        }
    }
}
module.exports = baseController