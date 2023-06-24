function euclides(m, n) {
    if (n == 0) {
      return m;
    } else {
      return euclides(n, m % n);
    }
  }

  let m = 20;
  let n = 12;
  let mcd = euclides(m, n);
  console.log(`El máximo común divisor de ${m} y ${n} es ${mcd}`);
  