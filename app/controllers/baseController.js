'use strict'
const chai = require('chai')
const assert = chai.assert
const fs = require('fs')
// const config = require('../../config/config.json')
const saveLog = require('../../config/saveLog')
/**
 * @class baseController
 * @type {Controller}
 */
const baseController = class Controller {
    constructor () {}

    getAll (res) {
        if ( this.data ) {
            this.data.find(function (err, docs) {
                if ( err ) {
                    saveLog.save(err)
                    return res.send(err)
                }
                return res.json(docs)
            })
        }
    }

    /**
     * function saveRecord
     * @description used to save record to mongoDB
     * @param res
     */
    saveRecord (res) {
        if ( this.data ) {
            this.data.save(function (err) {
                if ( err ) {
                    saveLog.save(err)
                    return res.send(err)
                }
                return res.json({ message: 'Categories created' })
            })
        }
    }

}
module.exports = baseController