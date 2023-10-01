//OPTIONAL CHAINING

const users = {
    gnx : {
        country : "viru"
    },
    ana : {
        country : "llama"
    }
};

console.log(users.gnx.country)
console.log(users.gnx?.country)

//ES UNA HERRAMEINTA PARA CONTROLAR ERRORES

//YA QUE SI LLAMAMOS A UNA LLAVE DE UN OBJETO QUE ON EXISTE
//NOS DEVOLVERÀ UN ERROR Y EL PROGRAMA SE DETENDRÁ

//PERO CON ESTE OPCTIONAL CHAINING 
//antes preguntamos si se excuentra esa clave dentro del objeto
//si no se encuentra, manda UNDEFINED y ese valor
//si es mas manejable que un error.


//EN OTRAS SITUACIONES NECESITAREMOS EL ERROR PARA PODER DEBUGGEAR
//ASI QUE TENEMOS QUE PENSAR BIEN CUANDO USARLO




//PERO HAY QUE SABER EN QUE SITUACIONES LO USAMOS
//ya que algunas veces podria interferir en el debugging

//No abuses del encadenamiento opcional

// 🔗 El encadenamiento opcional se debe utilizar únicamente 
// cuando probablemente un valor no exista.
// .
// Por ejemplo, en un objeto usuario que siempre existe, pero
//  la propiedad redes es opcional, entonces se debería escribir
//   usuario.redes?.facebook y no usuario?.redes?.facebook.
// .
// Si abusas del encadenamiento opcional y existe un error en 
// un objeto, el programa podría “ocultarlo” por un undefined, 
// provocando que el debugging sea más complicado.