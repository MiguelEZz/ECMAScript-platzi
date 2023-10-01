// documentacion

//generator es un tipo de iterador
//personalizado, no requiere una programacion tam
//robusta o meticulosa
//permiten definir un algoritmo interactivo al escribir
//una sola funcion que puede mantener su propio estado.

//....................chatoGPT...........................
// En el contexto de JavaScript (JS), un "generator" es
// una función especial que permite pausar y reanudar
// su ejecución en diferentes puntos, lo que facilita
// la escritura de código asíncrono y la iteración de
// grandes conjuntos de datos de manera eficiente.

// Los generadores se definen utilizando la palabra clave
// function* en lugar de simplemente function. Dentro de
// un generador, puedes usar la palabra clave yield
// para pausar la ejecución y devolver un valor. 
// Posteriormente, puedes reanudar la ejecución del 
// generador y pasar datos nuevamente utilizando el 
// método next().


function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(["oscarin", "deivi", "elepepe"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);




// PODEMO USAR MAS DE UN YIELD 
// usa cada uno segun las veces que le demos next

function* miGenerador() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const gen = miGenerador();
  
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }
  console.log(gen.next()); // { value: 3, done: false }
  console.log(gen.next()); // { value: undefined, done: true }
  

//devuelve el primer yield, con el primer next
//devuelve el segundo yeild, con el segundo next ...

//de hecho en el for de arriba tambien son diferentes yield
//que se repiten en bucle

4











//PLAYGROUND CON GENERATORS



//MI SOLUCION

//export function* getId() {
    // for (let i = 1; i > 0; i++) {
    //     yield i
        
    //   }
      
    // }


    //funcionamiento

// la funcion es ejecutada por primera vez:
// i = 1, retorna "yield" i.   y se detiene la ejecucion
// allí

// si volvemos a ejecutar la funcion:
// for hace denuevo el cliclo y ahora  i = 2, 'cause i++
// y devuelve "yield"  i.ahora

// y asi para las proximas