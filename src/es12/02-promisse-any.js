// PROMISSE.ANY

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve2"));



Promise.any([promise1,promise2,promise3])
    then(response => console.log(response));


// ES PARECIDO AL PROMISE.ALLSETTLED
    //que se ejecutaba si todas sus promesas se teminaban de resolver
    //y mostraba el resultado de todas

    
// PROMISE.ANY 
    //se ejecuta cuando la primera de sus promesas haya terminado
    //de resolverse
    //y muestra su resultado con el "then".

    //SOLO VA A EJECUTARSE CUANDO LA PRIMERA DE 
    //SUS PROMESAS SE HAYA "RESUELTO"
    //NO VA A CONSIDERAR SI RESULTA "REJECT"



//ESTAS PROMESAS LAS PODEMOS USAR PARA HACER CONSULTAS API
//ESTAS NO VAN A RESPONDER DE INMEDIATO
//PERO CON LAS PROMESAS LAS ESPERAREMOS SIN DETENER EL CODIGO.