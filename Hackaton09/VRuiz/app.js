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
            answ = ejercicio03(width = 12, height = 6)
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
            answ = ejercicio04(base = 5, height = 7)
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
            answ = ejercicio05(radio=10)
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
            answ = ejercicio06(horas=8, valor=15, dias=6)
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
            answ = ejercicio07(pul=39.37, met=5)
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
            answ = ejercicio08(solp=200, dolar=3.70)
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
            answ = ejercicio09(añonac=1999, añoact=2023)
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
            answ = ejercicio10( nom1=vale, edad1=10, nom2=Paty, edad2=21, nom3=Mateo, edad3=5)
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
            answ = ejercicio11(añonac=1999, añoact=2023)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/12":
            respuesta.end("Inicio")
            break;
        case "/ejercicio/13":
            respuesta.end("Inicio")
            break;
        case "/ejercicio/14":
            respuesta.end("Inicio")
            break;
        case "/ejercicio/15":
            respuesta.end("Inicio")
            break;
        default:
            respuesta.writeHead(404, { "Content-Type": "text/html" });
            respuesta.end("404 not found")
            break;
    }
});

// inicializar el servidor
miServidor.listen(1111, "127.0.0.1");
console.log("servidor iniciado")
function ejercicio01(numero1, numero2){
    let respuesta = numero1 + numero2
    return respuesta;
}

function ejercicio02(examen1,examen2, examen3,examen4,){
    let respuesta = (examen1+examen2+examen3+examen4)/4
    return respuesta;
}

function ejercicio03( width, height){
    let respuesta = width * height
    return respuesta;
}

function ejercicio04( base, height){
    let respuesta = (base * height)/2
    return respuesta;
}

function ejercicio05( radio){
    let respuesta = Math.PI * Math.pow(radio, 2)
    return respuesta;
}

function ejercicio06( horas, valor, dias){
    let respuesta = horas*valor*dias
    return respuesta;
}

function ejercicio07( pul, met){
    let respuesta = pul*met
    return respuesta;
}

function ejercicio08( solp, dolar){
    let respuesta = solp/dolar
    return respuesta;
}

function ejercicio09( añonac, añoact){
    let respuesta = añoact-añonac
    return respuesta;
}

function ejercicio09( añonac, añoact){
    let respuesta = añoact-añonac
    return respuesta;
}





