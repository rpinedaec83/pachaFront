var fs = require("fs");
// llamamos a la librería http
var http = require("http");
var url = require('url');


var titulo = "Hackaton 09";
var parrafo = "Respuestas de la hackaton 09";
let answ = "";
var miServidor = http.createServer((peticion, respuesta) => {
    respuesta.writeHead(200, { "Content-Type": "text/html" });

    const url = new URL(peticion.url, `http://${peticion.client.localAddress}:${peticion.client.localPort}`);
    switch (url.pathname) {
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
            answ = ejercicio01(+url.searchParams.get('param1'), +url.searchParams.get('param2'))
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;

        case "/ejercicio/2":
            titulo_inner = "Ejercicio 02"
            parrafo_inner = "2.	Un estudiante realiza 4 exámenes, calcular el promedio de estos"
            answ = ejercicio02(+url.searchParams.get('param1'), +url.searchParams.get('param2'), +url.searchParams.get('param3'), +url.searchParams.get('param4'))
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo_inner)
                .replace("%parrafo%", parrafo_inner)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;

        case "/ejercicio/3":
            titulo_inner = "Ejercicio 03"
            parrafo_inner = "3.Calcular el área de un rectángulo"
            answ = ejercicio03(+url.searchParams.get('param1'), +url.searchParams.get('param2'))
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo_inner)
                .replace("%parrafo%", parrafo_inner)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;

        case "/ejercicio/4":
            titulo_inner = "Ejercicio 04"
            parrafo_inner = "4.Calcular el área de un triángulo"
            answ = ejercicio04(+url.searchParams.get('param1'), +url.searchParams.get('param2'))
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo_inner)
                .replace("%parrafo%", parrafo_inner)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;

        case "/ejercicio/5":
            titulo_inner = "Ejercicio 05"
            parrafo_inner = "5.Calcular el área de una circunferencia"
            answ = ejercicio05(+url.searchParams.get('param1'))
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo_inner)
                .replace("%parrafo%", parrafo_inner)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;

        case "/ejercicio/6":
            titulo_inner = "Ejercicio 06"
            parrafo_inner = "6.	Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre"
            answ = ejercicio06(+url.searchParams.get('param1'), +url.searchParams.get('param2'));
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo_inner)
                .replace("%parrafo%", parrafo_inner)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;

        case "/ejercicio/7":
            titulo_inner = "Ejercicio 07"
            parrafo_inner = "7.Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m)."
            answ = ejercicio07(+url.searchParams.get('param1'))
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo_inner)
                .replace("%parrafo%", parrafo_inner)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;

        case "/ejercicio/8":
            titulo_inner = "Ejercicio 08"
            parrafo_inner = "8.	Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano"
            answ = ejercicio08(+url.searchParams.get('param1'))
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo_inner)
                .replace("%parrafo%", parrafo_inner)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;

        case "/ejercicio/9":
            titulo_inner = "Ejercicio 09"
            parrafo_inner = "9.Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron"
            answ = ejercicio09(+url.searchParams.get('param1'))
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo_inner)
                .replace("%parrafo%", parrafo_inner)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;

        case "/ejercicio/10":
            titulo_inner = "Ejercicio 10"
            parrafo_inner = "Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad"
            answ = ejercicio10(url.searchParams.get('nom1'), +url.searchParams.get('edad1'), url.searchParams.get('nom2'), +url.searchParams.get('edad2'), url.searchParams.get('nom3'), +url.searchParams.get('edad3'))
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo_inner)
                .replace("%parrafo%", parrafo_inner)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;

        case "/ejercicio/11":
            titulo_inner = "Ejercicio 11"
            parrafo_inner = "Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador"
            answ = ejercicio11(+url.searchParams.get('param1'))
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo_inner)
                .replace("%parrafo%", parrafo_inner)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;

        case "/ejercicio/12":
            titulo_inner = "Ejercicio 12"
            parrafo_inner = "Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años ? ¿Qué salario ha recibido en cada uno de los 6 años ? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado"
            answ = ejercicio11(1500, 0.10, 6)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo_inner)
                .replace("%parrafo%", parrafo_inner)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;

    }
});

// inicializar el servidor
miServidor.listen(1111, "127.0.0.1");
console.log('Servidor Iniciado');

function ejercicio01(numero1, numero2) {
    let respuesta = numero1 + numero2
    return respuesta;
}

function ejercicio02(examen1, examen2, examen3, examen4,) {
    let respuesta = (examen1 + examen2 + examen3 + examen4) / 4
    return respuesta;
}

function ejercicio03(base, altura,) {
    let respuesta = (base * altura)
    return respuesta;
}

function ejercicio04(base, altura,) {
    let respuesta = (base * altura) / 2;
    return respuesta;
}

function ejercicio05(radio,) {

    let respuesta = Math.PI * (radio ** 2);
    return respuesta;
}

function ejercicio06(horas, salario) {
    let respuesta = horas * salario
    return respuesta;
}

function ejercicio07(metros,) {

    let respuesta = (metros * 39.37 + ' pulgadas');
    return respuesta;
}
function ejercicio08(dolares,) {

    let respuesta = dolares * 3.70 + " Soles";
    return respuesta;
}

function ejercicio09(nacimiento,) {

    let fecha_actual = new Date();
    let año_actual = fecha_actual.getFullYear();
    let respuesta = (año_actual - nacimiento + " años");
    return respuesta;
}

function ejercicio10(nom1, edad1, nom2, edad2, nom3, edad3,) {
    let menorEdad = edad1;
    let nombreMenorEdad = String(nom1);

    if (edad2 < menorEdad) {
        menorEdad = edad2;
        nombreMenorEdad = String(nom2);
    }

    if (edad3 < menorEdad) {
        menorEdad = edad3;
        nombreMenorEdad = String(nom3);
    }

    return `La persona de menor edad es ${nombreMenorEdad} con ${menorEdad} años`;

}
function ejercicio11(añosEnTienda,) {

    const añosEnTiendaNumero = parseInt(añosEnTienda);

    let bonoAsignado = 0;

    if (añosEnTiendaNumero === 1) {
        bonoAsignado = 100;
    } else if (añosEnTiendaNumero === 2) {
        bonoAsignado = 200;
    } else if (añosEnTienda === 3) {
        bonoAsignado = 300;
    } else if (añosEnTienda === 4) {
        bonoAsignado = 400;
    } else if (añosEnTienda === 5) {
        bonoAsignado = 500;
    } else {
        bonoAsignado = 1000;
    }
    let respuesta = bonoAsignado;
    return respuesta;

}

    function ejercicio12(){ 
    }
