// Desarrollar una función que permita recorrer un texto que se le pase como parámetro y muestre cada una de sus palabras en un tiempo estipulado. Al finalizar debe ejecutar una función que se le pasa como callback.
// Realizar tres llamadas a la función con porciones de texto que tienen que ser representados en forma ordenada. Inicialmente todas las palabras del primero, luego las del segundo y finalmente las del tercero. 
// Hacer configurable el tiempo de representación de palabras mediante un parámetro opcional. Si este no se define será cada un segundo.
// Al finalizar el la operación completa debe imprimir: ‘proceso completo’ y también mostrar la cantidad de palabras totales.


const texto = "lorem ipsum lorem2 ipsum2 lorem3 ipsum3 lorem4 ipsum4"
const array = texto.split(' ')

const miFuncion = ()=>{
    console.log(array.charAt(0))
}

miFuncion(texto)