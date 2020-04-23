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
//query parameters
server.get('/koders', (request, response) => {
    const {limit= 10}= request.query
    response.json({
        message: 'All the koders',
        data: {
            koders: kodemia.koders.slice(0, parseInt(limit))
    
        }
    })

})

server.post('/koders',(request,response)=>{
    const{ name,generation}= request.body
    /*const newKoder ={
        name: request.body.name,
        generation: request.body.generation
    }*/

   /*kodemia.koders.push({
        name,
        generation
    })*/

    response.json({
        message:'new koder added',
        data : {
            koder: {
                name,
                generation
            }
        }
    })

})

//uri parameters
//GET /koders/[name]
//GET /koders/charles -> name=charles
//GET /koders/fernanda-> name=fernanda
//GET /koders/[name]

/*server.get ('/koders/:name',(request,response)=>{
response.json({
    name: request.params.name
})
})*/


//query parameters
//http://servidor/ruta/del/recurso?
// GET http://api.kodemia.mx/koders?limit=5&front=10&to=100

//práctica 
//un endpoint que reciba el indice de un koder y regrese el koder que se encuentra en ese indice
//GET /koders/:indice->indice =0 ... kodemia.koders [indice]

server.get ('/koders/:indice',(request,response)=>{
 const {indice} = request.params
 response.json({
  message: 'El koder que se encuentra en este indice es',
  data:{
   name:kodemia.koders[indice]
  } 
})

})



server.listen(8080, () => {
    console.log('server is running')
})



//200.1.2.10
//charles.mx/users/charles/code/kodemia/septima-gen/my-first-api/index.js