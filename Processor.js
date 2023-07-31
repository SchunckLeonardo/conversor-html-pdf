class Processor {

    static Process(data) {
        let dataBrokenLine = data.split('\r\n')
        let rows = []

        dataBrokenLine.forEach(row => {
            let dataSeparated = row.split(';')
            rows.push(dataSeparated)
        })

        return rows
    }

}

module.exports = Processor