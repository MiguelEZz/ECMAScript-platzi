// SIRVE PARA CAPTURAR EN GRUPOS VALORES QUE ESTAN DENTRO DE UNA 
// EXPRESION REGULAR

//RECORDAR TOMAR EL CUROS DE EXPRESIONES REGULARES EN PLATZI

const regex = /(\d{4})-(\d{2})-(\d{2})/
//este regex sirve para manejo de fechas 4 caracteres del año
//2 de mes, y 2 de dia.


const matchers = regex.exec("2023-01-02");

console.table(matchers)