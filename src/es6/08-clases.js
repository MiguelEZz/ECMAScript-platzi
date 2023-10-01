//documentacion

//es una mejora sintactica, una mejora para el sintaxis
//para hacer mas amigable el trabajo con herencias
//-basada en prototipos de js
//-no introduce nada nuevo a la herencia, es solo sintaxis


    //PARTES
//declarando
class User {};
//instacia de una clase
//const newUser = new User();



    //CLASES
class user {

    greeting(){
        return "hello";
    }
}

const miko = new user();
console.log(miko.greeting())

//crea una instancia de la clase
//ahora puedo usar sus metodos o inicializar variables








    //CONSTRUCTOR
    class user {
        constructor(){
            console.log("new usser")
        }
        greeting(){
            return "hello";
        }
    }
    
    const mikol = new user();

//el constructor se ejecuta en cuanto se crea la instancia
//sirve para inicializar las variables que le mandemos
//y crear un objeto diferente de acuerdo con el molde








    //THIS


class user {
    constructor(name){
        this.name = name;
    }

    speak(){
        return "helo";
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}


const ana = new user("ana");
console.log(ana.greeting());
 







    //SETTERS & GETTERS

class user{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return "hello";
    };
    greeting(){
        return `${this.speak()} ${this.name}`;
    };

    get uAge(){
        return this.age;
    };

    set uAge(n){
        this.age = n;
    };
}


const bebeton = new user("david", 12);
console.log(bebeton.uAge)
console.log(uAge = 20)


// get: Este método es usado para obtener el valor
//  de una propiedad. Se invoca automáticamente cada 
//  vez que se intenta acceder a la propiedad.

// set: Este método es usado para establecer el 
// valor de una propiedad. Se invoca automáticamente
//  cada vez que se intenta asignar un valor a la
//  propiedad.