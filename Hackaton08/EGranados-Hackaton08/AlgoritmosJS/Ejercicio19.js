let identificador_empleado = parseInt(prompt("Ingrese el número identificador del empleado:"));
let dias_trabajados = parseInt(prompt("Ingrese la cantidad de días trabajados:"));
let salario_diario = 0;
let pago_semanal = 0;

switch(identificador_empleado) {
  case 1:
    salario_diario = 56;
    break;
  case 2:
    salario_diario = 64;
    break;
  case 3:
    salario_diario = 80;
    break;
  case 4:
    salario_diario = 48;
    break;
}

pago_semanal = salario_diario * dias_trabajados;
console.log("El pago semanal del empleado con identificador " + identificador_empleado + " es de: $" + pago_semanal);
