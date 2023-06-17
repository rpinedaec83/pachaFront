function calcularFactorial(numero) {
    if (numero === 0) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  
  let n = parseInt(prompt("Ingrese un número"));
  let factorial = calcularFactorial(n);
  console.log(`El factorial de ${n} es: ${factorial}`);
  