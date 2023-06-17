var numero = 0;

numero = prompt("ingrese un numero");
console.log(numero);
var sitresdigitos = false;

var textodelnumero = numero.toString();
var cantidaddedigitos = textodelnumero.length;

if (cantidaddedigitos == 3) {
    alert(`el numero ${numero} si tiene 3 digitos`)
} else {
    alert(`el numero ${numero} no tiene 3 digitos`)
}



