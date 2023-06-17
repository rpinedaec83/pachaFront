let horas = parseInt(prompt("Ingrese la cantidad de horas trabajadas en la semana:"));
let sueldo;
if (horas <= 40) {
  sueldo = horas * 20;
} else {
  sueldo = 40 * 20 + (horas - 40) * 25;
}
console.log(`El sueldo semanal es: ${sueldo}`);
