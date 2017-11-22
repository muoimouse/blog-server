'use strict'

/**
 * @class baseController
 * @type {Controller}
 */
const baseController = class Controller {
    constructor () {}

    /**
     * @function getAll
     * @description used to get all record in collection
     * @param res
     */
    getAll (res) {
        if ( this.data ) {
            this.data.find(function (err, docs) {
                if ( err ) {
                    return res.send(err)
                }
                return res.json(docs)
            })
        }
    }

    /**
     * @function getRecord
     * @description used to ger record in collection
     * @param req
     * @param res
     */
    getRecord (req, res) {
        if ( this.data ) {
            this.data.findOne({ _id: req.query._id }, function (err, docs) {
                if ( err ) {
                    return res.send(err)
                }
                return res.json(docs)
            })
        }
    }

    /**
     * @function saveRecord
     * @description used to save record to mongoDB
     * @param res
     */
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

    /**
     * @function deleteRecord
     * @description used to delete record in collection
     * @param req
     * @param res
     */
    deleteRecord (req, res) {
        if ( this.data ) {
            this.data.remove({
                _id: req.body._id
            }, function (err, docs) {
                if ( err ) res.send(err)
                res.json({ message: 'Success deleted' })
            })
        }
    }

}
module.exports = baseController