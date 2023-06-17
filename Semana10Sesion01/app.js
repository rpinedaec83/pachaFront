var fs = require('fs');
var express = require("express");
var bodyParser = require("body-parser")
var titulo = 'Hackaton 09';
var parrafo = 'Respuestas de la hackaton 09';
let answ = '';


// generar nuestra app
var app = express();
var puerto = process.env.PUERTO || 3000;
var urlencodedParser = bodyParser.urlencoded({
	extended: false,
  });
app.get("/", function (peticion, respuesta) {
	var html = fs
				.readFileSync(__dirname + '/templates/inicio.html')
				.toString()
				.replace('%titulo%', titulo)
				.replace('%parrafo%', parrafo);
			respuesta.end(html);
  respuesta.send(html);
});

app.get("/ejercicio/1/",urlencodedParser, function (peticion, respuesta) {
	titulo = 'Ejercicio 01';
			parrafo = '1.	Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla';
			console.log(peticion.query.param1);
			console.log(peticion.query.param2);
			let param1 =parseInt( peticion.query.param1);
			let param2 =parseInt( peticion.query.param2);
			
			answ = ejercicio01(param1, param2);
	var html = fs
				.readFileSync(__dirname + '/templates/ejercicio.html')
				.toString()
				.replace('%titulo%', titulo)
				.replace('%parrafo%', parrafo)
				.replace('%respuesta%', answ);
  respuesta.send(html);
});

app.listen(puerto);



// 		case '/ejercicio/1':
// 			titulo = 'Ejercicio 01';
// 			parrafo = '1.	Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla';
// 			answ = ejercicio01(20, 144);
// 			var html = fs
// 				.readFileSync(__dirname + '/templates/ejercicio.html')
// 				.toString()
// 				.replace('%titulo%', titulo)
// 				.replace('%parrafo%', parrafo)
// 				.replace('%respuesta%', answ);
// 			respuesta.end(html);
// 			break;
// 		case '/ejercicio/2':
// 			titulo = 'Ejercicio 01';
// 			parrafo = 'Un estudiante realiza 4 exámenes, calcular el promedio de estos';
// 			answ = ejercicio02(20, 14, 12, 15);
// 			var html = fs
// 				.readFileSync(__dirname + '/templates/ejercicio.html')
// 				.toString()
// 				.replace('%titulo%', titulo)
// 				.replace('%parrafo%', parrafo)
// 				.replace('%respuesta%', answ);
// 			respuesta.end(html);
// 			break;
// 		case '/ejercicio/3':
// 			respuesta.end('Inicio');
// 			break;
// 		case '/ejercicio/4':
// 			respuesta.end('Inicio');
// 			break;
// 		case '/ejercicio/5':
// 			respuesta.end('Inicio');
// 			break;
// 		case '/ejercicio/6':
// 			respuesta.end('Inicio');
// 			break;
// 		case '/ejercicio/7':
// 			respuesta.end('Inicio');
// 			break;
// 		case '/ejercicio/8':
// 			respuesta.end('Inicio');
// 			break;
// 		case '/ejercicio/9':
// 			respuesta.end('Inicio');
// 			break;
// 		case '/ejercicio/10':
// 			respuesta.end('Inicio');
// 			break;
// 		case '/ejercicio/11':
// 			respuesta.end('Inicio');
// 			break;
// 		case '/ejercicio/12':
// 			respuesta.end('Inicio');
// 			break;
// 		case '/ejercicio/13':
// 			respuesta.end('Inicio');
// 			break;
// 		case '/ejercicio/14':
// 			respuesta.end('Inicio');
// 			break;
// 		case '/ejercicio/15':
// 			respuesta.end('Inicio');
// 			break;
// 		default:
// 			respuesta.writeHead(404, { 'Content-Type': 'text/html' });
// 			respuesta.end('404 not found');
// 			break;
// 	}
// });

// // inicializar el servidor
// miServidor.listen(1111, '127.0.0.1');

function ejercicio01(numero1, numero2) {
	let respuesta = numero1 + numero2;
	return respuesta;
}

function ejercicio02(examen1, examen2, examen3, examen4) {
	let respuesta = (examen1 + examen2 + examen3 + examen4) / 4;
	return respuesta;
}
