//METODOS PRIVADOS

class user{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak(){
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
console.log(bebeton.uAge);
console.log(uAge = 20);


//UN METODO PRIVADO SIGNIFICA QUE
//