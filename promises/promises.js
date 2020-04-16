//constructor de promesas
/*promise ( resolve,reject)=>{
if (todo ok){
    resolve('ok')
    return
}
    reject ('error')
}
})
*/
//const 
//si quiero crear una promesa 
/*const miPrimerPromesa =newPromise((resolve,reject)=>{
    if (todomal){
        reject ('error')
        return
    }
    resolve ('ok')

})
miPrimerPromesa
.then((resultado)=>{//recibe lo que se pasa en resolve
    console.log ('resultado:',resultado') //resultado:ok


})
.catch((error)=>{
console.log ('error:',error)//error: 'todo mal'
})
*/
/*
function miPrimerPromesa (){
  return new Promise (()=>{
      if (todo mal){
          reject ('todo esta en llamas')
          return
      }
      resolve ('todo cool')

  })   
}
miPrimerPromesa()
.then((result)=> console.log (result) )
.catch((error)=> console.log (error))

*/

const muro = {
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false
}

function construir(muroAConstruir, callback) {
    setTimeout(() => {
        muroAConstruir.estaConstruido = true
        let error = muroAConstruir.estaConstruido
            ? null
            : 'no se pudo construir el muro'
        callback(error, muroAConstruir)
    }, 3000)
}


function aplanar(muroAAplanar, callback) {
    setTimeout(() => {
        muroAAplanar.estaAplanado = true
        let error = muroAAplanar.estaAplanado
            ? null
            : 'no se pudo aplanar'
        callback(error, muroAAplanar)
    }, 3000)
}

function pintar(muroAPintar, callback) {
    setTimeout(() => {
        muroAPintar.estaPintado = true
        let error = muroAPintar.estaPintado
            ? null
            : 'no se pudo pintar'
        callback(error, muroAPintar)
    }, 3000)
}

construir(muro, (errorDeConstruccion, muroConstruido) => {
    if (errorDeConstruccion) {
        console.error('errorDeConstruccion:', errorDeConstruccion)
        return
    }
    aplanar(muroConstruido, (errorDeAplanado, muroAplanado) => {
        if (errorDeAplanado) {
            console.error('errorDeAplanado:', errorDeAplanado)
            return
        }
        pintar(muroAplanado, (errorDePintado, muroPintado) => {
            if (errorDePintado) {
                console.error('errorDePintado:', errorDePintado)
                return
            }
            console.log('muroPintado', muroPintado)
        })
    })
})

console.log('muro', muro)


//PROMIFICACION
//el proceso de wrappear una funcion que hace uso de callbacks para que ahora sea una promesa
/*


function construirPromificada(muroAConstruir) {
    return new Promise((resolve, reject) => {
        construir(muroAConstruir, (error, muroConstruido) => {
            if (error) {
                reject(error)
                return
            }
            resolve(muroConstruido)

        })

    })

}

function aplanarPromificada(muroAAplanar) {
    return new Promise((resolve, reject) => {
        aplanar(muroAAplanar, (error, muroAplanado) => {
            if (error) {
                reject(error)
                return
            }
            resolve(muroAplanado)
        })
    })

}

function pintarPromificada(muroAPintar) {
    return new Promise((resolve, reject) => {
        pintar(muroAPintar, (error, muroAPintar) => {
            if (error) {
                reject(error)
                return
            }
            resolve(muroAPintar)
        })
    })

}

construirPromificada(muro)
    .then((muroConstruido) => {
        console.log('muroConstruido:', muroConstruido)
        aplanarPromificada(muroConstruido)


            .then((muroAplanado) => {
                console.log('muroAplanado', muroAplanado)
                pintarPromificada(muroAplanado)


                    .then((muroPintado) => {
                        console.log('muroPintado', muroPintado)

                    })
                    .catch(error => console.error('error pintado:', error))


            })
            .catch(error => console.error('error aplanado:', error))

    })
    .catch(error => console.error('error :', error))
    */




    //ASYNC/AWAIT
    //Donde use await, la funcion que lo contiene debe ser marcada como asincrona
    //las funciones marcada con await ,regresan una promesa 
    // AWAIT construirPromificada (muro) -> asi no sirve

/*
async function principal (){
    await construirPromificada(muro)
}
*/


     async function principal (){
        const muroConstruido =await construirPromificada(muro)
        console.log ('muroConstruido:',muroConstruido)
        const muroAplanado= await aplanarPromificada(muroConstruido)
        console.log('muroAplanado:',muroAplanado)
        const muroPintado =await pintarPromificada(muroAplanado)
        console.log ('muroPintado:',muroPintado)
        return muroPintado

    }
    principal()
    .then ((resultado)=>{
        console.log ('resultado:',resultado)
        console.log ('FIN')

    })
    .catch(error=> console.error('ERROR',error))
    





