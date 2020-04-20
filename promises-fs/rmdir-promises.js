const fs = require('fs')

function rmdirPromises(path) {
    return new Promise((resolve, reject) => {
        fs.rmdir(path, (error) => {
            if (error) {
                reject(error)
                return
            }
            resolve(`The folder '${path}}' was deleted`)
        })
    })
}

async function deleteFolder() {
    const deletingFolder = await rmdirPromises('newFile')
    return deletingFolder
}

deleteFolder()
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error('Error:', error))