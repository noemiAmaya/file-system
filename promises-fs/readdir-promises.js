const fs = require('fs')

function readdirPromises(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (error, files) => {
            if (error) {
                reject(error)
                return
            }
            resolve(`The folder '${path}}' contains : ${files}`)
        })
    })
}

async function readFolder() {
    const readingFolder = await readdirPromises('newFile')
    return readingFolder
}

readFolder()
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error('Error:', error))