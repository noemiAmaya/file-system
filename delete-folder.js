const fs = require('fs')

const newFolder = 'folder-2'

fs.readdir(newFolder, 'utf8', (error, files) => {
    if (error) {
        console.error(`La carpeta ${newFolder} no se puede leer`)
    }
    console.log('El contenido de la carpeta es', files)

    /*fs.unlink('',(error)=>{
        if(error){
            console.log('Los archivos no se pueden eliminar',error)
            return
        }
        console.log ('Los archivos han sido eliminados')
    })*/

    const options = { maxRetries: 2, recursive: true }

    fs.rmdir(newFolder, options, (error) => {
        if (error) {
            console.log('Error al eliminar la carpeta', error)
        }
        console.log(`La carpeta ${newFolder} fue eliminada de forma exitosa `)
    })

})
