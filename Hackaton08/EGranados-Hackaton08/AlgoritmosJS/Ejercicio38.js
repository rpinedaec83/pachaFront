function esNumeroPerfecto(num) {
    let suma = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        suma += i;
      }
    }
    return suma === num;
  }
  
  // Ejemplo de uso
  console.log(esNumeroPerfecto(6)); // true
  console.log(esNumeroPerfecto(28)); // true
  console.log(esNumeroPerfecto(12)); // false
  