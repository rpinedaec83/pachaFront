
// Llamamos los modulos fs, http, url:
let fs = require("fs");
let http = require("http");
let url = require('url');

// Creamos nuestro servidor:
let miServidor = http.createServer((solicitud, respuesta) => {
    respuesta.writeHead(200, {"Content-Type": "text/html"});
    
    let titulo;
    let descripcion;
    let answer;
    let inputs;
    let script;
    let html;

    const url = new URL(solicitud.url, `http://${solicitud.client.localAddress}:${solicitud.client.localPort}`);

    switch (url.pathname) {
        case "/":
            titulo = "Hackaton 09";
            descripcion = "Aprender a definir un algoritmo y aplicarlo en una solución a través de JavaScript, escribir código siguiendo una guía de estilo JS.";

            html = fs
                .readFileSync(__dirname + "/templates/inicio.tpl")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion);

            respuesta.end(html);
            break;


        case "/ejercicio/1":
            titulo = "Ejercicio 1";
            descripcion = "Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla:";
            answer = ejercicio01(parseFloat(url.searchParams.get('num1Ejer1')), parseFloat(url.searchParams.get('num2Ejer1')));

            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.tpl")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer)
                .replace("%inputs%", "")
                .replace("%script%", "");

            respuesta.end(html);
            break;

        
        case "/ejercicio/2":
            titulo = "Ejercicio 2";
            descripcion = "Un estudiante realiza 4 exámenes, calcular el promedio de estos:";
            answer = ejercicio02(parseFloat(url.searchParams.get('nota1Ejer2')), parseFloat(url.searchParams.get('nota2Ejer2')), parseFloat(url.searchParams.get('nota3Ejer2')), parseFloat(url.searchParams.get('nota4Ejer2')));

            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.tpl")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer)
                .replace("%inputs%", "")
                .replace("%script%", "");

            respuesta.end(html);
            break;


        case "/ejercicio/3":
            titulo = "Ejercicio 3";
            descripcion = "Calcular el área de un rectángulo:";
            answer = ejercicio03(parseFloat(url.searchParams.get('valor1Ejer3')), parseFloat(url.searchParams.get('valor2Ejer3')));
    
            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.tpl")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer)
                .replace("%inputs%", "")
                .replace("%script%", "");
    
            respuesta.end(html);
            break;


        case "/ejercicio/4":
            titulo = "Ejercicio 4";
            descripcion = "Calcular el área de un triángulo:";
            answer = ejercicio04(parseFloat(url.searchParams.get('valor1Ejer4')), parseFloat(url.searchParams.get('valor2Ejer4')));
    
            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.tpl")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer)
                .replace("%inputs%", "")
                .replace("%script%", "");
    
            respuesta.end(html);
            break;


        case "/ejercicio/5":
            titulo = "Ejercicio 5";
            descripcion = "Calcular el área de una circunferencia:";
            answer = ejercicio05(parseFloat(url.searchParams.get('radioEjer5')));
    
            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.tpl")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer)
                .replace("%inputs%", "")
                .replace("%script%", "");
    
            respuesta.end(html);
            break;


        case "/ejercicio/6":
            titulo = "Ejercicio 6";
            descripcion = "Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre:";
            answer = ejercicio06(parseFloat(url.searchParams.get('valor1Ejer6')), parseFloat(url.searchParams.get('valor2Ejer6')));
    
            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.tpl")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer)
                .replace("%inputs%", "")
                .replace("%script%", "");
    
            respuesta.end(html);
            break;


        case "/ejercicio/7":
            titulo = "Ejercicio 7";
            descripcion = "Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m):";
            answer = ejercicio07(parseFloat(url.searchParams.get('valor1Ejer7')));
    
            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.tpl")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer)
                .replace("%inputs%", "")
                .replace("%script%", "");
    
            respuesta.end(html);
            break;


        case "/ejercicio/8":
            titulo = "Ejercicio 8";
            descripcion = "Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano:";
            answer = ejercicio08(parseFloat(url.searchParams.get('valor1Ejer8')), parseFloat(url.searchParams.get('valor2Ejer8')));
    
            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.tpl")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer)
                .replace("%inputs%", "")
                .replace("%script%", "");
    
            respuesta.end(html);
            break;


        case "/ejercicio/9":
            titulo = "Ejercicio 9";
            descripcion = "Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron:";
            answer = ejercicio09(parseInt(url.searchParams.get('valor1Ejer9')));
    
            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.tpl")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer)
                .replace("%inputs%", "")
                .replace("%script%", "");
    
            respuesta.end(html);
            break;


        case "/ejercicio/10":
            titulo = "Ejercicio 10";
            descripcion = "Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad:";
            answer = ejercicio10(url.searchParams.get('valor1Ejer10'), parseInt(url.searchParams.get('valor2Ejer10')), url.searchParams.get('valor3Ejer10'), parseInt(url.searchParams.get('valor4Ejer10')), url.searchParams.get('valor5Ejer10'), parseInt(url.searchParams.get('valor6Ejer10')));
    
            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.tpl")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer)
                .replace("%inputs%", "")
                .replace("%script%", "");
    
            respuesta.end(html);
            break;


        case "/ejercicio/11":
            titulo = "Ejercicio 11";
            descripcion = "Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador:";
            answer = ejercicio11(parseInt(url.searchParams.get('valor1Ejer11')));
    
            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.tpl")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer)
                .replace("%inputs%", "")
                .replace("%script%", "");
    
            respuesta.end(html);
            break;


        case "/ejercicio/12":
            titulo = "Ejercicio 12";
            descripcion = "Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10% anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado:";
            answer = ejercicio12();
    
            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.tpl")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer)
                .replace("%inputs%", "")
                .replace("%script%", "");
    
            respuesta.end(html);
            break;


        case "/ejercicio/13":
            titulo = "Ejercicio 13";
            descripcion = "Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados:";
            inputs = ejercicio13_1(parseInt(url.searchParams.get('valor1Ejer13')));
            script = ejercicio13_2(parseInt(url.searchParams.get('valor1Ejer13')));
    
            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.tpl")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%inputs%", inputs)
                .replace("%script%", script)
                .replace("%answer%", "");
    
            respuesta.end(html);
            break;


        case "/ejercicio/14":
            titulo = "Ejercicio 14";
            descripcion = "Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos, el número de focos de cada color que hay en existencia:";
            inputs = ejercicio14_1(parseInt(url.searchParams.get('valor1Ejer14')));
            script = ejercicio14_2(parseInt(url.searchParams.get('valor1Ejer14')));
    
            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.tpl")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%inputs%", inputs)
                .replace("%script%", script)
                .replace("%answer%", "");
    
            respuesta.end(html);
            break;


        case "/ejercicio/15":
            titulo = "Ejercicio 15";
            descripcion = "Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones:";
            answer = ejercicio15(parseInt(url.searchParams.get('valor1Ejer15')));
    
            html = fs
                .readFileSync(__dirname + "/templates/ejercicio.tpl")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%descripcion%", descripcion)
                .replace("%answer%", answer)
                .replace("%inputs%", "")
                .replace("%script%", "");
    
            respuesta.end(html);
            break;


        default:
            respuesta.writeHead(404, {"Content-Type": "text/html"});
            respuesta.end("404 not found");
            break;
    };
});

