const fs= require ('fs')

fs.copyFile('write.txt','copia.txt','utf8',(error)=>{
    if(error) {
        console.error ('Hubo un error al copiar el archivo',error)
        return
    }
    console.log ('El archivo fue copiado exitosamente')
})