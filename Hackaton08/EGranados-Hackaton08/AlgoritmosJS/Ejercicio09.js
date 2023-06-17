let salario = parseInt(prompt("Ingrese el salario actual:"));
let aumento, nuevo_salario;

if (salario > 2000) {
  aumento = salario * 0.05;
} else {
  aumento = salario * 0.1;
}

nuevo_salario = salario + aumento;
console.log(`El nuevo salario es: ${nuevo_salario}`);
