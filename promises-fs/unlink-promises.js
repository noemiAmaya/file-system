const fs = require('fs')

function unlinkPromise(path) {
    return new Promise((resolve, reject) => {
        fs.unlink(path, (error) => {
            if (error) {
                reject(error)
                return
            }
            resolve(` The file was deleted '${path}' `)
        })
    })
}

async function deleteFolder() {
    const deleteAFolder = await unlinkPromise('nuevo.txt')
    return deleteAFolder
}

deleteFolder()
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error('Error:', error))