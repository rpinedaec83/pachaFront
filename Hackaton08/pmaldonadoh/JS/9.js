let salario = prompt("¿Cuál es actualmente tu ingreso mensual? ");
let aumento = 0;
let nuevoSalario = 0;

if (salario < 2000) {
    aumento = salario * 0.10;
} else {
    aumento = salario * 0.05;
}

nuevoSalario = (salario + aumento);
console.log ("Tu aumento es de $ " + aumento + " y tu nuevo salario es de $ " + nuevoSalario);