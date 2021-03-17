class Operation {
    constructor (){
        console.log('desde el constructor...')
    }
    operacion(numero1, numero2, oper){
        
        const promesa = new Promise((resolve,reject)=>{
            const N1 = numero1;
            const N2 = numero2;
    
            if(oper === 'suma'){
                console.log(N1+N2)
            }else if(oper === 'resta'){
                console.log(N1-N2)
            } 
        })
        .then(console.log('ok'))
        .catch(err=>console.log(err))
    }
    operaciones(numero1,numero2,oper){
        this.operacion(numero1,numero2,oper)
    }
}

const resultado = new Operation()

console.log(resultado.operaciones(3,2,'suma'))

// Crea 2 funciones operacion y operaciones

// Operacion recibirá dos números y un string con el nombre de la operación a efectuar entre ellos: 
//'suma' ó 'resta' y cargará dinámicamente un módulo para realizar dicho cálculo. 

//operaciones llamará a operacion con los casos de prueba, representando sus salidas.

// operacion deberá devolver el resultado a operaciones a través de una promesa.
// Los cálculos habilitados estarán definidos en archivos separados empleando clases donde los argumentos de entrada se guardarán en propiedades instancia privadas y tendrán un método 'resultado' que hará efectiva la operación. 
// Este debe ser un proyecto de typescript que utilice clases, dynamic import, Promises, async await, funciones flecha y tipado en todos sus módulos. 
// Debe ser compilado para generar un archivo javascript ejecutable por Node.js.
