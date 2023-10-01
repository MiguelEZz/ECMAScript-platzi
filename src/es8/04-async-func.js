
//REPITO TOMAR LA CLASE DE ASINCRONISMO 
//CON JS DE PLATZI


// recordar tomar el curso de asincronismo con js

//PARA LAS FUNCIONES SINCRONAS EN JS
// TENEMOS LA PALABRAS RESERVADAS:
//async - await

//ya lo vimos anteriormente con las promesas
//vamos a reutilizar las promesas pero ahora tenemos nuevas palabras
//reservadas que nos van a dar una ventaja en el asincronismo


//las promesas es algo que va a pasar, hoy, mañana o nunca
//el uso de async/await nos va a ayudar a controlar el flujo
//de esta información.

const fnAsync = () =>{
    return new Promise((resolve, reject)=>{
         (true)
            ? setTimeout(()=>resolve("async!!"), 10000)
            : reject(new Error("error!!"));

    })
}

const anotherFn = async ()=>{
  const something = await fnAsync();
  console.log(something)
  console.log("hello!")
}

console.log("before")
anotherFn();
console.log("after")

//output:
//before
//after
//async!!
//hello!


// “async-await” es una manera de trabajar de una 
// forma mas cómoda con promesas, la palabra reservada “async” 
// quiere decir que una función siempre devolverá una promesa. 
// Ahora la palabra reservada “await”, solamente existe dentro
// de una función “async”, que hace que JavaScript espere hasta
// que la función promesa responda para continuar con el código
// dentro de ésta función, pero sin pausar la ejecución del 
// siguiente código.