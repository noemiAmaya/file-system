const fs= require ('fs')

fs.unlink('write.txt',(error)=>{
    if(error){
        console.log('El archivo no se puede eliminar',error)
        return
    }
    console.log ('El archivo ha sido eliminado')
})