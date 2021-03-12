
// --------------------------- FUNCION CONSTRUCTORA --------------------------- //

 function UsuarioC (nombre,apellido,libros,mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    UsuarioC.prototype.getFullName = function(){
        return this.nombre +' '+this.apellido
    }
    
    UsuarioC.prototype.getMascotas = function(){
        return this.mascotas
    }
    UsuarioC.prototype.addMascota = function(mascota) {
        this.mascotas.push(mascota)
    }
    UsuarioC.prototype.getBooks = function(){
        return this.libros.map(i=>i.nombre)
    }
    UsuarioC.prototype.addBook = function(libro){
        return this.libros.push(libro)
    }


let newU = new UsuarioC('alejandro','cabrejo',[{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}],['perro', 'gato'])

newU.addMascota('vaca')
newU.addBook({nombre: 'El señor de las moscas2',autor: 'William Golding2'})
// console.log(newU.getBooks())




// --------------------------- CONSTRUCTOR CLASS --------------------------- //
class Usuario {
    constructor (nombre,apellido,libros,mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    addMascota(mascota) {
        this.mascotas.push(mascota)
    }
    getMascotas() {
        return this.mascotas.length
    }
    addBook(libro){
        this.libros.push(libro)
    }
    getBooks(){
        return this.libros.map(i=>(i.nombre))   
    }
    getFullName(){
        return this.nombre+' '+this.apellido
    }
}

let usuario = new Usuario('Juan','Perez',[{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}],['perro', 'gato'])
// console.log(usuario.getBooks()) 



