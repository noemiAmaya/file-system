const fs= require ('fs')

const newFolder= 'folder-2'
fs.rmdir(newFolder,(error)=>{
    if (error){
        console.log ('Error al eliminar la carpeta',error)
    }
    console.log (`La carpeta ${newFolder} fue eliminada de forma exitosa `)
})