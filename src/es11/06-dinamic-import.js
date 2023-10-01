//DINAMIC IMPORT

//anteriormente teniamos que hacer todos los  import al inicio 
//del codigo, y esto probocaba tiempos lentos de carga 


//por esto llega dinamic import, el cual permite importar
//los modulos dinamicamente
//segun el codigo los requiera, esto mejora el performace



//EN EL NAVEGADOR EN EL APARTADO  SOURCES
//VEMOS QUE AL INICIO NO SE HA DESCARGADO AUN EL MODULO
//PERO DESPUES QUE LO IMPORTAMOS DINAMICANTE
//YA LO PODEMOS VISUALIZAR


//.....................................

//HACER EL CURSO DE ASINCRONISMO CON JS DE PLATZI
const btn = document.getElementById("btn");

btn.addEventListener("click", async function(){
    const module = await import("./module.js");
    console.log(module);
    module.hello()
})


//tenemos que llamar a la funcion importada de esa manera
//ya que el import retorno siempre un 0BJETO

//......................................


// el modulo o el JS que nosotros importemos dinamicamente
//  no usara nada de red hasta que lo solicitemos, por lo cual
//   podremos verlo en la pestaña de red en cuanto solicitemos 
//   el recurso, esto ayuda a que no generemos trafico inncesario 
//   en la red mientras cargamos la pagina y solo al momento de
//    ser utiliado