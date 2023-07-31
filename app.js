const Reader = require('./Reader');
const Writer = require('./Writer')
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const PDFWriter = require('./PDFWriter')

const leitor = new Reader()
const escritor = new Writer()

async function main() {
    const datas = await leitor.Read('./users.csv')
    let dataProcessed = Processor.Process(datas)
    
    let usuarios = new Table(dataProcessed)

    let html = await HtmlParser.Parse(usuarios)

    escritor.Write(Date.now() + ".html", html)
    PDFWriter.WritePDF(Date.now() + '.PDF', html)
}

main()