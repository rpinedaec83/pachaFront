let dividendo = prompt("Ingrese el dividendo: ");
let divisor = prompt("Ingrese el divisor: ");
let cociente = 0;
let resto = 0;

while (dividendo >= divisor) {
    dividendo = dividendo - divisor;
    cociente = cociente + 1;
}

resto = dividendo;

console.log("El cociente es: " + cociente);
console.log("El resto es: " + resto);