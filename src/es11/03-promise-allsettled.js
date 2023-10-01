//SIRVE PARA EJECUTAR ALGO
//SI TODAS LAS PROMESAS FUERON RESUELTAS
//independientemente si fue resolve o reject

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve2"));

//si queremos saber si todas la primesas han resuelto

Promise.allSettled([promise1, promise2 , promise3])
    .then(response => console.log(response))

// a allSettled le pasamos como argumentos las promesas que vamos
// a verificar que todas han respondido.

// si todas han respondido, ejecuta en .then
//el cual tiene "response"

//"response", 
// que tiene la informacion de que paso con cada PerformanceMeasure

// status: "rejected" o "fulfilled"
// reason: "si es rejected" mostrara lo que le pusimos al reject
// value: "si es resolve" mostrara lo que le pusimos al resolve