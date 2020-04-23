
const request={
    body:{
        //name:'charles',
        generation: 7,
        age:24,
        gender:'male',
        email:'ewjiwnefi@iwfhsd'
    }
}

//deconstrucción (ES6)

//deconstrucción de objeto 
// esta es la sintaxis const {atributos que quiero obtener}= el objeto a deconstruir (del que quiero sacar atributos)
const {name,generation} = request.body
console.log ('name:',name)
console.log ('generation:',generation)

//renombramiento en la deconstruccion
//se usa el operador :
//lado izquierdo es el nombre del atributo como esta en el objeto
//lado derecho de los : es el nombre deseado
const{name:koderName, age:koderAge}= request.body

console.log ('koderName:',koderName)

//dar un valor por defecto 
//se usa el operador de asignacion (=)

const {phone = '55592304'} = request.body
console.log ('phone:',phone)


//todo junto 
const {name: mentorName='Isra'}=request.body
console.log ('mentorName:',mentorName)

//buenas practicas 
//usar varias lines al deconstruir mas de 2 atributos deunobjeto
/*const {
    name:dudeName ='dude',
    phone,
    age:dudeAge=18,
    generation
} =request.body 
*/
//----------------------------------------

//deconstruccion de un arreglo 

const koders= ['Mar','Elvira','Airy','Fer']

//sintaxis  const [ elementosPosicionales que quiero del arreglo]= arreglo a ser deconstruido

const [x,y,z]=koders

console.log ('x:',x)
console.log ('y:',y)
console.log ('z:',z)

//spread y rest operator (...)
// spread es esparcir,nos ayuda a sacar los valores de un objeto
//rest   nos ayuda a agrupar el resto de atributos/miembors en un solo contenedor

//rest operator (...), se caracteriza porque se usa dentro de una deconstruccion,de lado izquierdo del igual

const {email,... restoDelObjeto}=request.body
console.log ('email:',email)
console.log ('restoDelObjeto:',restoDelObjeto) //tipo objeto

//arrays 
const [unKoder,... restoDelArreglo]=koders
console.log ('unKoder:',unKoder)
console.log ('restoDelArreglo:',restoDelArreglo)


//spread operator (...) pero de lado derecho del igual 
const koderPersonal={
    name:'name',
    age:'age'

}

const koderKodemiaInfo ={
    generation:7,
    fechaDeIngreso: new Date ()
}

const koderCompleto ={...koderPersonal, ...koderKodemiaInfo}

console.log ('koderCompleto:',koderCompleto)

const koderMasCompleto ={
    colorFav:'morado',
    peliculaFav:'eterno resplandor',
    ...koderCompleto,
    
}

console.log ('koderMasCompleto:',koderMasCompleto)


//Array 

const sextaGen=['Adan','']
const septimaGen=['Fer','Omar','Elvira']

const sextaYSeptima=[...sextaGen,...septimaGen]
console.log ('sextaYSeptima:',sextaYSeptima)