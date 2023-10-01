const user = {
    username : "miko",
    age: 74,
    country: "llama"
}

const {username, ...values } = user;
console.log(username)
console.log(values)




// al igual que como es el caso de los parametros con spread
//los datos se separan


//usarname: al ser el primer valor se crea solo como una variable

//values: al usar spread ahora se crea un objeto, que va a contener
//los elementos restantes del objeto user




//--------------es parecido a este concepto de spread para
                //parametros ------------------------------

//REST

function sum(num, ...values){
    console.log(values, num + values[0]);
    return num + values[0];
};

sum(1,1,2,3)

            //console : [1,2,3] -  2


//es util cuando no conocemos la cantidad exacta de
//parametros que tendra una funcion.

//entonces estamos asignando el primer parametro
//en "num", y el resto dentro de values, 
//values se va a guardar en forma de array
