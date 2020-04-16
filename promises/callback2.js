//proceso de inscripcion a kodemia 
//llamada
//entrevista
//apartado 
//asistir a clase 



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