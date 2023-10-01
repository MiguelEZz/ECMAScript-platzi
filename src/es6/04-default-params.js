//parametros por defecto

//se trata de no mandar parametros
//a una funcion pero que este tome otros valores
//por defecto que tu le diste antes

function newUser(name = "no definiro",age="abuelo",country="basura MX"){
    console.log(name,age,country)
}

newUser();