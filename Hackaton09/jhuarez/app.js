var fs = require('fs');
var http = require("http");
var url = require('url');

//usamos express()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());


//inicializando variables
let html="";
var titulo = "Hackaton 09";
var parrafo = "Respuestas de la hackaton 09";
let answ = 0;
let marcador = 0;

   
app.use(express.urlencoded({extended: true})); 

//pagina inicio
app.get("/", function (req, res) {
    marcador=0;
    res.sendFile(__dirname +"/templates/inicio.html");

    titulo = "Hackaton 09";
    parrafo = "Respuestas de la hackaton 09";
    html=fs.readFileSync(__dirname + "/templates/inicio.html")
    .toString()
    .replace("%titulo%", titulo)
    .replace("%parrafo%", parrafo)
    res.end(html)
});

//PAGINAS FORMULARIOS
//pagina ejercicio 1, formulario
app.get("/ejercicio/1", function (req, res) {
    marcador=1;
    res.sendFile(__dirname +"/formu/formu1.html");

    titulo = "Ejercicio 01"
    parrafo = "1.	Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla"
    html=fs.readFileSync(__dirname + "/formu/formu1.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 2, formulario
app.get("/ejercicio/2", function (req, res) {
    marcador=2;
    res.sendFile(__dirname +"/formu/formu2.html");

    console.log(marcador)

    titulo = "Ejercicio 02"
    parrafo = "2.	Un estudiante realiza 4 exámenes, calcular el promedio de estos"
    html=fs.readFileSync(__dirname + "/formu/formu2.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 3, formulario
app.get("/ejercicio/3", function (req, res) {
    marcador=3;
    res.sendFile(__dirname +"/formu/formu3.html");

    titulo = "Ejercicio 03"
    parrafo = "3.	Calcular el área de un rectángulo"
    html=fs.readFileSync(__dirname + "/formu/formu3.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 4, formulario
app.get("/ejercicio/4", function (req, res) {
    marcador=4;
    res.sendFile(__dirname +"/formu/formu4.html");

    titulo = "Ejercicio 04"
    parrafo = "4.	Calcular el área de un triángulo"
    html=fs.readFileSync(__dirname + "/formu/formu4.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 5, formulario
app.get("/ejercicio/5", function (req, res) {
    marcador=5;
    res.sendFile(__dirname +"/formu/formu5.html");

    titulo = "Ejercicio 05"
    parrafo = "5.	Calcular el área de una circunferencia"
    html=fs.readFileSync(__dirname + "/formu/formu5.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 6, formulario
app.get("/ejercicio/6", function (req, res) {
    marcador=6;
    res.sendFile(__dirname +"/formu/formu6.html");

    titulo = "Ejercicio 06"
    parrafo = "6.	Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre"
    html=fs.readFileSync(__dirname + "/formu/formu6.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 7, formulario
app.get("/ejercicio/7", function (req, res) {
    marcador=7;
    res.sendFile(__dirname +"/formu/formu7.html");

    titulo = "Ejercicio 07"
    parrafo = "7.	Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m).e"
    html=fs.readFileSync(__dirname + "/formu/formu7.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 8, formulario
app.get("/ejercicio/8", function (req, res) {
    marcador=8;
    res.sendFile(__dirname +"/formu/formu8.html");

    titulo = "Ejercicio 08"
    parrafo = "8.	Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano"
    html=fs.readFileSync(__dirname + "/formu/formu8.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 9, formulario
app.get("/ejercicio/9", function (req, res) {
    marcador=9;
    res.sendFile(__dirname +"/formu/formu9.html");

    titulo = "Ejercicio 09"
    parrafo = "9.	Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron"
    html=fs.readFileSync(__dirname + "/formu/formu9.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 10, formulario
app.get("/ejercicio/10", function (req, res) {
    marcador=10;
    res.sendFile(__dirname +"/formu/formu10.html");

    titulo = "Ejercicio 10"
    parrafo = "10.	Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad"
    html=fs.readFileSync(__dirname + "/formu/formu10.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 11, formulario
app.get("/ejercicio/11", function (req, res) {
    marcador=11;
    res.sendFile(__dirname +"/formu/formu11.html");

    titulo = "Ejercicio 11"
    parrafo = "11.	Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador"
    html=fs.readFileSync(__dirname + "/formu/formu11.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 12, formulario
app.get("/ejercicio/12", function (req, res) {
    marcador=12;
    res.sendFile(__dirname +"/formu/formu12.html");

    titulo = "Ejercicio 12"
    parrafo = "12.	Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado"
    html=fs.readFileSync(__dirname + "/formu/formu12.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 13, formulario
app.get("/ejercicio/13", function (req, res) {
    marcador=13;
    res.sendFile(__dirname +"/formu/formu13.html");

    titulo = "Ejercicio 13"
    parrafo = "13.	Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados"
    html=fs.readFileSync(__dirname + "/formu/formu13.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 14, formulario
app.get("/ejercicio/14", function (req, res) {
    marcador=14;
    res.sendFile(__dirname +"/formu/formu14.html");

    titulo = "Ejercicio 14"
    parrafo = "14.	Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos, el número de focos de cada color que hay en existencia"
    html=fs.readFileSync(__dirname + "/formu/formu14.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 15, formulario
app.get("/ejercicio/15", function (req, res) {
    marcador=15;
    res.sendFile(__dirname +"/formu/formu15.html");

    titulo = "Ejercicio 15"
    parrafo = "15.	Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones"
    html=fs.readFileSync(__dirname + "/formu/formu15.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});


app.use(express.json());    
//PAGINAS MOSTRAR RESPUESTAS EJERCICIOS (IF-ELSE)
app.post("/ejercicio/respuesta", (req, res) => {

    console.log(marcador)
    //mostrar respuesta ejercicio1
    if (marcador===1){
    
    let numero1 = req.body.num1;
    let numero2 = req.body.num2;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    answ=ejercicio01(numero1,numero2);
   
    res.sendFile(__dirname +"/templates/ejercicio.html");

    titulo = "Ejercicio 01"
    parrafo = "1.	Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla"
    html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)                
                    .replace("%respuesta%", "La suma es: "+answ);
    res.end(html)
    }

    //mostrar respuesta ejercicio2
    else if (marcador===2){
        
        let nota1 = req.body.nota1;
        let nota2 = req.body.nota2;
        let nota3 = req.body.nota3;
        let nota4 = req.body.nota4;

        nota1=parseInt(nota1);
        nota2=parseInt(nota2);
        nota3=parseInt(nota3);
        nota4=parseInt(nota4);

        answ=ejercicio02(nota1,nota2,nota3,nota4);
        

        res.sendFile(__dirname +"/templates/ejercicio.html");

        titulo = "Ejercicio 02"
        parrafo = "2.	Un estudiante realiza 4 exámenes, calcular el promedio de estos"
        html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                        .toString()
                        .replace("%titulo%", titulo)
                        .replace("%parrafo%", parrafo)                
                        .replace("%respuesta%", answ);
        res.end(html)

    }

    else if (marcador===3){
        
        let largo = req.body.largorect;
        let ancho = req.body.anchorect;

        largo=parseInt(largo);
        ancho=parseInt(ancho);
        
        answ=ejercicio03(largo,ancho);

        res.sendFile(__dirname +"/templates/ejercicio.html");

        titulo = "Ejercicio 03"
        parrafo = "3. Calcular el área de un rectángulo"
        html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                        .toString()
                        .replace("%titulo%", titulo)
                        .replace("%parrafo%", parrafo)                
                        .replace("%respuesta%", answ);
        res.end(html)

    }

    else if (marcador===4){
        let base = req.body.basetri;
        let altura = req.body.alttri;

        base=parseInt(base);
        altura=parseInt(altura);
        
        answ=ejercicio04(base, altura);


        res.sendFile(__dirname +"/templates/ejercicio.html");

        titulo = "Ejercicio 04"
        parrafo = "4. Calcular el área de un triángulo"
        html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                        .toString()
                        .replace("%titulo%", titulo)
                        .replace("%parrafo%", parrafo)                
                        .replace("%respuesta%", answ);
        res.end(html)

    }

    else if (marcador===5){
        let radio = req.body.radiocirc;
       
        radio=parseInt(radio);               
        answ=ejercicio05(radio);

        res.sendFile(__dirname +"/templates/ejercicio.html");

        titulo = "Ejercicio 05"
        parrafo = "5. Calcular el área de una circunferencia"
        html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                        .toString()
                        .replace("%titulo%", titulo)
                        .replace("%parrafo%", parrafo)                
                        .replace("%respuesta%", answ);
        res.end(html)

    }

    else if (marcador===6){
        let horas = req.body.horas;
        let tarifa = req.body.sueldohora;
       
        horas=parseInt(horas);   
        tarifa=parseInt(tarifa);            
        answ=ejercicio06(horas,tarifa);

        res.sendFile(__dirname +"/templates/ejercicio.html");

        titulo = "Ejercicio 06"
        parrafo = "6. Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre"
        html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                        .toString()
                        .replace("%titulo%", titulo)
                        .replace("%parrafo%", parrafo)                
                        .replace("%respuesta%", answ);
        res.end(html)
    }

    else if (marcador===7){
        let medida = req.body.medida;      
        medida=parseInt(medida);   
           
        answ=ejercicio07(medida);

        res.sendFile(__dirname +"/templates/ejercicio.html");

        titulo = "Ejercicio 07"
        parrafo = "7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m)."
        html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                        .toString()
                        .replace("%titulo%", titulo)
                        .replace("%parrafo%", parrafo)                
                        .replace("%respuesta%", answ);
        res.end(html)
    }

    else if (marcador===8){
        let moneda = req.body.moneda;      
        moneda=parseInt(moneda);   
           
        answ=ejercicio08(moneda);

        res.sendFile(__dirname +"/templates/ejercicio.html");

        titulo = "Ejercicio 08"
        parrafo = "8. Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano"
        html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                        .toString()
                        .replace("%titulo%", titulo)
                        .replace("%parrafo%", parrafo)                
                        .replace("%respuesta%", answ);
        res.end(html)
    }

    else if (marcador===9){
        let fecha = req.body.fecha;      
        fecha=parseInt(fecha);   
           
        answ=ejercicio09(fecha);

        res.sendFile(__dirname +"/templates/ejercicio.html");

        titulo = "Ejercicio 09"
        parrafo = "9. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron"
        html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                        .toString()
                        .replace("%titulo%", titulo)
                        .replace("%parrafo%", parrafo)                
                        .replace("%respuesta%", answ);
        res.end(html)
    }

    else if (marcador===10){
        let name1 = req.body.name1;
        let name2 = req.body.name2;
        let name3 = req.body.name3;
        
        let edad1 = req.body.edad1;
        let edad2 = req.body.edad2;
        let edad3 = req.body.edad3;

        edad1=parseInt(edad1);
        edad2=parseInt(edad2);
        edad3=parseInt(edad3);
          
           
        answ=ejercicio10(name1, name2, name3, edad1, edad2, edad3);

        res.sendFile(__dirname +"/templates/ejercicio.html");

        titulo = "Ejercicio 10"
        parrafo = "10. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad"
        html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                        .toString()
                        .replace("%titulo%", titulo)
                        .replace("%parrafo%", parrafo)                
                        .replace("%respuesta%", answ);
        res.end(html)
    }

    else if (marcador===11){
        let tiempo1 = req.body.tiempo1;          
        tiempo1=parseInt(tiempo1);

        answ=ejercicio11(tiempo1);

        res.sendFile(__dirname +"/templates/ejercicio.html");

        titulo = "Ejercicio 11"
        parrafo = "11. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad"
        html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                        .toString()
                        .replace("%titulo%", titulo)
                        .replace("%parrafo%", parrafo)                
                        .replace("%respuesta%", answ);
        res.end(html)
    }

    else if (marcador===12){
        answ=ejercicio12();

        res.sendFile(__dirname +"/templates/ejercicio.html");

        titulo = "Ejercicio 12"
        parrafo = "12. Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado"
        html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                        .toString()
                        .replace("%titulo%", titulo)
                        .replace("%parrafo%", parrafo)                
                        .replace("%respuesta%", answ);
        res.end(html)
    }

    else if (marcador===13){

        const myObject = JSON.parse(req.body['my-array']);
        const myArray = Object.values(myObject)
        console.log(myArray)
        console.log(myArray.length)

        answ=ejercicio13(myArray);

        res.sendFile(__dirname +"/templates/ejercicio.html");

        titulo = "Ejercicio 13"
        parrafo = "13. Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados"
        html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                        .toString()
                        .replace("%titulo%", titulo)
                        .replace("%parrafo%", parrafo)                
                        .replace("%respuesta%", answ);
        res.end(html)
    }

    else if (marcador===14){

        const myObject = JSON.parse(req.body['my-array']);
        const myArray = Object.values(myObject)
        console.log(myArray)
        console.log(myArray.length)

        answ=ejercicio14(myArray);

        res.sendFile(__dirname +"/templates/ejercicio.html");

        titulo = "Ejercicio 14"
        parrafo = "14. Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos, el número de focos de cada color que hay en existencia"
        html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                        .toString()
                        .replace("%titulo%", titulo)
                        .replace("%parrafo%", parrafo)                
                        .replace("%respuesta%", answ);
        res.end(html)
    }


    else if (marcador===15){
        let edad1 = req.body.edad1;
        edad1=parseInt(edad1);
        answ=ejercicio15(edad1);

        res.sendFile(__dirname +"/templates/ejercicio.html");

        titulo = "Ejercicio 15"
        parrafo = "15. Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones"
        html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                        .toString()
                        .replace("%titulo%", titulo)
                        .replace("%parrafo%", parrafo)                
                        .replace("%respuesta%", answ);
        res.end(html)
    }

});

// inicializar el servidor puerto 5555
app.listen(5555, "127.0.0.1");
console.log('Servidor web iniciado');

//funciones solucion de ejercicios
//funcion ejercicio1
function ejercicio01(num1, num2){

    let respuesta = num1+num2;

    return respuesta;
}

//funcion ejercicio2
function ejercicio02(num1, num2, num3, num4){
    let respuesta;

    if((num1||num2||num3||num4)>20){
        respuesta="Alguno de los valores no es valido"
    }

    else{
    respuesta = "El promedio de notas es " + (num1+num2+num3+num4)/4;
    }

    return respuesta;
}

function ejercicio03(num1, num2){

    let respuesta = num1*num2;
    respuesta = "El area de este rectangulo es de "+respuesta+" cm cuadrados"

    return respuesta;
}

function ejercicio04(num1, num2){
    let respuesta;
    respuesta = (num1*num2)/2

    respuesta = "El area de este triangulo es de "+respuesta+ " cm cuadrados";
    return respuesta;
}

function ejercicio05(num1){
    let respuesta;
    respuesta = Math.PI*(num1**2);
    respuesta = "El area de esta circunferencia es de "+respuesta+" cm cuadrados";
    return respuesta;
}

function ejercicio06(num1,num2){
    let respuesta;
    respuesta = num1*num2;
    respuesta = "El sueldo que le corresponde por el tiempo trabajado es de "+respuesta+" soles";
    return respuesta;
}

function ejercicio07(num1){
    let respuesta;
    respuesta = num1*39.37;
    respuesta = "El equivalente de "+num1+" metros, es de "+respuesta+" pulgadas";
    return respuesta;
}

function ejercicio08(num1){
    let respuesta;
    const tipocambio=0.27;
    respuesta = num1*tipocambio;
    respuesta = "El equivalente de "+num1+" soles, es de aproximadamente "+respuesta+" dolares actualmente";
    return respuesta;
}

function ejercicio09(num1){
    let respuesta;    
    let year = new Date().getFullYear();
    console.log(year)
    year=parseInt(year);
    respuesta=year-num1;
    respuesta="Su edad es de "+respuesta+" años";
    return respuesta;
}

function ejercicio10(txt1, txt2, txt3, num1, num2, num3){
    let respuesta;

    if((num1<num2)&(num1<num3)){
        respuesta=txt1+" es el menor, con "+num1+" años";
        return respuesta;
    }
    else if((num2<num1)&(num2<num3)){
        respuesta=txt2+" es el menor, con "+num2+" años";
        return respuesta;
    }
    else if((num3<num1)&(num3<num2)){
        respuesta=txt3+" es el menor, con "+num3+" años";
        return respuesta;
    }
    else{
        respuesta="Hay personas con la misma edad";
        return respuesta;
    }
}

function ejercicio11(num1){
    let respuesta;

    if(num1<1){
        respuesta="Usted no califica para el bono";
        return respuesta;
    }
    else if((num1>=1)&&(num1<2)){
        respuesta="Usted califica para un bono de $100";
        return respuesta;
    }
    else if((num1>=2)&&(num1<3)){
        respuesta="Usted califica para un bono de $200";
        return respuesta;
    }
    else if((num1>=3)&&(num1<4)){
        respuesta="Usted califica para un bono de $300";
        return respuesta;
    }
    else if((num1>=4)&&(num1<5)){
        respuesta="Usted califica para un bono de $400";
        return respuesta;
    }
    else{
        respuesta="Usted califica para un bono de $1000";
        return respuesta;
    }
}

function ejercicio12(){
    let respuesta;
    let sueldo = 1500;
    const sueldoAnual=[];
    
    for (let i=0; i<6; i++){
        sueldo=sueldo*1.1;
        sueldoAnual[i]=sueldo
    }

    respuesta = "El sueldo inicial es de $1500"+
                "<br /> El sueldo el primer año es de $"+sueldoAnual[0]+
                "<br /> El sueldo el segundo año es de $"+sueldoAnual[1]+
                "<br /> El sueldo el tercer año es de $"+sueldoAnual[2]+
                "<br /> El sueldo el cuarto año es de $"+sueldoAnual[3]+
                "<br /> El sueldo el quinto año es de $"+sueldoAnual[4]+
                "<br /> El sueldo el sexto y ultimo año es de $"+sueldoAnual[5]

    return respuesta;
}

function ejercicio13(arreglo){
    const n=arreglo.length;
    let aux=0;
    let aprobados=0;
    let desaprobados=0;
    let respuesta;

    for(let i=0; i<n; i++){

        aux=parseInt(arreglo[i]);

        if(aux>=11){
            aprobados++;
        }
        else{
            desaprobados++
        }

    }

    respuesta="Se han ingresado "+n+" notas. Han aprobado "+aprobados+" y han desaprobado "+desaprobados;
    return respuesta;
}

function ejercicio14(arreglo){
    const n=arreglo.length;
    let aux=0;
    let verdes=0;
    let blancos=0;
    let rojos=0;
    let respuesta;

    for(let i=0; i<n; i++){

        aux=parseInt(arreglo[i]);

        if(aux===1){
            verdes++;
        }
        else if(aux===2){
            blancos++
        }
        else if(aux===3){
            rojos++
        }

    }

    respuesta="Se han ingresado "+n+" focos. Hay "+verdes+" verdes, "+blancos+" blancos y "+rojos+" rojos.";
    return respuesta;
}

function ejercicio15(num1){
    let respuesta;
    const proximasElecciones=2024;

    if(num1<17){
        respuesta = "No podras votar en las proximas elecciones ya que no tendras 18 antes del 2024"

        return respuesta;
    }
    else {
        respuesta = "Puedes votar en las proximas elecciones presidenciales de 2024"

        return respuesta; 
    }
}



