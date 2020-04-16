/* Construir , aplanar y pintar una pared
1. construir la pared
2.aplanar la pared
3.pintar la pared
*/

const muro = {
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false
}

//funciones que ejecutan callbacks 
//fs.readdir(path,()=>{})<- NO
//function readdir  (args,callback){} <- SI
// declaración de una funcion 
//function construir (){
//...comportamiento
//}
//uso o llamada de la función 
//construir ()


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


