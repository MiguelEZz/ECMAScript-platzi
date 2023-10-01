const string = "hello";

console.log(string.padStart(7, "hi"));
console.log(string.padEnd(11,"elpepe"));

//-------------------------------------------------------
//EL METODO padStart()
//recive dos argumentos, 1. cantidad de caracteres
//que tendrá el string que devolverá
//2. con que caracteres rellenará los espacios
//sobrantes del string a que le estemos aplicando este metodo

//"hello" tiene 5 caracteres   (cuenta desde 1)
//al aplicarle este metodo a "hello":
//string.padStart(7, "hi")
//va a devolver un string de 7 caracteres
//"hello" solo tiene 5, y esos 2 caracteres sobrantes
//los rellena con el otro parametro "hi"

//output: "hihello"   en esos 2 caracteres sobrantes
//quepa exactamente "hi"






//-------------------------------------------------------
//EL ETODO padEnd()
//hace lo mismo que el anterior pero este rellena
//los espacion en el final


//output: helloelpepe

//ahora el string tiene 11 caracteres
//"hello" solo tenia 5, y los 6 caracteres faltantes
//los completa con "elpepe"