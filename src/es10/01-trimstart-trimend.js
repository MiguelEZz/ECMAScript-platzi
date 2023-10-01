//TRIM es un metodo usado para quitar espacios al principio
//y al final de un array.
    

//con TRIMSTART solo quitas los espacios al inicio del array
//con TRIMEND solo quitas los espacios al final del array


const hello = "       Hello World!   ";
console.log(hello.trimStart());
    //output: "Hello World!       "
console.log(hello.trimEnd());
    //output: "       Hello World!"