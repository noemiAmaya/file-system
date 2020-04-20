const fs= require ('fs')

fs.appendFile ('write.txt','nuevos datos','utf8',(error) => {
    if (error){
        console.log ('No se puede agregar tu archivo')
        return
    }
    console.log('Se agregaron nuevos datos al archivo')
})