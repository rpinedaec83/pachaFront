let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let mayor;

if (num1 > num2) {
  mayor = num1;
} else {
  mayor = num2;
}

console.log("El número mayor es:", mayor);
