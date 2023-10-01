// tiene que ver con REGEX

// es una forma para generar diferentes filtros o diferentes
// reglas que nos van a permitir filtrar, buscar

// con REGEX podemos validar que una contraseña cumpla algun 
// estandar, cantidad de caracteres, mayuscula, minus, etc
// o validar que un correo sea valido

// ES UNA EXPRESION REGULAR

//....
 //tomar el curso de expresiones regulares de platzi


const regex = /\b(Apple)+\b/g;

const fruit = "apple, banana, kiwi, apple, orange, manzana, el pepe"

for (const match of fruit.matchAll(regex)){
    console.log(match);
}


// matchAll es un método en JavaScript que se utiliza para 
// obtener todas las coincidencias de una expresión regular
// en una cadena determinada. Devuelve un iterador que
// produce coincidencias para todas las ocurrencias de
// la expresión regular en la cadena.

//pero tambien se le puede mandar un "string" que queremos
//obtener sus coincidencias. matchAll("string")

//OUTPUT:
//nos devolvera un indice con informacion sobre:
//donde estan las coincidencias, input
//y otras caracteristicas que podemos usar segun sea el caso

//......................................



// Cuando se usa una expresión regular en métodos como match, test, search, replace, o matchAll, estos métodos pueden devolver diferentes tipos de resultados:


// match: Devuelve un array de las coincidencias encontradas o null si no se encuentra ninguna coincidencia.
// const str = 'Hello, World!';
// const regex = /Hello/;
// const result = str.match(regex);
// console.log(result);  // ['Hello']


// test: Devuelve un booleano que indica si hay al menos una coincidencia o no.
// const str = 'Hello, World!';
// const regex = /Hello/;
// const doesMatch = regex.test(str);
// console.log(doesMatch);  // true


// search: Devuelve el índice de la primera ocurrencia de la expresión regular en la cadena o -1 si no se encuentra ninguna coincidencia.
// const str = 'Hello, World!';
// const regex = /Hello/;
// const index = str.search(regex);
// console.log(index);  // 0
