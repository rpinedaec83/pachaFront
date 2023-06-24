"use strict";
const Constants = {
    ROOT: {
        TEMPLATES : {
            INICIO: '/templates/inicio.html',
            EJERCICIO: '/templates/ejercicio.html'
        },
        INIT: {
            PATH: '/',
            TITULO: "Hackaton 09",
            PARRAFO: "Respuestas de la hackaton 09",
            CANTIDAD_PARAMETROS: undefined
        },
        EJERCICIO_01: {
            PATH: '/ejercicio/01',
            TITULO: 'Ejercicio 01',
            PARRAFO: '1.	Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla',
            CANTIDAD_PARAMETROS: 2
        },
        EJERCICIO_02: {
            PATH: '/ejercicio/02',
            TITULO: 'Ejercicio 02',
            PARRAFO: '2.	Un estudiante realiza 4 exámenes, calcular el promedio de estos',
            CANTIDAD_PARAMETROS: 4
        },
        EJERCICIO_03: {
            PATH: '/ejercicio/03',
            TITULO: 'Ejercicio 03',
            PARRAFO: '3.	Calcular el área de un rectángulo',
            CANTIDAD_PARAMETROS: 2
        },
        EJERCICIO_04: {
            PATH: '/ejercicio/04',
            TITULO: 'Ejercicio 04',
            PARRAFO: '4.	Calcular el área de un triángulo',
            CANTIDAD_PARAMETROS: 2
        },
        EJERCICIO_05: {
            PATH: '/ejercicio/05',
            TITULO: 'Ejercicio 05',
            PARRAFO: '5.	Calcular el área de una circunferencia',
            CANTIDAD_PARAMETROS: 1
        },
        EJERCICIO_06: {
            PATH: '/ejercicio/06',
            TITULO: 'Ejercicio 06',
            PARRAFO: '6.	Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre',
            CANTIDAD_PARAMETROS: 2
        },
        EJERCICIO_07: {
            PATH: '/ejercicio/07',
            TITULO: 'Ejercicio 07',
            PARRAFO: '7.	Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m).',
            CANTIDAD_PARAMETROS: 1
        },
        EJERCICIO_08: {
            PATH: '/ejercicio/08',
            TITULO: 'Ejercicio 08',
            PARRAFO: '8.	Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano',
            CANTIDAD_PARAMETROS: 1
        },
        EJERCICIO_09: {
            PATH: '/ejercicio/09',
            TITULO: 'Ejercicio 09',
            PARRAFO: '9.	Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron',
            CANTIDAD_PARAMETROS: 1
        },
        EJERCICIO_10: {
            PATH: '/ejercicio/10',
            TITULO: 'Ejercicio 10',
            PARRAFO: '10.	Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad',
            CANTIDAD_PARAMETROS: 1
        },
        EJERCICIO_11: {
            PATH: '/ejercicio/11',
            TITULO: 'Ejercicio 11',
            PARRAFO: '11.	Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador',
            CANTIDAD_PARAMETROS: 1
        },
        EJERCICIO_12: {
            PATH: '/ejercicio/12',
            TITULO: 'Ejercicio 12',
            PARRAFO: '12.	Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado',
            CANTIDAD_PARAMETROS: 1
        },
        EJERCICIO_13: {
            PATH: '/ejercicio/13',
            TITULO: 'Ejercicio 13',
            PARRAFO: '13.	Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados',
            CANTIDAD_PARAMETROS: 1
        },
        EJERCICIO_14: {
            PATH: '/ejercicio/14',
            TITULO: 'Ejercicio 14',
            PARRAFO: '14.	Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos, el número de focos de cada color que hay en existencia',
            CANTIDAD_PARAMETROS: 1
        },
        EJERCICIO_15: {
            PATH: '/ejercicio/15',
            TITULO: 'Ejercicio 15',
            PARRAFO: '15.	Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones',
            CANTIDAD_PARAMETROS: 1
        },
    },
    VALOR_PI: Math.PI,
    MENSAJES: {
        PARAMETROS_VACIOS: "No se ingresó datos para la resolución. Intente nuevamente"
    }
};

module.exports = Constants;