const fs = require('fs')

function copyFile(folder) {
    return new Promise((resolve, reject) => {
        fs.copyFile(folder, 'archivo.js', 'utf8', (error) => {
            if (error) {
                reject(error)
                return
            }
            resolve(`The folder '${folder}' was successfully copied`)
        })
    })
}

async function newFile() {
    const createNewFile = await copyFile('archivo.js', 'new file')
    return createNewFile
}

newFile()
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error('Error:', error))