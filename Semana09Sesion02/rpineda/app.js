// let http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(9000);

// console.log("Hola Mundo");

//   var saludar = function () {
//     console.log("Hola");
//   };
  
//   var queHacer = function (fun) {
//     fun();
//   };
  
//   queHacer(saludar);

// app.js
// var saludar = require("./saludar");
// saludar();

// function Persona(nombre, apellido, edad) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//   }
  
//   Persona.prototype.Saludar = function () {
//     console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido);
//   };
  
//   Persona.prototype.DecirEdad = function () {
//     console.log("Tengo " + this.edad + " años");
//   };
  
//   Persona.prototype.Caminar = function () {
//     console.log("Estoy caminando!");
//   };
  
//   Persona.prototype.Dormir = function () {
//     console.log("Me fui a dormir!");
//   };
  
//   var Roberto = new Persona("Roberto", "Pineda", 39);
//   Roberto.Saludar();
//   Roberto.DecirEdad();
//   Roberto.Caminar();
//   Roberto.Dormir();

  // 06_scope/01_funcion_autoexecutable.js
// (function () {
//     console.log("Hola amigo");
//   })();

// cargamos la librería de eventos
// var eventos = require("events");

// // creamos un nuevo manejador de eventos
// var control_remoto = new eventos();

// // cuando presionamos adelante
// control_remoto.on("adelante", function () {
//   console.log("El robot camina hacia el frente");
// });

// // cuando presionamos atrás
// control_remoto.on("atras", function () {
//   console.log("El robot camina hacia atras");
// });

// // cuando ordenamos saludar

// // el robot se detiene
// control_remoto.on("saludar", function () {
//   console.log("Detener robot.");
// });

// // el robot saluda
// control_remoto.on("saludar", function () {
//   console.log('El robot dice "Hola, soy Genialo"!');
// });

// // utilizar controles
// control_remoto.emit("adelante");
// control_remoto.emit("atras");
// control_remoto.emit("saludar");

// "use strict";
// class Robot {
//     constructor(nombre) {
//       this.nombre = nombre;
//     }
  
//     saludar() {
//       console.log(`Hola, mi nombre es ${this.nombre}.`);
//     }
  
//     frente() {
//       console.log(`${this.nombre} da dos pasos al frente.`);
//     }
  
//     atras() {
//       console.log(`${this.nombre} da dos pasos atras.`);
//     }
//   }
  
//   let genialo = new Robot("Genialo");
//   genialo.saludar();
//   genialo.frente();
//   genialo.atras();

// Habilitar el modo estricto
// "use strict";

// let events = require("events");

// class Robot extends events {
//   constructor(nombre) {
//     super();
//     this.nombre = nombre;
//   }

//   saludar() {
//     console.log(`Hola, mi nombre es ${this.nombre}.`);
//     this.emit("saludar");
//   }

//   frente() {
//     console.log(`${this.nombre} camina al frente.`);
//     this.emit("frente");
//   }

//   atras() {
//     console.log(`${this.nombre} camina hacia atras.`);
//     this.emit("atras");
//   }
// }

// let genialo = new Robot("Genialo");

// genialo.on("frente", function () {
//   console.log(this.nombre + " da dos pasos al frente");
// });

// genialo.on("atras", function () {
//   console.log(this.nombre + " da dos pasos atras");
// });

// genialo.saludar();
// genialo.frente();
// genialo.atras();

// var fs = require("fs");
// // llamamos a la librería http
// var http = require("http");


// var titulo = "Este es el titulo de la pagina.";
// var parrafo = "Este es el parrafo de la pagina.";

// var miServidor = http.createServer((peticion, respuesta) => {
//     respuesta.writeHead(200, { "Content-Type": "text/html"  });
//     switch (peticion.url) {
//         case "/":
//         case "/inicio":
//           respuesta.end("Inicio")
//           break;
//         case "/contacto":
//           respuesta.end("Contacto")
//           break;
//         default:
//           respuesta.writeHead(404, { "Content-Type": "text/html"  });
//           respuesta.end("404 not found")
//           break;
//       }
//   });
  
//   // inicializar el servidor
//   miServidor.listen(1111, "127.0.0.1");

// app.js
var moment = require("moment");
moment.locale("es");
moment.weekdays(true).forEach(function (dia) {
  console.log(dia);
});