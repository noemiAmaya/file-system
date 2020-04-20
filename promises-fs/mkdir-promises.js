const fs = require('fs')

function mkdirPromise(path) {
    return new Promise((resolve, reject) => {
        fs.mkdir(path, (error) => {
            if (error) {
                reject(error)
                return
            }
            resolve(`The folder '${path}' was created`)
        })
    })
}

async function createFolder() {
    const creatingFolder = await mkdirPromise('newFolder')
    return creatingFolder
}

createFolder()
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error('Error: ', error))