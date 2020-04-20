const fs = require('fs')

function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (error, data) => {
            if (error) {
                reject(error)
                return
            }
            resolve(`The file '${path}' contains: ${data}`)
        })
    })
}

async function readFile() {
    const readingFile = await readFilePromise('archivo.js')
    return readingFile
}

readFile()
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error('Error: ', error))