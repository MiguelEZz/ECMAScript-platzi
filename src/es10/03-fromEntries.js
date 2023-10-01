//CREO QUE MANEJAREMOS MEJORE ESTOS TEMAS
//EN EL CURSO DE PROGRAMACION ORIENTADA A OBJETOS

//ya trabajamos con el Object.entries que nos desarma un OBJETO
//y devuelve ARRAY DE ARRAYS con la clave valor.

//FROMENTRIES
//transforma array de arrays en OBJETOS

const entries = new Map([["name", "oscar"],["age", 54]]);

console.log(entries)
console.log(Object.fromEntries(entries));

//output
// Map { name → "oscar", age → 54 }
// Object { name: "oscar", age: 54 }




// El método Object.fromEntries(iterable) en JavaScript
// se puede aplicar a cualquier iterable que contenga pares
// clave-valor, como un array de arrays, un Map, o cualquier 
// objeto iterable que cumpla con la estructura de pares 
// clave-valor.

//[["name", "oscar"],["age", 54]] este array de arrays
//comun tambien se le puede convertir en un objeto con
//fromEntries()





//ESTOS METODOS NOS VAN A AYUDAR A MANEJAR MEJOR  LA INFORMACION
//QUE USUALMENTE LLEGA DE LAS CONSULTAS DE API.

//USAR ESTOS RECURSOS NOS AYUDARA A SER MAS EFICIENTES
//A LA HORA DE APLICAR REGLAS QUE NOS AYUDEN A MOSTRAR LA 
//INFORMACION COMO DEVERIA ESTAR
//O A GUARDARLAS DENTRO DE UNA ESTRUCTURA MUY PARTICULAR
//O UNA BASE DE DATOS.






//EN 2021 EXISTEN TODOS ESTOS METOSOS OBJECT.
// Object.assign(): Copia el valor de todas las propiedades enumerables propias de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino.
// Object.create(): Crea un nuevo objeto con el prototipo y propiedades especificados.
// Object.defineProperty(): Agrega una propiedad al objeto, o modifica una existente, con una descripción dada.
// Object.defineProperties(): Agrega nuevas propiedades o modifica las propiedades existentes directamente en un objeto.
// Object.entries(): Devuelve una matriz de pares clave/valor de una propiedad enumerable de un objeto.
// Object.freeze(): Congela un objeto: otro código no puede eliminar o cambiar ninguna propiedad.
// Object.fromEntries(): Transforma una lista de pares clave-valor en un objeto.
// Object.getOwnPropertyDescriptor(): Devuelve un descriptor para una propiedad de un objeto.
// Object.getOwnPropertyDescriptors(): Devuelve un objeto conteniendo todas las descripcione de propiedades propias de un objeto.
// Object.getOwnPropertyNames(): Devuelve un array con todas las propiedades (enumerables yno enumerables) encontradas directamente sobre un objeto.
// Object.getOwnPropertySymbols(): Devuelve un array de todas las propiedades de símbolos encontradas directamente en un objeto.
// Object.getPrototypeOf(): Devuelve el prototipo (interno) del objeto especificado.
// Object.is(): Compara si dos valores son iguales.
// Object.isExtensible(): Determina si un objeto es extensible (es decir, si se le pueden añadir nuevas propiedades).
// Object.isFrozen(): Determina si un objeto está congelado.
// Object.isSealed(): Determina si un objeto está sellado.
// Object.keys(): Devuelve un array de las propiedades clave de un objeto.
// Object.preventExtensions(): Evita que se añadan nuevas propiedades a un objeto.
// Object.seal(): Sella un objeto, evitando que se añadan o eliminen propiedades y estableciendo todas las propiedades existentes como no configurables.
// Object.setPrototypeOf(): Establece el prototipo (es decir, la propiedad interna [[Prototype]]) de un objeto.
// Object.values(): Devuelve un array con los valores de las propiedades enumerables de un objeto.