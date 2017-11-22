const config = require('./config.json')
const fs = require('fs')

module.exports.save = function (err) {
    let now = new Date()
    let error = `[ ${now} ] ${JSON.stringify(err)}`
    fs.writeFileSync(config.LOG_PATH, error, 'utf8')
}