//          GENERATORS & ASYNC

async function* anotherGen(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGen();
other.next().then(response => console.log(response.value,response));
other.next().then(response => console.log(response.value,response));
other.next().then(response => console.log(response.value,response));
console.log("hello!")


//esta es una forma de mezclar generators con async function
//funciona tal y como lo planeamos
//es un generador que detiene su ejecucion completa
//y se reproduce en segundo plano gracias al async

// por eso es que aparecen despues del hello!






//USO DE FOR .......................................

async function arrayofNames(array){
    for await (let value of array){
        console.log(value)
    }
}

const names = arrayOfNames(["oscarin", "penin", "eso", "tilin"])
console.log("after")


//en este ejemplo esta es la forma de aplicarle el await
//a un for: for await (let value of array){

//como vemos en el output:
"after"
"oscarin",
"penin", 
"eso", 
"tilin"

//el async no bloquea la ejecucion del programa
//sino que este continua ccon el "afther"

// pero despues. asincronicamente  continua con el for
// await asincronico
