<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Source code generated using layoutit.com">
        <meta name="author" content="LayoutIt!">

        <title>Hackaton 09</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    </head>

    <body class="container-fluid">
        <div class="container-fluid">
            <div class="row pt-4">
                <div class="col-md-12">
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h1 class="text-primary">
                                %titulo%
                            </h1>
                            <h3 class="font-weight-normal">
                                %descripcion%
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row pb-5">
                <div class="col-md-12">
                    <div class="accordion" id="accordionExample">

                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Ejercicio 1
                                    </button>
                                </h2>
                            </div>
                        
                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <h4>
                                        Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla:
                                    </h4>

                                    <form action="/ejercicio/1" method="get" class="py-3">
                                        <div class="form-group">
                                            <label for="num1Ejer1">Ingrese el primer número:</label>
                                            <input type="text" class="form-control" id="num1Ejer1" name="num1Ejer1" required pattern="^-?\d*\.?\d+$" title="Solo puedes ingresar numeros">
                                        </div>
                                        <div class="form-group">
                                            <label for="num2Ejer1">Ingrese el segundo número:</label>
                                            <input type="text" class="form-control" id="num2Ejer1" name="num2Ejer1" required pattern="^-?\d*\.?\d+$" title="Solo puedes ingresar numeros">
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Calcular
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Ejercicio 2
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    <h4>
                                        Un estudiante realiza 4 exámenes, calcular el promedio de estos:
                                    </h4>

                                    <form action="/ejercicio/2" method="get" class="py-3">
                                        <div class="form-group">
                                            <label for="nota1Ejer2">Ingrese la primera nota:</label>
                                            <input type="text" class="form-control" id="nota1Ejer2" name="nota1Ejer2" required pattern="[0-9]+([,\.][0-9]+)?" title="Solo puedes ingresar numeros positivos o cero">
                                        </div>
                                        <div class="form-group">
                                            <label for="nota2Ejer2">Ingrese la segunda nota:</label>
                                            <input type="text" class="form-control" id="nota2Ejer2" name="nota2Ejer2" required pattern="[0-9]+([,\.][0-9]+)?" title="Solo puedes ingresar numeros positivos o cero">
                                        </div>
                                        <div class="form-group">
                                            <label for="nota3Ejer2">Ingrese la tercera nota:</label>
                                            <input type="text" class="form-control" id="nota3Ejer2" name="nota3Ejer2" required pattern="[0-9]+([,\.][0-9]+)?" title="Solo puedes ingresar numeros positivos o cero">
                                        </div>
                                        <div class="form-group">
                                            <label for="nota4Ejer2">Ingrese la cuarta nota:</label>
                                            <input type="text" class="form-control" id="nota4Ejer2" name="nota4Ejer2" required pattern="[0-9]+([,\.][0-9]+)?" title="Solo puedes ingresar numeros positivos o cero">
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Calcular
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                          <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Ejercicio 3
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                    <h4>
                                        Calcular el área de un rectángulo:
                                    </h4>

                                    <form action="/ejercicio/3" method="get" class="py-3">
                                        <div class="form-group">
                                            <label for="valor1Ejer3">Ingrese la medida de la base del rectángulo:</label>
                                            <input type="text" class="form-control" id="valor1Ejer3" name="valor1Ejer3" required pattern="[0-9]+([,\.][0-9]+)?" title="Solo puedes ingresar numeros">
                                        </div>
                                        <div class="form-group">
                                            <label for="valor2Ejer3">Ingrese la medida de la altura del rectángulo:</label>
                                            <input type="text" class="form-control" id="valor2Ejer3" name="valor2Ejer3" required pattern="[0-9]+([,\.][0-9]+)?" title="Solo puedes ingresar numeros">
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Calcular
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingFour">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Ejercicio 4
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <div class="card-body">
                                    <h4>
                                        Calcular el área de un triángulo:
                                    </h4>

                                    <form action="/ejercicio/4" method="get" class="py-3">
                                        <div class="form-group">
                                            <label for="valor1Ejer4">Ingrese la medida de la base del triángulo:</label>
                                            <input type="text" class="form-control" id="valor1Ejer4" name="valor1Ejer4" required pattern="[0-9]+([,\.][0-9]+)?" title="Solo puedes ingresar numeros">
                                        </div>
                                        <div class="form-group">
                                            <label for="valor2Ejer4">Ingrese la medida de la altura del triángulo:</label>
                                            <input type="text" class="form-control" id="valor2Ejer4" name="valor2Ejer4" required pattern="[0-9]+([,\.][0-9]+)?" title="Solo puedes ingresar numeros">
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Calcular
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingFive">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Ejercicio 5
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <div class="card-body">
                                    <h4>
                                        Calcular el área de una circunferencia:
                                    </h4>

                                    <form action="/ejercicio/5" method="get" class="py-3">
                                        <div class="form-group">
                                            <label for="radioEjer5">Ingrese el radio de la circunferencia:</label>
                                            <input type="text" class="form-control" id="radioEjer5" name="radioEjer5" required pattern="[0-9]+([,\.][0-9]+)?" title="Solo puedes ingresar numeros">
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Calcular
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingSix">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        Ejercicio 6
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                <div class="card-body">
                                    <h4>
                                        Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre:
                                    </h4>

                                    <form action="/ejercicio/6" method="get" class="py-3">
                                        <div class="form-group">
                                            <label for="valor1Ejer6">Ingrese las horas trabajadas:</label>
                                            <input type="text" class="form-control" id="valor1Ejer6" name="valor1Ejer6" required pattern="^[0-9]*$" title="Solo puedes ingresar numeros">
                                        </div>
                                        <div class="form-group">
                                            <label for="valor2Ejer6">Ingrese el salario:</label>
                                            <input type="text" class="form-control" id="valor2Ejer6" name="valor2Ejer6" required pattern="[0-9]+([,\.][0-9]+)?" title="Solo puedes ingresar numeros">
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Calcular
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingSeven">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        Ejercicio 7
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                <div class="card-body">
                                    <h4>
                                        Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m):
                                    </h4>

                                    <form action="/ejercicio/7" method="get" class="py-3">
                                        <div class="form-group">
                                            <label for="valor1Ejer7">Ingrese la medida en metros:</label>
                                            <input type="text" class="form-control" id="valor1Ejer7" name="valor1Ejer7" required pattern="[0-9]+([,\.][0-9]+)?" title="Solo puedes ingresar numeros">
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Calcular
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingEight">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        Ejercicio 8
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                                <div class="card-body">
                                    <h4>
                                        Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano:
                                    </h4>

                                    <form action="/ejercicio/8" method="get" class="py-3">
                                        <div class="form-group">
                                            <label for="valor1Ejer8">Ingrese la cantidad en soles:</label>
                                            <input type="text" class="form-control" id="valor1Ejer8" name="valor1Ejer8" required pattern="[0-9]+([.,][0-9]{1,2})?" title="Ingrese un número entero o decimal con máximo dos decimales">
                                        </div>
                                        <div class="form-group">
                                            <label for="valor2Ejer8">Ingrese la tasa de cambio:</label>
                                            <input type="text" class="form-control" id="valor2Ejer8" name="valor2Ejer8" required pattern="[0-9]+([.,][0-9]{1,2})?" title="Ingrese un número entero o decimal con máximo dos decimales">
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Calcular
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingNine">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        Ejercicio 9
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                                <div class="card-body">
                                    <h4>
                                        Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron:
                                    </h4>

                                    <form action="/ejercicio/9" method="get" class="py-3">
                                        <div class="form-group">
                                            <label for="valor1Ejer9">Ingrese su año de nacimiento:</label>
                                            <input type="text" class="form-control" id="valor1Ejer9" name="valor1Ejer9" required pattern="[0-9]{4}" required title="Ingrese un número entero de cuatro dígitos">
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Calcular
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingTen">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                        Ejercicio 10
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordionExample">
                                <div class="card-body">
                                    <h4>
                                        Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad:
                                    </h4>

                                    <form action="/ejercicio/10" method="get" class="py-3">
                                        <div class="form-group">
                                            <label for="valor1Ejer10">Ingrese el nombre de la primera persona:</label>
                                            <input type="text" class="form-control" id="valor1Ejer10" name="valor1Ejer10" required pattern="[A-Za-z]+" required title="Ingrese solo letras, tanto mayúsculas como minúsculas">
                                        </div>
                                        <div class="form-group">
                                            <label for="valor2Ejer10">Ingrese la edad de la primera persona:</label>
                                            <input type="text" class="form-control" id="valor2Ejer10" name="valor2Ejer10" required pattern="^[0-9]*$" required title="Ingrese solo números enteros positivos o cero">
                                        </div>
                                        <div class="form-group">
                                            <label for="valor3Ejer10">Ingrese el nombre de la segunda persona:</label>
                                            <input type="text" class="form-control" id="valor3Ejer10" name="valor3Ejer10" required pattern="[A-Za-z]+" required title="Ingrese solo letras, tanto mayúsculas como minúsculas">
                                        </div>
                                        <div class="form-group">
                                            <label for="valor4Ejer10">Ingrese la edad de la segunda persona:</label>
                                            <input type="text" class="form-control" id="valor4Ejer10" name="valor4Ejer10" required pattern="^[0-9]*$" required title="Ingrese solo números enteros positivos o cero">
                                        </div>
                                        <div class="form-group">
                                            <label for="valor5Ejer10">Ingrese el nombre de la tercera persona:</label>
                                            <input type="text" class="form-control" id="valor5Ejer10" name="valor5Ejer10" required pattern="[A-Za-z]+" required title="Ingrese solo letras, tanto mayúsculas como minúsculas">
                                        </div>
                                        <div class="form-group">
                                            <label for="valor6Ejer10">Ingrese la edad de la tercera persona:</label>
                                            <input type="text" class="form-control" id="valor6Ejer10" name="valor6Ejer10" required pattern="^[0-9]*$" required title="Ingrese solo números enteros positivos o cero">
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Calcular
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingEleven">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                        Ejercicio 11
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordionExample">
                                <div class="card-body">
                                    <h4>
                                        Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador:
                                    </h4>

                                    <form action="/ejercicio/11" method="get" class="py-3">
                                        <div class="form-group">
                                            <label for="valor1Ejer11">Ingrese el año de antigüedad:</label>
                                            <input type="text" class="form-control" id="valor1Ejer11" name="valor1Ejer11" required pattern="^[0-9]*$" required title="Ingrese solo números enteros positivos o cero">
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Calcular
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingTwelve">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                        Ejercicio 12
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwelve" class="collapse" aria-labelledby="headingTwelve" data-parent="#accordionExample">
                                <div class="card-body">
                                    <h4>
                                        Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10% anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado:
                                    </h4>

                                    <form action="/ejercicio/12" method="get" class="py-3">
                                        <button type="submit" class="btn btn-primary">
                                            Calcular
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingThirteen">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                        Ejercicio 13
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThirteen" class="collapse" aria-labelledby="headingThirteen" data-parent="#accordionExample">
                                <div class="card-body">
                                    <h4>
                                        Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados:
                                    </h4>

                                    <form action="/ejercicio/13" method="get" class="py-3">
                                        <div class="form-group">
                                            <label for="valor1Ejer13">Ingrese la cantidad de alumnos:</label>
                                            <input type="text" class="form-control" id="valor1Ejer13" name="valor1Ejer13" required pattern="[0-9]+" required title="Ingrese solo números enteros">
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Calcular
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingFourteen">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                                        Ejercicio 14
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseFourteen" class="collapse" aria-labelledby="headingFourteen" data-parent="#accordionExample">
                                <div class="card-body">
                                    <h4>
                                        Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos, el número de focos de cada color que hay en existencia:
                                    </h4>

                                    <form action="/ejercicio/14" method="get" class="py-3">
                                        <div class="form-group">
                                            <label for="valor1Ejer14">Ingrese la cantidad de focos:</label>
                                            <input type="text" class="form-control" id="valor1Ejer14" name="valor1Ejer14" required pattern="[0-9]+" required title="Ingrese solo números enteros">
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Calcular
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingFifteen">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                                        Ejercicio 15
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseFifteen" class="collapse" aria-labelledby="headingFifteen" data-parent="#accordionExample">
                                <div class="card-body">
                                    <h4>
                                        Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones:
                                    </h4>

                                    <form action="/ejercicio/15" method="get" class="py-3">
                                        <div class="form-group">
                                            <label for="valor1Ejer15">Ingrese su edad:</label>
                                            <input type="text" class="form-control" id="valor1Ejer15" name="valor1Ejer15" required pattern="^[0-9]*$" required title="Ingrese solo números enteros">
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Calcular
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <script
            src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" 
            crossorigin="anonymous">
        </script>
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" 
            crossorigin="anonymous">
        </script>
    </body>
</html>