//LAS PROMESAS SON UNA FORMA DE TRABAJAR EL ASINCRONISMO

//en js podemos hacerlo con 
//callbacks, promesas, async/Await

const anotherFunction = () => {
    return new Promise((resolve,reject)=>{
        if(true){
            resolve("hey!");
        }else{
            reject("whoooops")
        }
    })
}


anotherFunction()
 .then(response => console.log(response))
 .catch(err => console.log(err));

//basicamente la promesa es una formad de crear
//espacios de procesos asincronos

//tu codigo no se va a quedar a esperar que que
//la promesa se termine de ejecutar. lo ejecuta
//de manera asincrona
//y como una promesa, puede retornar pronto
// o nunca.


//a la hora de llamar a la funcion usamos "then y "catch"
//then va a retornar lo que hayas puesto en "resolve"
//catch va a retornar lo que hayas puesto en "reject"

//y esto es lo necesario para usarlo en alguna
//logica.







//TAMBIEN TENGO QUE PARENDER SOBRE
//CALLBACK
//Async/Await: