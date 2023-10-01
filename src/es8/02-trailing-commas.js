const array = [23,23,24, , , , 34];

console.log(array);
console.log(array.length); 
console.log(array[4])

//output: 
//Array(7) [ 23, 23, 24, <3 empty slots>, 34 ]
//7

//estos espacios se les conoce somo trailling-commas
//estos espacios se quedan en la posicion asignada.(su [i] no cambia)
//luego podemos darles un valor.
//y estos espacios cuentan en el largo del array

//estos espacios se guardan como "undefined"
//y luego podemos acceder a su posicion y cambiarles el valor
//array[5] = 25  ejm.




//tambien podemos colocarlas al final
const myArray = [1, 2, 3,];  // Coma al final

// Reducción de cambios en diffs de control de versiones: 
// Al agregar un elemento al final, solo es necesario agregar
//  una línea sin tener que modificar la línea anterior para 
//  agregar la coma, reduciendo así los cambios en diffs de 
//  control de versiones.