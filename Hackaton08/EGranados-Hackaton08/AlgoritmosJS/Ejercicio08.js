let nota1 = parseInt(prompt("Ingrese la nota 1:"));
let nota2 = parseInt(prompt("Ingrese la nota 2:"));
let nota3 = parseInt(prompt("Ingrese la nota 3:"));
let promedio = (nota1 + nota2 + nota3) / 3;

console.log(`El promedio es: ${promedio}`);

if (promedio >= 60) {
  console.log("El estudiante aprobó.");
} else {
  console.log("El estudiante no aprobó.");
}
