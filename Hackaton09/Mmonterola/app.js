var fs = require("fs");
// llamamos a la librería http
var http = require("http");
var url = require('url');


var titulo = "Hackaton 09";
var parrafo = "Respuestas de la hackaton 09";
let answ = "";
var miServidor = http.createServer((peticion, respuesta) => {
    respuesta.writeHead(200, { "Content-Type": "text/html" });
    switch (peticion.url) {
        case "/":
            var html = fs
                .readFileSync(__dirname + "/templates/inicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo);
            respuesta.end(html);
            break;
        case "/ejercicio/1":
            titulo = "Ejercicio 01"
            parrafo = "1.	Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla"
            answ = ejercicio01(10,16)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/2":
            titulo = "Ejercicio 02"
            parrafo = "Un estudiante realiza 4 exámenes, calcular el promedio de estos"
            answ = ejercicio02(20,14,12,15)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/3":
            titulo = "Ejercicio 04"
            parrafo = "Calcular el área de un rectángulo"
            answ = ejercicio03(16,14)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/4":
            titulo = "Ejercicio 04"
            parrafo = "Calcular el área de un triangulo"
            answ = ejercicio04(20,14,12)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/5":
            titulo = "Ejercicio 05"
            parrafo = "Calcular el área de una circunferencia"
            answ = ejercicio05(5)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/6":
            titulo = "Ejercicio 06"
            parrafo = "Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre"
            answ = ejercicio06(40,25)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
            break;
        case "/ejercicio/7":
            titulo = "Ejercicio 07"
            parrafo = "Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m)."
            answ = ejercicio07(26)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/8":
            titulo = "Ejercicio 08"
            parrafo = "Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano."
            answ = ejercicio08(642)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/9":
            titulo = "Ejercicio 09"
            parrafo = "Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron"
            answ = ejercicio09(1995)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/10":
            titulo = "Ejercicio 10"
            parrafo = "Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad"
            answ = ejercicio10(20,14,12)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/11":
            titulo = "Ejercicio 11"
            parrafo = "Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador"
            answ = ejercicio11(4)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/12":
            titulo = "Ejercicio 12"
            parrafo = "Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado"
            answ = ejercicio12(1500)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/13":
            titulo = "Ejercicio 13"
            parrafo = "Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados"
            answ = ejercicio13(6)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/14":
            titulo = "Ejercicio 14"
            parrafo = "Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos, el número de focos de cada color que hay en existencia"
            answ = ejercicio14(4)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/15":
            titulo = "Ejercicio 15"
            parrafo = "Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones"
            answ = ejercicio15(15)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        default:
            respuesta.writeHead(404, { "Content-Type": "text/html" });
            respuesta.end("404 not found")
            break;
    }
});

// inicializar el servidor
miServidor.listen(1111, "127.0.0.1");

function ejercicio01(numero1, numero2){
    let respuesta = numero1 + numero2
    return respuesta;
}

function ejercicio02(examen1,examen2, examen3,examen4){
    let respuesta = (examen1+examen2+examen3+examen4)/4
    return respuesta;
}

function ejercicio03(base,altura){
    
   let respuesta = (base*altura)
   return respuesta;
}

function ejercicio04(lado1,lado2, lado3){
    s = (lado1+lado2+lado3)/2
   let respuesta = Math.sqrt(s*(s-lado1)*(s-lado2)*(s-lado3))
   return respuesta;
}

function ejercicio05(radio){
   let respuesta = (3.14*Math.pow(radio,2))
   return respuesta;
}

function ejercicio06(hora,salariosxhora){
    let respuesta = (hora*salariosxhora)
    return respuesta;
 }

 function ejercicio07(metros){
    metrosxpulgadas = 0.0254
    let respuesta = (metros/metrosxpulgadas)
    return respuesta;
 }

 function ejercicio08(soles){
    tipodecambio = 3.71
    let respuesta = (soles*tipodecambio)
    return respuesta;
 }

 function ejercicio09(añonacimiento){
    añoactual = 2023
    let respuesta = (añoactual-añonacimiento)
    return respuesta;
 }

 function ejercicio10(edad1,edad2,edad3){
    nombre1 = "juan";
    nombre2 = "pedro";
    nombre3 = "luis";
    menorEdad = edad1;
    nombreMenorEdad = nombre1;
    if (edad2 < menorEdad) {
        menorEdad = edad2;
        nombreMenorEdad = nombre2;
    }

    if (edad3 < menorEdad) {
        menorEdad = edad3;
        nombreMenorEdad = nombre3;
    } 
    let respuesta = "La persona de menor edad es " + nombreMenorEdad + " con " + menorEdad + " años."
    return respuesta;
 }

 function ejercicio11(añostrabajados){

    if (añostrabajados <= 0) {
        res = "La antigüedad ingresada es inválida."
    } else if (añostrabajados <= 1) {
        bono = 100;
        res = "El bono correspondiente es de $" + bono
    } else if (añostrabajados <= 2) {
        bono = 200;
        res = "El bono correspondiente es de $" + bono
    } else if (añostrabajados <= 3) {
        bono = 300;
        res = "El bono correspondiente es de $" + bono
    } else if (añostrabajados <= 4) {
        bono = 400;
        res = "El bono correspondiente es de $" + bono
    } else if (aañostrabajados <= 5) {
        bono = 500;
        res = "El bono correspondiente es de $" + bono
    } else {
        bono = 1000;
        res = "El bono correspondiente es de $" + bono
    }

    let respuesta = res
    return respuesta;
 }

 function ejercicio12(salarioInicial){
    incrementoAnual = 0.1;
    salarioActual = salarioInicial;
    for (i = 1; i <= 6; i++) {
        incremento = salarioActual * incrementoAnual;
        salarioActual += incremento;
        res = "Salario en el año " + i + " : $" + salarioActual
    }
    let respuesta = res
    return respuesta;
 }

 function ejercicio13(numerodealumnos){
    const readline = require('readline-sync');
    aprobados = 0;
    reprobados = 0;

    for (let i = 1; i <= numerodealumnos; i++) {
        const calificacion = readline.questionFloat(`Ingrese la calificación del alumno ${i}: `);
      
        if (calificacion >= 6) {
          aprobados++;
        } else {
          reprobados++;
        }
      }

    let respuesta = `Número de aprobados: ${aprobados}` + `Número de reprobados: ${reprobados}`
    return respuesta;
 }

 function ejercicio14(n){
    const readline = require('readline-sync');
    let verdes = 0;
    let blancos = 0;
    let rojos = 0;
  
    for (let i = 1; i <= n; i++) {
      const color = readline.question(`Ingrese el color del foco ${i}: `);
      
      switch (color.toLowerCase()) {
        case "verde":
          verdes++;
          break;
        case "blanco":
          blancos++;
          break;
        case "rojo":
          rojos++;
          break;
        default:
          console.log(`El color "${color}" no es válido.`);
      }
    }
    let respuesta = `Número de focos verdes: ${verdes} ` + ` Número de focos blancos: ${blancos} ` + `Número de focos rojos: ${rojos}`
    return respuesta;
 }

 function ejercicio14(n){
    const readline = require('readline-sync');
    let verdes = 0;
    let blancos = 0;
    let rojos = 0;
  
    for (let i = 1; i <= n; i++) {
      const color = readline.question(`Ingrese el color del foco ${i}: `);
      
      switch (color.toLowerCase()) {
        case "verde":
          verdes++;
          break;
        case "blanco":
          blancos++;
          break;
        case "rojo":
          rojos++;
          break;
        default:
          console.log(`El color "${color}" no es válido.`);
      }
    }
    let respuesta = `Número de focos verdes: ${verdes} ` + ` Número de focos blancos: ${blancos} ` + `Número de focos rojos: ${rojos}`
    return respuesta;
 }

 function ejercicio15(edad){
    if (edad >= 18) {
        res = "La persona puede votar";
      } else {
        res = "La persona no puede votar";
      }
    
    let respuesta = res
    return respuesta;
 }



