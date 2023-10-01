//VAMOS A CONSUMIR UNA API CON
//TOP LEVEL AWAIT

//AREMOS EL USO DE fakeapi.platzi.com

import  {products} from "./products.js";

console.log(products);
console.log("hey!!")


// permite usar el operador await fuera de una función 
// asíncrona en un módulo de JavaScript. Antes de esta 
// adición, await solo podía usarse dentro de funciones
// asíncronas.

// Con el top-level await, puedes usar await directamente en 
// el nivel superior de un módulo, es decir, fuera de cualquier 
// función. Esto puede ser útil en ciertos escenarios,
// especialmente cuando estás trabajando con módulos y
// necesitas inicializar o cargar datos de manera asíncrona
// antes de que el módulo esté completamente cargado.



// TOMAR EL CURSO DE NPM
    //para saber sobre npm, imports, modulos

     
//1. instalaremos una dependencia para poder hacer fetch
//con node. para hacer una peticion a la api
    //$ npm install node-fetch


//2. hacemos una peticion a la api para traer sus valores
//y los convertimos en .json


//  ----------------------------------------

//EL TOP LEVEL AWAIT
//SIRVE PARA USAR LOS AWAIT (esperar a que la logica temine para
//continuar)
// SIN NECECIDAD DE UNA FUNCION ASYNC QUE LO CONTENGA





//SI LE QUITAMOS EL AWAIT, EL PROGRAMA SE ROMPERÍA
//YA QUE EL PROGRAMA TIENE QUE HACER PETICION DE LA API
    //ESPERAR HASTA QUE LA PETICION SE HAYA RESPONDIDO
//CONVERTIR EN JSON
    //ESPERAR HAST QUE SE CONVIERTA

//Y LUEGO EXPORTAR LA RESPONSE DE LA API PARA SU POSTERIOR
//USO