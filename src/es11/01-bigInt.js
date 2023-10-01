// Límites numéricos en JavaScript

// 📏 JavaScript tiene límites numéricos, un máximo 
// Number.MAX_SAFE_INTEGER y un mínimo Number.MIN_SAFE_INTEGER.
// Fuera de estos límites, los cálculos matemáticos pueden
// fallar y mostrar resultados erróneos. Con BigInt esto
// se resuelve.



const abigNumber = 443454288489848493n;
const anotherNUmber = BigInt(443454288489848493)

console.log(abigNumber);
console.log(anotherNUmber);

// output:
// 443454288489848493n
// 443454288489848493n

//ESTO SIRVE PARA EL MANEJO DE NUMEROS GRANDES.
//NO ES MUY USADO PERO SIRVE PARA QUE LAS OPERACIONES MATEMATICAS
//CON NUMEROS ENORMES RESULTEN  CORRECTAMENTE

//PARA EVITAR QUE SE CONFUNDAN CON OTRO TIPO DE DATOS

//TAMBIEN CONVIERTE LOS STRINGS DE NUMEROS GRANDES A 
//NUMBER

// La necesidad de BigInt() surge cuando los números que
// se deben manipular son demasiado grandes para ser 
// representados con el tipo de datos de número entero
// estándar en el lenguaje, como int o long. Por ejemplo,
// si necesitas realizar cálculos con números enteros 
// extremadamente grandes (por encima del límite que puede
// representar un número entero estándar), puedes usar 
// BigInt para evitar errores de desbordamiento y
// asegurar la precisión.

// const numeroMuyGrande = BigInt("1234567890123456789012345678901234567890");
// const otroNumeroMuyGrande = BigInt(98765432101234567890);
// const suma = numeroMuyGrande + otroNumeroMuyGrande;

// console.log(suma);