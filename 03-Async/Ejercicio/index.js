

console.clear();



const string = 'Alejandro'
let pos = 0;


const mostrarLetras = (palabra)=>{

   
        const myVar = setInterval(()=>{
            console.log(palabra.charAt(pos))
            pos += 1
            if(pos === 9){
                console.log(clearInterval(myVar))
            }
        },1000)

        
    
        
    
    
}

mostrarLetras(string)