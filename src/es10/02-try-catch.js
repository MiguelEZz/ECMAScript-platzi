try{
    hello();
} catch (error){
    console.log(error)
}

console.log("eso tilin")

try{
    hello();
} catch {
    console.log("hay un error, que abuso!!")
}

//TRY en español es INTENTAR
//sirve para manejar errores 
//cuando el codigo puede devolver error colocas try
//para que el error no detenga el programa

//sino que si detecta error
//dentra en el 
//CATCH
//este puede tener un parametro, se le mandará el error que ha
//sucedido en el try. pero no es obligatorio

//LO IMPORTANTE ES QUE PUEDES CONTROLAR ERRORES
//Y QUE NO DETENGAN LA EJECUCION.
