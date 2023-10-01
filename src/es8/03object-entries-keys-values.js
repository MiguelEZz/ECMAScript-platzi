//OBJECT-ENTRIES-KEYS-VALUES

const countries = {
    MX:"mexico",
    CO :"colombia", 
    PE:"Peru",
    CL:"chile"
}

console.log(Object.values(countries));
    //Array(4) [ "mexico", "colombia", "Peru", "chile" ]
console.log(Object.keys(countries));
    //Array(4) [ "MX", "CO", "PE", "CL" ]
console.log(Object.entries(countries))
    //[ 
    // [ "MX", "mexico" ],
    // [ "CO", "colombia" ],
    // [ "CL", "chile" ],
    //];



//Esto es importante conocerlo
//sobre todo la sintaxis y las palabras clave

//values
    //devuelve un array con los values

//keys
    //devuelve un array con las keys
    
//entries
    //devuelve una matriz, array de arrays
    //que contienen los pares key-value

// Object.metodo(objeto);