// inicializar el servidor:
miServidor.listen(1111, "127.0.0.1");




// Algoritmos de los ejercicios:

// Ejercicio 1
function ejercicio01(numero1, numero2) {
    let suma = numero1 + numero2;
    return `La suma de los dos números es ${suma}`;
};


// Ejercicio 2
function ejercicio02(nota1, nota2, nota3, nota4) {
    let promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    return `El promedio de las cuatro notas es ${promedio}`;
};


// Ejercicio 3
function ejercicio03(valor1, valor2) {
    let area = valor1 * valor2;
    return `El área del rectángulo es ${area}`;
};


// Ejercicio 4
function ejercicio04(valor1, valor2) {
    let area = (valor1 * valor2) / 2;
    return `El área del triángulo es ${area}`;
};


// Ejercicio 5
function ejercicio05(radio) {
    let area = Math.PI * (radio ** 2);
    return `El área de la circunferencia es ${area}`;
};


// Ejercicio 6
function ejercicio06(horasTrabajadas, salarioHoras) {
    let salarioSemanal = (horasTrabajadas * salarioHoras) * 7;
    return `El salario semanal es ${salarioSemanal}`;
};


// Ejercicio 7
function ejercicio07(metros) {
    let pulgadas = metros / 0.0254;
    return `La cantidad en pulgadas sería ${pulgadas}`;
};


// Ejercicio 8
function ejercicio08(valorSoles, tasaCambio) {
    let valorDolares = valorSoles / tasaCambio;
    return `El valor en dólares seria ${valorDolares}`
};


// Ejercicio 9
function ejercicio09(anioNacimiento) {
    let fechaActual = new Date();
    let anioActual = fechaActual.getFullYear();

    let edad = anioActual - anioNacimiento;
    return `La edad de la persona es ${edad}`;
};


// Ejercicio 10
function ejercicio10(nomb1, edad1, nomb2, edad2, nomb3, edad3) {
    if (edad1 < edad2 && edad1 < edad3) {
        return `La persona de menor edad es ${nomb1} con ${edad1} años`;
    }
    else if (edad2 < edad1 && edad2 < edad3) {
        return `La persona de menor edad es ${nomb2} con ${edad2} años`;
    }
    else if (edad3 < edad1 && edad3 < edad2) {
        return `La persona de menor edad es ${nomb3} con ${edad3} años`;
    }
    else {
        return `No hay una sola persona que sea menor que las tres`
    };
};


