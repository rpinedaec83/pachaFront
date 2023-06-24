let numero = parseInt(prompt("Ingrese un número entre 1 y 10, excepto el 1:"));
let esPrimo = true;

if (numero <= 1 || numero == 9) {
  esPrimo = false;
} else {
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      esPrimo = false;
      break;
    }
  }
}

if (esPrimo) {
  console.log("El número ingresado es primo.");
} else {
  console.log("El número ingresado no es primo.");
}
