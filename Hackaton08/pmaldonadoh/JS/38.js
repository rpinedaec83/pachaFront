function NumeroPerfecto(numero) {
    let suma = 0;
    for (let i = 1; i <= numero / 2; i++) {
      if (numero % i === 0) {
        suma += i;
      }
    }
    if (numero === suma) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(NumeroPerfecto(28));
  console.log(NumeroPerfecto(12));
  