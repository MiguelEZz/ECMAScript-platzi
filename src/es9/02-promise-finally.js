
const anotherFunction = () => {
    return new Promise((resolve,reject)=>{
        if(false){
            resolve("hey!");
        }else{
            reject("whoooops")
        }
    })
}


anotherFunction()
 .then(response => console.log(response))
 .catch(err => console.log(err))
 .finally(()=> console.log("porfin temino"));

//igual que el then o catch en caso de error

//podemos usar finally para saber cuando ya termino de ejecutarse
//una promesa y hacer algo cuando esto suceda.

//FINALLY SIEMPRE SE VA A EJECUTAR
//ignorando si la promesa retornó error(catch) o resolvio(then)

//siempre que la funcion temine de ejecutarse sin un error
// que lo tenena. hara lo que le pongas en el finally

//NO ES OBLIGATORIO PONER EL FINALLY