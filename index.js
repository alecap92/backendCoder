// Declarar una funcion constructora llamada Usuario

function Usuario (nombre,apellido,libros,mascotas){
    this.nombre = nombre
    this.apellido = apellido
    this.libros = libros
    this.mascotas = mascotas
}

const usuario = {
    nombre:'Juan',
    apellido:'perez',
    libros:[{book:"Cien Años de Soledad", Autor: 'Gabriel Garcia Marquez'}],
    mascotas:['perro']
}

let newUser = new Usuario(usuario.nombre,usuario.apellido,usuario.libros,usuario.mascotas)

console.log(newUser.nombre + ' ' +newUser.apellido) //GetFullName
newUser.mascotas = [...newUser.mascotas, 'perro'] // addMascota
console.log(newUser.mascotas.length) // getMascotas

newUser.libros = [...newUser.libros,{book:"Viaje al centro de la tierra", Autor: 'Hemingway'}]  // addBook
// console.log(newUser.libros) 

newUser.libros.map(i=>{console.log(i.book)}) //getBooks


// --------------------------- CONSTRUCTOR CLASS --------------------------- //

class User {
    constructor (nombre,apellido,libros,mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
}

