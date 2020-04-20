const fs = require('fs')

function appendFilePromises(path, data) {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data, 'utf8', (error) => {
            if (error) {
                reject(error)
                return
            }
            resolve(`New data to file '${path}'`)
        })
    })
}

async function newData() {
    const createNewData = await appendFilePromises('nuevo.txt', 'new data')
    return createNewData
}

newData()
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error('Error:', error))