const fs = require('fs')

const newFolder = 'folder-2'


const options = { maxRetries: 2, recursive: true }

fs.rmdir(newFolder, options, (error) => {
    if (error) {
        console.log('Error al eliminar la carpeta', error)
    }
    console.log(`La carpeta ${newFolder} fue eliminada de forma exitosa `)
})


