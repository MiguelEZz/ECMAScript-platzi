// NULLISH

// Diferencia entre el operador OR y el Nullish coalescing

// 🔨 El operador OR (||) evalúa un valor falsey. Un valor
//  falsy es aquel que es falso en un contexto booleano, estos
//  son: 0, "" (string vacío), false, NaN, undefined o null.
// .
// Puede que recibas una variable con un valor falsy que 
// necesites asignarle a otra variable, que no sea null o 
// undefined. Si evalúas con el operador OR, este lo cambiará,
// provocando un resultado erróneo.


// OR (||) evalua valores falsy
// NULLISH (??) evalua valores null




const anotherNumber = null;

const validate = anotherNumber ?? 5;

console.log(validate)

//el operador nullish ?? es un operador de fusión nula que
// proporciona una forma concisa de evaluar y seleccionar un 
// valor predeterminado cuando un valor es null o undefined.
// Este operador se introdujo en ECMAScript 2020 para abordar
// la distinción entre valores "nullish" (null o undefined)
// y valores falsy.

//los valores falsy como 0, false, "", NaN.
//no seran tratados como null

//..................................

//BASICAMENTE

//SI EL VALOR DE LA IZQUIERDA ES NULL O UNDEFINED
//MUESTRO EL VALOR DE LA DERECHA


//SI ES VALOR DE LA IZQUIERDA NO ES NULL O UNDEFINED
//MUESTRO EL VALOR DE LA IZQUIERDA

//..................................

//PUEDE SER USADO EN:

// 1.Asignación de Variables:
// const resultado = variable1 ?? valorPredeterminado;

// 2.Retorno de Funciones:
// function obtenerResultado(valor) {
//   return valor ?? 'Valor predeterminado';
// }

// 3.Expresiones en Condicionales:
// const valorApropiado = otroValor ?? obtenerValorPorDefecto();

// 4.Acceso a Propiedades de Objetos:
// const resultado = objeto.propiedad ?? 'Valor por defecto';