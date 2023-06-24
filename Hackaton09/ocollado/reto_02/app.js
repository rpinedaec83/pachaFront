"use strict";

var fs = require("fs");
var http = require("http");
var url = require('url');

var Utils = require("./components/Utils");
const Constants = require("./components/Constants");
var Ejercicios = require("./components/Ejercicios");

var miServidor = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });

    let queryParams = url.parse(request.url, true).query;
    let urlParsed = new URL(`http://${request.headers.host}${request.url}`);

    let templateUrl = Constants.ROOT.TEMPLATES.EJERCICIO;
    let respuestaEjercicio;
    let ejercicioObject;

    switch (urlParsed.pathname) {
        case Constants.ROOT.INIT.PATH:
            templateUrl = Constants.ROOT.TEMPLATES.INICIO;
            ejercicioObject = Constants.ROOT.INIT;
            break;
        case Constants.ROOT.EJERCICIO_01.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_01;

            let primerArgumento = queryParams.n1;
            let segundoArgumento = queryParams.n2;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio01(primerArgumento, segundoArgumento)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        case Constants.ROOT.EJERCICIO_02.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_02;

            let primeraNota = queryParams.n1;
            let segundaNota = queryParams.n2;
            let terceraNota = queryParams.n3;
            let cuartaNota = queryParams.n4;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio02(primeraNota, segundaNota, terceraNota, cuartaNota)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        case Constants.ROOT.EJERCICIO_03.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_03;

            let baseEjercicio03 = queryParams.n1;
            let alturaEjercicio03 = queryParams.n2;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio03(baseEjercicio03, alturaEjercicio03)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        case Constants.ROOT.EJERCICIO_04.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_04;

            let baseEjercicio04 = queryParams.n1;
            let alturaEjercicio04 = queryParams.n2;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio04(baseEjercicio04, alturaEjercicio04)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        case Constants.ROOT.EJERCICIO_05.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_05;

            let radio = queryParams.n1;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio05(radio)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        case Constants.ROOT.EJERCICIO_06.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_06;

            let horasTrabajadas = queryParams.n1;
            let salarioPorHora = queryParams.n2;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio06(horasTrabajadas, salarioPorHora)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        case Constants.ROOT.EJERCICIO_07.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_07;

            let metros = queryParams.n1;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio07(metros)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        case Constants.ROOT.EJERCICIO_08.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_08;

            let cantidadSolesPeruanos = queryParams.n1;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio08(cantidadSolesPeruanos)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        case Constants.ROOT.EJERCICIO_09.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_09;

            let anioNacimiento = queryParams.n1;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio09(anioNacimiento)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        case Constants.ROOT.EJERCICIO_10.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_10;

            let arrayPersonas = queryParams.n1;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio10(arrayPersonas)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        case Constants.ROOT.EJERCICIO_11.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_11;

            let anioAntiguedad = queryParams.n1;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio11(anioAntiguedad)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        case Constants.ROOT.EJERCICIO_12.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_12;
            respuestaEjercicio = Ejercicios.ejercicio12();
            break;
        case Constants.ROOT.EJERCICIO_13.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_13;

            let arrayNotaAlumnos = queryParams.n1;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio13(arrayNotaAlumnos)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        case Constants.ROOT.EJERCICIO_14.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_14;

            let arrayColoresFocos = queryParams.n1;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio14(arrayColoresFocos)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        case Constants.ROOT.EJERCICIO_15.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_15;

            let edadPersona = queryParams.n1;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio15(edadPersona)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        default:
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end("404 not found")
            break;
    }

    Utils.redireccionarRespuesta(
        fs,
        response,
        Utils.getUrlRedirection(__dirname, templateUrl),
        ejercicioObject.TITULO,
        ejercicioObject.PARRAFO,
        ejercicioObject.CANTIDAD_PARAMETROS,
        respuestaEjercicio
    );


});

// inicializar el servidor
miServidor.listen(1111, "127.0.0.1");
