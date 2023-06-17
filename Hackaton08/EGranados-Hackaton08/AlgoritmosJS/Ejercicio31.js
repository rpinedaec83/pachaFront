let numero;
let sumaPares = 0;
let sumaImpares = 0;

for (let contador = 1; contador <= 10; contador++) {
  numero = parseInt(prompt(`Ingrese el número ${contador}: `));
  if (numero % 2 === 0) {
    sumaPares += numero;
  } else {
    sumaImpares += numero;
  }
}

const mediaPares = sumaPares / 5;
const mediaImpares = sumaImpares / 5;

console.log(`La media de los números pares es: ${mediaPares}`);
console.log(`La media de los números impares es: ${mediaImpares}`);
