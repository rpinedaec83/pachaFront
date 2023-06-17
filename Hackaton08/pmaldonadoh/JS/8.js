let nota1 = prompt("Ingresa la primera nota: ");
let nota2 = prompt("Ingresa la segunda nota: ");
let nota3 = prompt("Ingresa la tercera nota: ");
let promedio = (nota1 + nota2 + nota3)/3;

if (promedio > 10) {
    console.log("El alumno esta aprobado");
} else {
    console.log("El alumno esta desaprobado");
}