const fs = require('fs')
const express = require('express')
const kodemia = JSON.parse(fs.readFileSync('kodemia.json'))
const server = express()
server.use(express.json()) //middleware "software que va enmedio de algo"
//express.json parsea 
//endpoints: la combinación de un método y una ruta 
//método: métodos HTTP-GET,POST,DELETE,PUT,PATCH
//ruta:strings que denotan recursos en nuestro servidor 
server.get('/', (request, response) => {
    response.json({
        message: 'my first API is running'
    })
})

server.get('/koders', (request, response) => {
    response.json({
        message: 'All the koders',
        data: {
            koders: kodemia.koders
        }
    })

})

server.post('/koders',(request,response)=>{
    const newKoder ={
        name: request.body.name,
        generation: request.body.generation
    }

    kodemia.koders.push(newKoder)

    response.json({
        message:'new koder added',
        data : {
            koder: newKoder
        }
    })

})

server.listen(8080, () => {
    console.log('server is running')
})



//200.1.2.10
//charles.mx/users/charles/code/kodemia/septima-gen/my-first-api/index.js