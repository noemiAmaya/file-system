const fs= require ('fs')

const newFolder= 'folder'

fs.mkdir(newFolder,(error)=>{
    if (error){
        console.log ('Error al crear la nueva carpeta')
        return
    }
    console.log ('La carpeta ha sido creada')
})