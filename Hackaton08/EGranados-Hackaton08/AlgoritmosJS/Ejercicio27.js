let numero = 0;
let suma = 0;
let contador = 0;
while (numero >= 0) {
  numero = parseInt(prompt("Ingrese un número positivo (o un número negativo para terminar)"));
  if (numero >= 0) {
    suma += numero;
    contador++;
  }
}
if (contador > 0) {
  let media = suma / contador;
  console.log(`La media de los números ingresados es: ${media}`);
} else {
  console.log("No se ha ingresado ningún número positivo.");
}
