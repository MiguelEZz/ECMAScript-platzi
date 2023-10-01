
//FLAT

const array = [1,1,2,3,4,[1,3,2,4,[1,2,3]]]
console.log(array.flat(2))

//flat sirve para aplanar una matriz, y convertirla en un
//unico array.

// output:
// Array(12) [ 1, 1, 2, 3, 4, 1, 3, 2, 4, 1, … ]


// PERO esto depende de cuantos niveles de arrays quieres
// aplanar:
//const array = [1,1,2,3,4,[1,3,2,4,[1,2,3]]]
// console.log(array.flat(1))
// Array(10) [ 1, 1, 2, 3, 4, 1, 3, 2, 4, (3) […] ]

//flat(1), solo va a aplanar el primer array
//flar(2), aplana los dos primeros arrays
//....


//CHATO GPT
// flat (aplanamiento o aplanar):

//     flat se refiere a la operación de "aplanar"
//      una estructura de datos que contiene elementos
//      anidados. Por ejemplo, si tienes una lista de listas,
//       aplanarla significa combinar todas las sublistas en una
//       sola lista.
//     Ejemplo: Si tienes [[1, 2], [3, 4, 5], [6]], al aplicar
//     flat obtendrías [1, 2, 3, 4, 5, 6].


// ...............................................




//FLATMAP
const array2 = [1,2,3,4]
console.log(array2.flatMap(v=>[v,v*2]))


//CHATO GPT
// flatMap (aplanamiento y mapeo):

//     flatMap es una operación que combina map (mapeo) y 
//     flat (aplanamiento).Primero aplana la matriz
//      despues aplica una función (mapeo)
//      a cada elemento de una estructura de datos y luego
//       aplanará el resultado en una sola estructura.
//     Ejemplo: Si tienes una lista de listas y quieres duplicar 
//     cada elemento y aplanarla, al aplicar flatMap, obtendrías 
//     [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6].

//despues lo aplana tambien ya que el map, está devolviendo
//arrays, dentro del array.
//pero el flat. lo convierte en un solo array

//tambien se le pude aplicar flatMap a 
//[[1, 2], [3, 4, 5], [6]], ya que:

//primero aplana
//aplica  map
//vuelve a aplanar