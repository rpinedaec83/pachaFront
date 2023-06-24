import fs from "fs";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import funciones from "./funciones/index.js";
import url from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let titulo = "";
let parrafo = "";
let answ = "";
const miServidor = createServer((req, respuesta) => {
  respuesta.writeHead(200, { "Content-Type": "text/html" });

  const { pathname } = url.parse(req.url, true);
  switch (pathname) {
    case "/":
      titulo = "Hackaton 09";
      parrafo = "Respuestas de la hackaton 09";
      var html = fs
        .readFileSync(__dirname + "/templates/index.html", "utf-8")
        .replace("%titulo%", titulo)
        .replace("%parrafo%", parrafo);
      respuesta.end(html);
      break;
    case "/ejercicio/1":
      function ej01() {
        const { input1, input2 } = url.parse(req.url, true).query;
        titulo = "Ejercicio 01";
        parrafo =
          "1.Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla";
        answ = funciones.ejercicio01(input1, input2);
        var html = fs
          .readFileSync(__dirname + "/templates/ejercicio.html")
          .toString()
          .replace("%titulo%", titulo)
          .replace("%parrafo%", parrafo)
          .replace("%respuesta%", answ);
        respuesta.end(html);
      }
      ej01();
      break;
    case "/ejercicio/2":
      function ej02 (){
        const {input1,input2,input3,input4} = url.parse(req.url, true).query;
        titulo = "Ejercicio 02";
        parrafo =
          "Un estudiante realiza 4 exámenes, calcular el promedio de estos";
        answ = funciones.ejercicio02(
          input1,
          input2,
          input3,
          input4
        );
        var html = fs
          .readFileSync(__dirname + "/templates/ejercicio.html")
          .toString()
          .replace("%titulo%", titulo)
          .replace("%parrafo%", parrafo)
          .replace("%respuesta%", answ);
        respuesta.end(html);
      }
      ej02();
      break;
    case "/ejercicio/3":
      function ej03() {
        const {input1,input2} = url.parse(req.url, true).query;
        titulo = "Ejercicio 03";
        parrafo = "Calcular el área de un rectángulo";
        answ = funciones.ejercicio03(input1, input2);
        var html = fs
          .readFileSync(__dirname + "/templates/ejercicio.html")
          .toString()
          .replace("%titulo%", titulo)
          .replace("%parrafo%", parrafo)
          .replace("%respuesta%", answ);
        respuesta.end(html);
      }
      ej03();
      break;
    case "/ejercicio/4":
      function ej04() {
        const area = url.parse(req.url, true).query;
        const { input1, input2 } = area;
        titulo = "Ejercicio 04";
        parrafo = "Calcular el área de un triángulo";
        answ = funciones.ejercicio04(input1, input2);
        var html = fs
          .readFileSync(__dirname + "/templates/ejercicio.html")
          .toString()
          .replace("%titulo%", titulo)
          .replace("%parrafo%", parrafo)
          .replace("%respuesta%", answ);
        respuesta.end(html);
      }
      ej04();
      break;
    case "/ejercicio/5":
      function ej05() {
        const area = url.parse(req.url, true).query
        const {input1} = area
        titulo = "Ejercicio 05";
        parrafo = "Calcular el área de una circunferencia";
        answ = funciones.ejercicio05(input1);
        var html = fs
          .readFileSync(__dirname + "/templates/ejercicio.html")
          .toString()
          .replace("%titulo%", titulo)
          .replace("%parrafo%", parrafo)
          .replace("%respuesta%", answ);
        respuesta.end(html);
      }
      ej05();
      break;
    case "/ejercicio/6":
      function ej06 () {
        const {input1,input2} = url.parse(req.url, true).query
        titulo = "Ejercicio 06";
        parrafo = "Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre";
        answ = funciones.ejercicio06(input1, input2);
        var html = fs
          .readFileSync(__dirname + "/templates/ejercicio.html")
          .toString()
          .replace("%titulo%", titulo)
          .replace("%parrafo%", parrafo)
          .replace("%respuesta%", answ);
        respuesta.end(html);
      }
      ej06();
      break;
    case "/ejercicio/7":
      function ej07() {
        const {input1} = url.parse(req.url, true).query
        titulo = "Ejercicio 07";
        parrafo =
          "Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m).";
        answ = funciones.ejercicio07(input1);
        var html = fs
          .readFileSync(__dirname + "/templates/ejercicio.html")
          .toString()
          .replace("%titulo%", titulo)
          .replace("%parrafo%", parrafo)
          .replace("%respuesta%", answ);
        respuesta.end(html);
      }
      ej07();
      break;
    case "/ejercicio/8":

     function ej08 () {
      const {input1} = url.parse(req.url, true).query
      titulo = "Ejercicio 08";
      parrafo ="Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano";
      answ = funciones.ejercicio08(input1);
      var html = fs
        .readFileSync(__dirname + "/templates/ejercicio.html")
        .toString()
        .replace("%titulo%", titulo)
        .replace("%parrafo%", parrafo)
        .replace("%respuesta%", answ);
      respuesta.end(html);
     }
     ej08();
      break;
    case "/ejercicio/9":
     function ej09() {
      const {input1} = url.parse(req.url, true).query
      titulo = "Ejercicio 09";
      parrafo="Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron";
      answ = funciones.ejercicio09(input1);
      var html = fs
        .readFileSync(__dirname + "/templates/ejercicio.html")
        .toString()
        .replace("%titulo%", titulo)
        .replace("%parrafo%", parrafo)
        .replace("%respuesta%", answ);
      respuesta.end(html);
      }
      ej09();
      break;
    case "/ejercicio/10":
      
      function ej10 (){
        titulo = "Ejercicio 10";
        const {nombre1, edad1, nombre2, edad2, nombre3, edad3} = url.parse(req.url, true).query
        parrafo =
          "Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad";
        answ = funciones.ejercicio10(nombre1, edad1, nombre2, edad2, nombre3, edad3);
        var html = fs
          .readFileSync(__dirname + "/templates/ejercicio.html")
          .toString()
          .replace("%titulo%", titulo)
          .replace("%parrafo%", parrafo)
          .replace("%respuesta%", answ);
        respuesta.end(html);
      }
      ej10();
      break;
    case "/ejercicio/15":
      function ej15() {
        const {input1} = url.parse(req.url, true).query
        titulo = "Ejercicio 15";
      parrafo ="Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones";
      answ = funciones.ejercicio15(input1);
      var html = fs
        .readFileSync(__dirname + "/templates/ejercicio.html")
        .toString()
        .replace("%titulo%", titulo)
        .replace("%parrafo%", parrafo)
        .replace("%respuesta%", answ);
      respuesta.end(html);
      }
      ej15();
      break;
    default:
      respuesta.writeHead(404, { "Content-Type": "text/html" });
      respuesta.end("404 not found");
      break;
  }
});

// inicializar el servidor
miServidor.listen(1111);
