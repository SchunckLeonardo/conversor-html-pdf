const fs = require('fs')
const util = require('util')

class Writer {
    constructor() {
        this.writer = util.promisify(fs.writeFile)
    }

    async Write(filename, datas) {
        try {
            await this.writer(filename, datas)
            return true
        } catch(err) {
            return false
        }
    }
}

module.exports = Writer