// Ejercicio 11
function ejercicio11(anioAntiguedad) {
    let bono;

    if (anioAntiguedad == 1) {
        bono = 100
    }
    else if (anioAntiguedad == 2) {
        bono = 200
    }
    else if (anioAntiguedad == 3) {
        bono = 300
    }
    else if (anioAntiguedad == 4) {
        bono = 400
    }
    else if (anioAntiguedad == 5) {
        bono = 500
    }
    else if (anioAntiguedad > 5) {
        bono = 1000
    }
    else {
        return `Solo puede ingresar numeros enteros positivos`;
    };

    return `Su bono por antigüedad será de $${bono}`;
};


// Ejercicio 12
function ejercicio12() {
    let salario = 1500;
    let incremento = 0.1;
    let salariosPorAnio = [];
    let resultado = '';

    for (let i = 1; i <= 6; i++) {
        salariosPorAnio.push(salario);
        salario = salario * (1 + incremento);
    };

    resultado += `<br>Salario después de 6 años: $${salario.toFixed(2)}\n`;

    for (let i = 0; i < salariosPorAnio.length; i++) {
        resultado += `<br>Salario año ${i + 1}: $${salariosPorAnio[i].toFixed(2)}\n`;
    };

    return resultado;
};


// Ejercicio 13-1
function ejercicio13_1(cantidadAlumnos) {
    let inputs = 
        `   
            <div class="col-md-12 mb-4">
                <div class="form-group">
                    <label for="valor1Ejer13">Ingrese la nota del alumno 1:</label>
                    <input type="text" class="form-control" id="valor1Ejer13" name="valor1Ejer13" required pattern="[0-9]+([,\.][0-9]+)?" title="Solo puedes ingresar numeros">
                </div>
        `;

    for (let i = 1; i < cantidadAlumnos; i++) {
        inputs += 
            `
                <div class="form-group">
                    <label for="valor1Ejer13">Ingrese la nota del alumno ${i + 1}:</label>
                    <input type="text" class="form-control" id="valor${i + 1}Ejer13" name="valor${i + 1}Ejer13" required pattern="[0-9]+([,\.][0-9]+)?" title="Solo puedes ingresar numeros">
                </div>
            `;
    };

    inputs += 
        `
                <button class="btn btn-primary" onclick="calcular()">
                    Calcular
                </button>
            </div>
        `

    return inputs;
};


// Ejercicio 13-2
function ejercicio13_2(cantidadAlumnos) {
    let script = 
        `
        <script>
            function calcular() {
                let aprobados = 0;
                let desaprobados = 0;

                for (let i = 1; i <= ${cantidadAlumnos}; i++) {

                    if ($("#valor"+i+"Ejer13").val() >= 13) {
                        aprobados++
                    }
                    else {
                        desaprobados++
                    };

                };

                $("#respuesta").html("Alumnos aprobados: " + aprobados + ", Alumnos desaprobados: " + desaprobados);
            };
        </script>
        `;

    return script;
};


// Ejercicio 14-1
function ejercicio14_1(cantidadFocos) {
    let inputs = 
        `   
            <div class="col-md-12 mb-4">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="valor1Ejer14">Color del Foco 1:</label>
                    </div>
                    <select class="custom-select" id="valor1Ejer14" name="valor1Ejer14">
                        <option selected>Seleccionar...</option>
                        <option value="1">Verde</option>
                        <option value="2">Blanco</option>
                        <option value="3">Rojo</option>
                    </select>
                </div>
        `;

    for (let i = 1; i < cantidadFocos; i++) {
        inputs += 
            `
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="valor${i + 1}Ejer14">Color del Foco ${i + 1}</label>
                    </div>
                    <select class="custom-select" id="valor${i + 1}Ejer14" name="valor${i + 1}Ejer14">
                        <option selected>Seleccionar...</option>
                        <option value="1">Verde</option>
                        <option value="2">Blanco</option>
                        <option value="3">Rojo</option>
                    </select>
                </div>
            `;
    };

    inputs += 
        `
                <button class="btn btn-primary" onclick="calcular()">
                    Calcular
                </button>
            </div>
        `

    return inputs;
};


// Ejercicio 14-2
function ejercicio14_2(cantidadFocos) {
    let script = 
        `
        <script>
            function calcular() {
                let verdes = 0;
                let blancos = 0;
                let rojos = 0;

                for (let i = 1; i <= ${cantidadFocos}; i++) {

                    if ($("#valor"+i+"Ejer14").val() == 1) {
                        verdes++
                    }
                    else if ($("#valor"+i+"Ejer14").val() == 2) {
                        blancos++
                    }
                    else if ($("#valor"+i+"Ejer14").val() == 3) {
                        rojos++;
                    };

                };

                $("#respuesta").html("Focos verdes: " + verdes + ", Focos blancos: " + blancos + ", Focos rojos: " + rojos);
            };
        </script>
        `;

    return script;
};


// Ejercicio 15
function ejercicio15(edad) {
    if (edad >= 18) {
        return "Usted puede votar en las próximas elecciones.";
    }
    else {
        return "Usted no puede votar en las próximas elecciones.";
    };
};
