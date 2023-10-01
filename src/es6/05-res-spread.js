// asignacion de desestrucuracion


//SIRVE PARA ASIGNARLE A UNA VARIABLE
//EL VALOR DE ALGUN ELEMENTO DESEADO
//DENTRO DE UNA ARRAY U OBJETO.
//TIENE SU PROPIA SINTAXIS Y ES UTIL.




//dos tipos

// 1. ARRAYS destructuring

let fruits =  ["apple","banana","cacao"];
let [a, b] = fruits;
console.log(a,b);
    //le estamos asignando los valores de ese array a
    //dos variables, estos es desestructurar
    
    //su usa envez de llamar la posicion del elemento
    // fruits[1] = let [a,b] = fruits




// 2. OBJETOS destructuring

let user = {username:"oscaar", age : 43, elpepe : "la tulla"};
let {username, elpepe} = user
console.log(username,elpepe)

    //estamos creando una variable
    //username con el valor del username del objeto
    //... y asi

    //basicamente sirve para darle algun valor 
    //del objeto a una variable.
    //podemos asignar mas de uno
    //y esta es la sintaxis nesesaria

    //se usa envez de:
    //{username} = user   ==    user.username
    









//SPREAD  OPERATOR

let person = {name:"oscar", age: 23};
let country = "MX"

let data = {...person, country}
console.log(data)

    //esta sintaxis de  "...person"
    //esta mandando a todos los elementos de perosn
    //hacia data, con una sintaxis mas corta

//el operador de propragacion te trae a todos los 
//elementos del objeto que estes operando.

//ESTE OPERADOR TAMBIEN SE PUEDE USAR EN OBJETOS
//ARRAYS, STRINGS, Y MAS ITERABLES.






//REST

function sum(num, ...values){
    console.log(values, num + values[0]);
    return num + values[0];
};

sum(1,1,2,3)

            //console : [1,2,3] -  2


//es util cuando no conocemos la cantidad exacta de
//parametros que tendra una funcion.

//entonces estamos asignando el primer parametro
//en "num", y el resto dentro de values, 
//values se va a guardar en forma de array







//EL EJERCICIO PLAYGROUND DE PLATZI

//FUE QUE TE MANDABA DOS JSON(OBJETOS)
//Y TU TENIAS QUE UNIRLOS EN UN SOLO OBJETO
// USANDO SPREAD OPERATOR


//solucion:

//export function solution(json1, json2) {
 
//  return { ...json1, ...json2 }
// }
  