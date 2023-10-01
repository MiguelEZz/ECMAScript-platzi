// GlobalThis

//Viene a solucionar el problema de que el navegador, node o webworker
//tienen un nombre distinto para acceder al objeto global
//y con globalThis podras acceder al objeto global
//desde cualquier editor. navegador, node o webworker







//en el navegador accederemos al objeto global con:
console.log(window);


//en node accedemos al objeto global con:
console.log(global);


//en un webworker accedemos al objeto global con:    
console.log(self)

//y se accede de diferete manera al objeto global dependiendo 
//donde se este ejecutando
//y esto trae problemas ya que:
//ejm: window no se puede abrir con node
// y viceversa




//Y ESTE CONCEPTO DEL GLOBALTHIS VIENE A SOLUCIONAR 
//ESTE PROBLEMA


console.log(globalThis)   

//este será el objeto global que podrá ser accedido
//tanto desde el navegador, node o webworker. 

//solucionaremos bastantes problemas de compatibilidad

//ya que globalThis  === window,global, self.