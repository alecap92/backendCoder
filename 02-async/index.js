console.clear()

let suma = require ('./suma.js');
let resta = require ('./resta.js');



function operacion(numero1,numero2,operation){	
	
	switch(operation){		
		 
		case 'suma': 
		    let sum = new suma.Suma(numero1,numero2);
			let resSuma = sum.resultado()
			
			return new Promise((resolve,reject)=>{
				if(resSuma){
					setTimeout(()=>{
						resolve(resSuma)
					},0)
				}else{
					reject("Error en la suma")
				}	
				console.log('suma')
			})
		
		case 'resta':
			console.log('resta')
			let res = new resta.Resta(numero1,numero2);
			let resResta = res.resultado()

			// resResta = null 

			return new Promise((resolve,reject)=>{
				if(resResta){
					setTimeout(()=>{
						resolve(resResta)
					},0)
				}else{
					reject("Error en la resta")
				}			
			})

	}	
}
function operaciones(){
	operacion(3, 2, 'resta')
	    .then((resultado)=>console.log(resultado))
		.catch((err)=>console.log(err))
}

operaciones();