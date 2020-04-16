const koder = {
    leHanLlamado: false,
    loHanEntrevistado: false,
    apartadoLugar: false,
    asisteAclase: false
}

function llamar(koderALlamar, callback) {
    setTimeout(() => {
        koderALlamar.leHanLlamado = true
        let error = koderALlamar.leHanLlamado
            ? null
            : 'no se pudo llamar al koder'
        callback(error, koderALlamar)
    }, 2000)
}


function entrevistar(koderAEntrevistar, callback) {
    setTimeout(() => {
        koderAEntrevistar.loHanEntrevistado = true
        let error = koderAEntrevistar.loHanEntrevistado
            ? null
            : 'no se pudo entrevistar al koder'
        callback(error, koderAEntrevistar)
    }, 2000)
}

function apartar(koderApartaLugar, callback) {
    setTimeout(() => {
        koderApartaLugar.apartadoLugar = true
        let error = koderApartaLugar.apartadoLugar
            ? null
            : 'no se apartar el lugar del koder'
        callback(error, koderApartaLugar)
    }, 2000)
}

function asistir(koderAsisteAClase, callback) {
    setTimeout(() => {
        koderAsisteAClase.asisteAclase = true
        let error = koderAsisteAClase.asisteAclase
            ? null
            : 'el koder no ha podido asistir a clase'
        callback(error, koderAsisteAClase)
    }, 2000)
}

llamar(koder, (errorDeLlamada, llamadaRealizada) => {
    if (errorDeLlamada) {
        console.error('errorDeLlamada:', errorDeLlamada)
        return
    }
    entrevistar(llamadaRealizada, (errorDeEntrevista, koderEntrevistado) => {
        if (errorDeEntrevista) {
            console.error('errorDeEntrevista', errorDeEntrevista)
            return
        }
        apartar(koderEntrevistado, (errorDeApartado, lugarApartado) => {
            if (errorDeApartado) {
                console.error('errorDeApartado:', errorDeApartado)
                return
            }
            asistir(lugarApartado, (errorDeAsistencia, koderAsistencia) => {
                if (errorDeAsistencia) {
                    console.error('errorDeAsistencia:', errorDeAsistencia)
                    return
                }
                console.log('koderAsistencia', koderAsistencia)

            })

        })

    })

})



console.log('koder', koder)


//PROMISES 


function llamarPromificada(koderALlamar) {
    return new Promise((resolve, reject) => {
        llamar(koderALlamar, (error, leHanLlamado) => {
            if (error) {
                reject(error)
                return
            }
            resolve(leHanLlamado)

        })

    })

}

function entrevistarPromificada(koderAEntrevistar) {
    return new Promise((resolve, reject) => {
        entrevistar(koderAEntrevistar, (error, loHanEntrevistado) => {
            if (error) {
                reject(error)
                return
            }
            resolve(loHanEntrevistado)
        })
    })

}

function apartarPromificada(koderApartaLugar) {
    return new Promise((resolve, reject) => {
        apartar(koderApartaLugar, (error, apartadoLugar) => {
            if (error) {
                reject(error)
                return
            }
            resolve(apartadoLugar)
        })
    })

}

function asistirPromificada(koderAsisteAClase) {
    return new Promise((resolve, reject) => {
        asistir(koderAsisteAClase, (error, asisteAclase) => {
            if (error) {
                reject(error)
                return
            }
            resolve(asisteAclase)
        })
    })

}

/*


llamarPromificada(koder)
    .then((koderALlamar) => {
        console.log('koderALlamar:', koderALlamar)
        entrevistarPromificada(koderALlamar)


            .then((koderAEntrevistar) => {
                console.log('koderAEntrevistar', koderAEntrevistar)
                apartarPromificada(koderAEntrevistar)


                    .then((koderApartaLugar) => {
                        console.log('koderApartaLugar', koderApartaLugar)
                        asistirPromificada(koderApartaLugar)

                        .then((koderAsisteAClase) => {
                            console.log('koderAsisteAClase', koderAsisteAClase)

                        })
                        .catch(error => console.error('error de asistencia:', error))

                    })
                    .catch(error => console.error('error de apartado:', error))





            })
            .catch(error => console.error('error de entrevista:', error))

    })
    .catch(error => console.error('error :', error))

    */

   async function inscripcion (){
    const koderALlamar =await llamarPromificada(koder)
    console.log ('koderALlamar:',koderALlamar)
    const koderAEntrevistar= await entrevistarPromificada(koderALlamar)
    console.log('koderAEntrevistar:',koderAEntrevistar)
    const koderApartaLugar =await apartarPromificada(koderAEntrevistar)
    console.log ('koderApartaLugar:',koderApartaLugar)
    const koderAsisteAClase =await asistirPromificada(koderApartaLugar)
    console.log ('koderAsisteAClase:',koderAsisteAClase)
    return koderAsisteAClase

}
inscripcion()
.then ((resultado)=>{
    console.log ('resultado:',resultado)
    console.log ('FIN')

})
.catch(error=> console.error('ERROR',error))





