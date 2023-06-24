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
            answ = ejercicio01(20,144)
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
            titulo = "Ejercicio 03"
            parrafo = "Calcular el área de un rectángulo"
            answ = ejercicio03(10,3)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/4":
            titulo = "Ejercicio 04"
            parrafo = "Calcular el área de un triángulo"
            answ = ejercicio04(27,36)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/5":
            titulo = "Ejercicio 05"
            parrafo = "Calcular el área de un circulo"
            answ = ejercicio05(8)
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
            answ = ejercicio06(8,15)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/7":
            titulo = "Ejercicio 07"
            parrafo = "Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m)."
            answ = ejercicio07(2540)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/8":
            titulo = "Ejercicio 08"
            parrafo = "Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano"
            answ = ejercicio08(370)
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
            answ = ejercicio09(1951)
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
            answ = ejercicio10()
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
            answ = ejercicio11(7)
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
            answ = ejercicio12()
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
            answ = ejercicio13()
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
            answ = ejercicio14()
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
            answ = ejercicio15(16)
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
console.log("Servidor iniciado correctamente");

function ejercicio01(numero1, numero2){
    let respuesta = numero1 + numero2
    return respuesta;
}

function ejercicio02(examen1,examen2, examen3,examen4,){
    let respuesta = (examen1+examen2+examen3+examen4)/4
    return respuesta;
}

function ejercicio03(base,altura){
    let respuesta = (base*altura)
    return respuesta;
}

function ejercicio04(base,altura){
    let respuesta = (base*altura)/2
    return respuesta;
}

function ejercicio05(radio){
    let operacion = (Math.PI*radio)
    let respuesta = Math.pow(operacion,2)
    return respuesta; 
}

function ejercicio06(horas,salario){
    const diasTrabajo = 5;
    let respuesta = horas * salario * diasTrabajo;
    return respuesta
}

function ejercicio07(metros){
    const pulgadas = 0.0254
    let respuesta = metros/pulgadas
    return respuesta 
}

function ejercicio08(soles){
    const dolar = 3.7
    let respuesta = soles/dolar
    return respuesta
}

function ejercicio09(anio){
    const fechaActual = new Date();
    const year = parseInt(fechaActual.getFullYear());
    let respuesta = year - anio
    return respuesta
}

function ejercicio10(){
    const persona1 = {
        nombre: "Juan",
        edad: 25
    };
    const persona2 = {
        nombre: "María",
        edad: 30
    };
    
    const persona3 = {
        nombre: "Pedro",
        edad: 20
    };
    
    let personaMasJoven = persona1;
    
    if (persona2.edad < personaMasJoven.edad) {
        personaMasJoven = persona2;
    }

    if (persona3.edad < personaMasJoven.edad) {
        personaMasJoven = persona3;
    }
    
    let respuesta = personaMasJoven.nombre
    return respuesta
}

function ejercicio11(anio){
    let respuesta
    switch(anio){
        case 1:
            respuesta = 100;
            break;
        case 2:
            respuesta = 200;
            break;
        case 3:
            respuesta = 300;
            break;
        case 4:
            respuesta = 400;
            break;
        case 5:
            respuesta = 500;
            break;
        default:
            respuesta = 1000;    
    }
    return respuesta
}

function ejercicio12(){
    const salarioInicial = 1500;
    const incrementoAnual = 0.1;
    let salarioActual = salarioInicial;
    let salarioTotal = salarioInicial;
    let mensaje = ''
    for (let i = 1; i <= 6; i++) {
        salarioActual += salarioActual * incrementoAnual;
        salarioTotal += salarioActual;
        mensaje += "\nEl salario del año "+ i + " es de "+ salarioActual.toFixed(2) + " dólares."
    }
    mensaje += "\nEl salario total del profesor después de 6 años es de " + salarioTotal.toFixed(2)
    return mensaje
}

function ejercicio13(){
    

    let numAlumnos;
    let calificaciones = [];
    let aprobados = 0;
    let reprobados = 0;
    
    process.stdout.write('Ingrese el número de alumnos: ');
    process.stdin.on('data', (data) => {
      if (!numAlumnos) {
        numAlumnos = parseInt(data.toString().trim());
        process.stdout.write(`Ingrese las calificaciones de los ${numAlumnos} alumnos:\n`);
      } else {
        calificaciones.push(parseInt(data.toString().trim()));
    
        if (calificaciones.length === numAlumnos) {
        for (let i = 0; i < calificaciones.length; i++) {
            if (calificaciones[i] >= 70) {
            aprobados++;
            } else {
            reprobados++;
            }
        }
    
        console.log(`Número de aprobados: ${aprobados}`);
        console.log(`Número de reprobados: ${reprobados}`);
        process.exit();
        }
      }
    });
    

}

function ejercicio14(){
    let numFocos;
let contVerdes = 0;
let contRojos = 0;
let contBlancos = 0;
let focoActual = 1;

process.stdout.write('Ingrese el número de focos: ');
process.stdin.on('data', (data) => {
  if (!numFocos) {
    numFocos = parseInt(data.toString().trim());
    process.stdout.write(`Ingrese el color del foco ${focoActual} (V para verde, R para rojo, B para blanco): `);
  } else {
    const color = data.toString().trim().toUpperCase();

    if (color === 'V') {
      contVerdes++;
    } else if (color === 'R') {
      contRojos++;
    } else if (color === 'B') {
      contBlancos++;
    } else {
      console.log(`El color ingresado para el foco ${focoActual} no es válido`);
    }

    focoActual++;

    if (focoActual <= numFocos) {
      process.stdout.write(`Ingrese el color del foco ${focoActual} (V para verde, R para rojo, B para blanco): `);
    } else {
      console.log(`Número de focos verdes: ${contVerdes}`);
      console.log(`Número de focos rojos: ${contRojos}`);
      console.log(`Número de focos blancos: ${contBlancos}`);
      process.exit();
    }
  }
});

}

function ejercicio15(edad){

    let edadVotacion = edad + 1;
    let mensaje = '';
    if(edadVotacion >=18 ){
        mensaje = "Puede votar"
    } else {
        mensaje = "No puede votar"
    }
    return mensaje;

}