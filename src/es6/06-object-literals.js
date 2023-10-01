// enhaced object literals 


//ES UTIL USARLO CUANDO RETORNAMOS UN OBJETO
//Y EL NOMBRE DE ESTE OBJETO VA A SER EL MISMO
//QUE EL PARAMETRO QUE LE MANDAMOS Y QUEREMOS
//USAR.

//ESTAMOS RETORNANDO UN ELEMENTO DE OBJETO
//"user" y que va a usar el valor del param "user"
//envez de poner los dos, colocamos solo uno
//y js, sabrá a qué nos estamos refiriendo.

//ES5
// function newUser(user,age,country){
//     return {
//         user :user
//     ...


//ES6
function newUser(user,age,country){
    return {
        user,
        age,
        country, 
    }
}
console.log(newUser("moki",43,"llamaperu"));
