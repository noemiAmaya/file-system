const fs= require ('fs')

const newFolder= 'nombre'

fs.readdir(newFolder,'utf8',(error,files)=>{
if (error){
    console.error (`La carpeta ${newFolder} no se puede leer`)
}
console.log ('El contenido de la carpeta es',files)
})