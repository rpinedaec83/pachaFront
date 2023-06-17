let dividendo = parseInt(prompt("Ingrese el dividendo"));
let divisor = parseInt(prompt("Ingrese el divisor"));
let cociente = 0;
while (dividendo >= divisor) {
  dividendo = dividendo - divisor;
  cociente++;
}
let resto = dividendo;
console.log(`El cociente es: ${cociente}`);
console.log(`El resto es: ${resto}`);
