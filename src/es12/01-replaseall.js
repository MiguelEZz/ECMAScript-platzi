//REPLASE ALL

//SIRVE PARA REEMPLAZAR ALGUNOS CARACTERES DE UN TEXTO
//POR OTROS:

//string.replace()
// le mandamos dos argumentos (los caracteres que seran 
//reemplazados, con que caracteres los va a reemplazar)

//1. busca si hay aluna coincidencia.
//2. si la hay la reemplaza con el segundo algumento
//   que le hayamos mandado.


const string = "JavaScript es un maravilloso lenguaje de programacion"

const replaceString = string.replace("JavaScript", "Python");

console.log(replaceString)


//.............................................
// Ya existía un método replace() , sin embargo este método 
// únicamente cambiaba la primera coincidencia que encontrara 
// en el string. Dado que daba muchas confusiones, hasta a mi
//  me llego a pasar 🙃, vino al rescate replaceAll()

//.............................................







// Aquí están algunos métodos de la clase String en JavaScript que puedes utilizar en una cadena:

//     concat(str1, str2, ..., strN):
//     Concatena una o más cadenas y devuelve una nueva cadena.

//     indexOf(searchValue[, fromIndex]):
//     Devuelve el índice de la primera aparición de searchValue dentro de la cadena, o -1 si no se encuentra.

//     lastIndexOf(searchValue[, fromIndex]):
//     Devuelve el último índice de la primera aparición de searchValue dentro de la cadena, o -1 si no se encuentra.

//     slice(start[, end]):
//     Extrae una sección de la cadena y devuelve una nueva cadena.

//     substring(start[, end]):
//     Similar a slice, extrae una sección de la cadena y devuelve una nueva cadena.

//     substr(start[, length]):
//     Extrae una cantidad especificada de caracteres a partir de una posición en la cadena y devuelve una nueva cadena.

//     toUpperCase():
//     Convierte la cadena a mayúsculas.

//     toLowerCase():
//     Convierte la cadena a minúsculas.

//     replace(searchValue, replaceValue):
//     Reemplaza las ocurrencias de searchValue con replaceValue.

//     trim():
//     Elimina los espacios en blanco al principio y al final de la cadena.

//     charAt(index):
//     Devuelve el carácter en la posición especificada.

//     split(separator[, limit]):
//     Divide la cadena en un array de subcadenas en función del separador especificado.

//     startsWith(searchString[, position]):
//     Determina si la cadena comienza con la subcadena especificada.

//     endsWith(searchString[, length]):
//     Determina si la cadena termina con la subcadena especificada.

//     includes(searchString[, position]):
//     Determina si la cadena contiene la subcadena especificada.

//     padStart(targetLength[, padString]):
//     Rellena la cadena con un padString al principio hasta alcanzar la longitud deseada.

//     padEnd(targetLength[, padString]):
//     Rellena la cadena con un padString al final hasta alcanzar la longitud deseada.