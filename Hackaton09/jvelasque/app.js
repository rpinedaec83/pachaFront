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
            case '/forms/form-ejercicio-3':
                var html = fs.readFileSync(__dirname + '/forms/form3.html').toString();
                respuesta.end(html);
                break;
            case '/forms/form-ejercicio-4':
                var html = fs.readFileSync(__dirname + '/forms/form4.html').toString();
                respuesta.end(html);
                break;
            case '/forms/form-ejercicio-5':
                var html = fs.readFileSync(__dirname + '/forms/form5.html').toString();
                respuesta.end(html);
                break;
            case '/forms/form-ejercicio-6':
                var html = fs.readFileSync(__dirname + '/forms/form6.html').toString();
                respuesta.end(html);
                break;
            case '/forms/form-ejercicio-7':
                var html = fs.readFileSync(__dirname + '/forms/form7.html').toString();
                respuesta.end(html);
                break;
            case '/forms/form-ejercicio-8':
                var html = fs.readFileSync(__dirname + '/forms/form8.html').toString();
                respuesta.end(html);
                break;
            case '/forms/form-ejercicio-9':
                var html = fs.readFileSync(__dirname + '/forms/form9.html').toString();
                respuesta.end(html);
                break;
            case '/forms/form-ejercicio-10':
                var html = fs.readFileSync(__dirname + '/forms/form10.html').toString();
                respuesta.end(html);
                break;
            case '/forms/form-ejercicio-11':
                var html = fs.readFileSync(__dirname + '/forms/form11.html').toString();
                respuesta.end(html);
                break;
            // case '/forms/form-ejercicio-12':
            // 	var html = fs.readFileSync(__dirname + '/forms/form12.html').toString();
            // 	respuesta.end(html);
            // 	break;
            case '/forms/form-ejercicio-13':
                var html = fs.readFileSync(__dirname + '/forms/form13.html').toString();
                respuesta.end(html);
                break;
            case '/forms/form-ejercicio-14':
                var html = fs.readFileSync(__dirname + '/forms/form14.html').toString();
                respuesta.end(html);
                break;
            case '/forms/form-ejercicio-15':
                var html = fs.readFileSync(__dirname + '/forms/form15.html').toString();
                respuesta.end(html);
                break;
            case '/ejercicio/1':
                titulo = 'Ejercicio 01';
                parrafo = '1.	Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla';
                answ = ejercicio01(parseInt(urlObject.query.num1), parseInt(urlObject.query.num2));
                var html = fs
                    .readFileSync(__dirname + '/templates/ejercicio.html')
                    .toString()
                    .replace('%titulo%', titulo)
                    .replace('%parrafo%', parrafo)
                    .replace('%respuesta%', answ);
                respuesta.end(html);
                break;
            case '/ejercicio/2':
                titulo = 'Ejercicio 02';
                parrafo = 'Un estudiante realiza 4 exámenes, calcular el promedio de estos';
                answ = ejercicio02(
                    parseInt(urlObject.query.nota1),
                    parseInt(urlObject.query.nota2),
                    parseInt(urlObject.query.nota3),
                    parseInt(urlObject.query.nota4)
                );
                var html = fs
                    .readFileSync(__dirname + '/templates/ejercicio.html')
                    .toString()
                    .replace('%titulo%', titulo)
                    .replace('%parrafo%', parrafo)
                    .replace('%respuesta%', answ);
                respuesta.end(html);
                break;
            case '/ejercicio/3':
                titulo = 'Ejercicio 03';
                parrafo = 'Calcular el área de un rectángulo';
                // ejercicio03(base, altura);
                answ = `${ejercicio03(parseInt(urlObject.query.base), parseInt(urlObject.query.altura))}cm`;
                var html = fs
                    .readFileSync(__dirname + '/templates/ejercicio.html')
                    .toString()
                    .replace('%titulo%', titulo)
                    .replace('%parrafo%', parrafo)
                    .replace('%respuesta%', answ);
                respuesta.end(html);
                break;
            case '/ejercicio/4':
                titulo = 'Ejercicio 04';
                parrafo = 'Calcular el área de un triángulo';
                // ejercicio04(base, altura);
                answ = `${ejercicio04(parseInt(urlObject.query.base), parseInt(urlObject.query.altura))}cm`;
                var html = fs
                    .readFileSync(__dirname + '/templates/ejercicio.html')
                    .toString()
                    .replace('%titulo%', titulo)
                    .replace('%parrafo%', parrafo)
                    .replace('%respuesta%', answ);
                respuesta.end(html);
                break;
            case '/ejercicio/5':
                titulo = 'Ejercicio 05';
                parrafo = 'Calcular el área de un circunferencia';
                // ejercicio05(radio);
                answ = `${ejercicio05(parseInt(urlObject.query.radio))}cm²`;
                var html = fs
                    .readFileSync(__dirname + '/templates/ejercicio.html')
                    .toString()
                    .replace('%titulo%', titulo)
                    .replace('%parrafo%', parrafo)
                    .replace('%respuesta%', answ);
                respuesta.end(html);
                break;
            case '/ejercicio/6':
                titulo = 'Ejercicio 06';
                parrafo = 'Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora';
                // ejercicio06(horas, sueldoxhora);
                answ = `S/${ejercicio06(parseInt(urlObject.query.horas), parseInt(urlObject.query.sueldo))}`;
                var html = fs
                    .readFileSync(__dirname + '/templates/ejercicio.html')
                    .toString()
                    .replace('%titulo%', titulo)
                    .replace('%parrafo%', parrafo)
                    .replace('%respuesta%', answ);
                respuesta.end(html);
                break;
            case '/ejercicio/7':
                titulo = 'Ejercicio 07';
                parrafo =
                    'Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. (1 pulgada = 0.0254 m)';
                // ejercicio07(metros);
                answ = `${ejercicio07(parseInt(urlObject.query.metros))} pulgadas`;
                var html = fs
                    .readFileSync(__dirname + '/templates/ejercicio.html')
                    .toString()
                    .replace('%titulo%', titulo)
                    .replace('%parrafo%', parrafo)
                    .replace('%respuesta%', answ);
                respuesta.end(html);
                break;
            case '/ejercicio/8':
                titulo = 'Ejercicio 08';
                parrafo = 'Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano';
                // ejercicio08(precio dolar /soles a convertir);
                answ = `$${ejercicio08(parseInt(urlObject.query.dolar), parseInt(urlObject.query.soles))}`;
                var html = fs
                    .readFileSync(__dirname + '/templates/ejercicio.html')
                    .toString()
                    .replace('%titulo%', titulo)
                    .replace('%parrafo%', parrafo)
                    .replace('%respuesta%', answ);
                respuesta.end(html);
                break;
            case '/ejercicio/9':
                titulo = 'Ejercicio 09';
                parrafo =
                    'Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron';
                // ejercicio09(Año de nacimiento);
                answ = `Tiene ${ejercicio09(parseInt(urlObject.query.year))} años.`;
                var html = fs
                    .readFileSync(__dirname + '/templates/ejercicio.html')
                    .toString()
                    .replace('%titulo%', titulo)
                    .replace('%parrafo%', parrafo)
                    .replace('%respuesta%', answ);
                respuesta.end(html);
                break;
        case "/ejercicio/10":
            respuesta.end("Inicio")
            break;
        case "/ejercicio/11":
            respuesta.end("Inicio")
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

function ejercicio01(numero1, numero2){
    let respuesta = numero1 + numero2
    return respuesta;
}

function ejercicio02(examen1,examen2, examen3,examen4,){
    let respuesta = (examen1+examen2+examen3+examen4)/4
    return respuesta;
}