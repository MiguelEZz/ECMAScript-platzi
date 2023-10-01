//LLAMADO A UNA API

import fetch from "node-fetch";

//tenemos que importar el fetch.
//ya lo instalamos pero es necesario importarlo

const response = await fetch("https://api.escuelajs.co/api/v1/products");
    //traemos la respuesta de la api y se la asignamos a response
const products = await response.json()
    // convertimos la api a formato .json
export {products}
    //exportamoms


//este es el top level await 
// ya no necesitamos una funcaion



//SI LE QUITAMOS EL AWAIT, EL PROGRAMA SE ROMPERÍA
//YA QUE EL PROGRAMA TIENE QUE HACER PETICION DE LA API
    //ESPERAR HASTA QUE LA PETICION SE HAYA RESPONDIDO
//CONVERTIR EN JSON
    //ESPERAR HAST QUE SE CONVIERTA

//Y LUEGO EXPORTAR LA RESPONSE DE LA API PARA SU POSTERIOR
//USO