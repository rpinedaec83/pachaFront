var fs = require('fs');
// llamamos a la librería http
var http = require('http');
var url = require('url');
const {
	ejercicio01,
	ejercicio02,
	ejercicio03,
	ejercicio04,
	ejercicio05,
	ejercicio07,
	ejercicio06,
	ejercicio08,
	ejercicio09,
	ejercicio10,
	ejercicio11,
	ejercicio12,
	ejercicio13,
	ejercicio15,
	ejercicio14,
} = require('./js/scripts');

var titulo = 'Hackaton 09';
var parrafo = 'Respuestas de la hackaton 09';
let answ = '';
var miServidor = http.createServer((peticion, respuesta) => {
	const urlObject = url.parse(peticion.url, true);
	respuesta.writeHead(200, { 'Content-Type': 'text/html' });
	switch (urlObject.pathname) {
		case '/':
			var html = fs
				.readFileSync(__dirname + '/templates/inicio.html')
				.toString()
				.replace('%titulo%', titulo)
				.replace('%parrafo%', parrafo);
			respuesta.end(html);
			break;
		case '/forms/form-ejercicio-1':
			var html = fs.readFileSync(__dirname + '/forms/form1.html').toString();
			respuesta.end(html);
			break;
		case '/forms/form-ejercicio-2':
			var html = fs.readFileSync(__dirname + '/forms/form2.html').toString();
			respuesta.end(html);
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
		case '/ejercicio/10':
			titulo = 'Ejercicio 10';
			parrafo = 'Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad';
			personas = [
				{
					nombre: urlObject.query.nombre1,
					edad: parseInt(urlObject.query.edad1),
				},
				{
					nombre: urlObject.query.nombre2,
					edad: parseInt(urlObject.query.edad2),
				},
				{
					nombre: urlObject.query.nombre3,
					edad: parseInt(urlObject.query.edad3),
				},
			];
			// ejercicio10(personas));
			answ = `La persona con menor edad es ${ejercicio10(personas).nombre} con ${ejercicio10(personas).edad} años.`;
			var html = fs
				.readFileSync(__dirname + '/templates/ejercicio.html')
				.toString()
				.replace('%titulo%', titulo)
				.replace('%parrafo%', parrafo)
				.replace('%respuesta%', answ);
			respuesta.end(html);
			break;
		case '/ejercicio/11':
			titulo = 'Ejercicio 11';
			parrafo =
				'Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador';
			// ejercicio11(Año de antiguedad);
			answ = `${ejercicio11(parseInt(urlObject.query.year))}`;
			var html = fs
				.readFileSync(__dirname + '/templates/ejercicio.html')
				.toString()
				.replace('%titulo%', titulo)
				.replace('%parrafo%', parrafo)
				.replace('%respuesta%', answ);
			respuesta.end(html);
			break;
		case '/ejercicio/12':
			titulo = 'Ejercicio 12';
			parrafo =
				'Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado';
			// ejercicio12();
			answ = `${ejercicio12()}`;
			var html = fs
				.readFileSync(__dirname + '/templates/ejercicio.html')
				.toString()
				.replace('%titulo%', titulo)
				.replace('%parrafo%', parrafo)
				.replace('%respuesta%', answ);
			respuesta.end(html);
			break;
		case '/ejercicio/13':
			titulo = 'Ejercicio 13';
			parrafo = 'Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados';
			let alumnos = Object.entries(urlObject.query);
			// console.log(alumnos);
			alumnos.pop();
			// console.log(alumnos);
			alumnos = alumnos.flat();
			alumnos = alumnos.map((notas) => parseInt(notas));
			// console.log(alumnos);
			alumnos = alumnos.filter((notas) => notas > 0);
			// console.log('*****');
			answ = `${ejercicio13(alumnos)}`;
			var html = fs
				.readFileSync(__dirname + '/templates/ejercicio.html')
				.toString()
				.replace('%titulo%', titulo)
				.replace('%parrafo%', parrafo)
				.replace('%respuesta%', answ);
			respuesta.end(html);
			break;
		case '/ejercicio/14':
			titulo = 'Ejercicio 14';
			parrafo =
				'Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos, el número de focos de cada color que hay en existencia';
			// focos = [1, 2, 3, 3, 2, 1, 1, 2, 3, 1, 1, 1, 2, 3, 3, 2];
			let focos = Object.entries(urlObject.query);
			// console.log(focos);
			focos.pop();
			// console.log(focos);
			focos = focos.flat();
			focos = focos.map((foco) => parseInt(foco));
			// console.log(focos);
			focos = focos.filter((foco) => foco > 0);
			// console.log(focos);
			// ejercicio14();
			answ = `${ejercicio14(focos)}`;
			var html = fs
				.readFileSync(__dirname + '/templates/ejercicio.html')
				.toString()
				.replace('%titulo%', titulo)
				.replace('%parrafo%', parrafo)
				.replace('%respuesta%', answ);
			respuesta.end(html);
			break;
		case '/ejercicio/15':
			titulo = 'Ejercicio 15';
			parrafo = 'Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones';
			// ejercicio15(15, 2028);
			answ = `${ejercicio15(parseInt(urlObject.query.year), parseInt(urlObject.query.elecciones))}`;
			var html = fs
				.readFileSync(__dirname + '/templates/ejercicio.html')
				.toString()
				.replace('%titulo%', titulo)
				.replace('%parrafo%', parrafo)
				.replace('%respuesta%', answ);
			respuesta.end(html);
			break;
		default:
			respuesta.writeHead(404, { 'Content-Type': 'text/html' });
			titulo = 'Pagina no encontrada';
			parrafo = 'Error 404, pagina no encontra!';
			answ = '';
			var html = fs
				.readFileSync(__dirname + '/templates/ejercicio.html')
				.toString()
				.replace('%titulo%', titulo)
				.replace('%parrafo%', parrafo)
				.replace('%respuesta%', answ);
			respuesta.end(html);
			break;
	}
});

// inicializar el servidor
miServidor.listen(1111, '127.0.0.1');
