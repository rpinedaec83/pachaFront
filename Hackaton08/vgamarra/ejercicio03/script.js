var numero = 0;
numero = prompt( "por favor ingrese el numero");
var ultimodigito = numero %10 ;
console.log(ultimodigito) 
if (ultimodigito == 4) {
  alert( `el numero ${numero} si termina en 4`)  
} else {
    alert( `el numero ${numero} no termina en 4`)    
}