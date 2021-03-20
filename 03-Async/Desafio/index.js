console.clear()

// Desarrollar una función que permita recorrer un texto que se le pase como parámetro y muestre cada una de sus palabras en un tiempo estipulado. Al finalizar debe ejecutar una función que se le pasa como callback.
// Realizar tres llamadas a la función con porciones de texto que tienen que ser representados en forma ordenada. Inicialmente todas las palabras del primero, luego las del segundo y finalmente las del tercero. 
// Hacer configurable el tiempo de representación de palabras mediante un parámetro opcional. Si este no se define será cada un segundo.
// Al finalizar el la operación completa debe imprimir: ‘proceso completo’ y también mostrar la cantidad de palabras totales.


const texto = "El hijo de rana, Rinrín renacuajo Salió esta mañana muy tieso y muy majo Con pantalón corto, corbata a la moda Sombrero encintado y chupa de boda." // Selecciona el texto
const time = 200; // selecciona el tiempo



const miFuncion = (texto,tiempo=1000,callback)=>{
    const array = texto.split(' ')
    let pos = 0;
       
    const interval = setInterval(()=>{
            if (pos <= array.length){
                console.log(pos)
                console.log(array[pos])
                pos += 1
            } else{
                clearInterval(interval)
                console.log(callback())
            }
    },tiempo)

}

miFuncion(texto,time,()=>{console.log(`proceso completó ${texto.split(' ').length} palabras encontradas en el texto`)})