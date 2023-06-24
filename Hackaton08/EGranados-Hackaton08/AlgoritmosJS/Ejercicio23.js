let n = parseInt(prompt("Ingrese un número"));
let suma = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    suma += i;
  }
}
console.log(`La suma de los números impares menores o iguales a ${n} es: ${suma}`);
