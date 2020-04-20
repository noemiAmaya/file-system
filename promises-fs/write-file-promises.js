const fs = require('fs')

function writeFilePromises(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, 'utf8', (error) => {
            if (error) {
                reject(error)
                return
            }
            resolve(`The folder '${path}' successfully created`)
        })
    })
}

async function newFile() {
    const createNewFile = await writeFilePromises('archivo.txt', 'new file')
    return createNewFile
}

newFile()
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error('Error:', error))