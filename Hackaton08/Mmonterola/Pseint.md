#  Pregunta 1 Pseint */
 /*
 Algoritmo DeterminarTresDigitos
    Escribir "Ingrese un número:"
    Leer num
    Si num >= 100 Y num <= 999 Entonces
       Escribir "El número tiene tres dígitos"
    Sino
       Escribir "El número no tiene tres dígitos"
    FinSi
 FinAlgoritmo
 */

 /*******************************************************************************************************/

  #  Pregunta 2 Pseint */
 /*
 
 Algoritmo DeterminarNegativo
    Escribir "Ingrese un número:"
    Leer num
    Si num < 0 Entonces
       Escribir "El número es negativo"
    Sino
       Escribir "El número no es negativo"
    FinSi
 FinAlgoritmo
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 3 Pseint */
 /*
 
 Algoritmo determinarCuatro
 
   // Se lee el número
   Escribir "Ingrese un número:"
   Leer num
   
   // Se determina si termina en 4
   Si num % 10 = 4 Entonces
     Escribir "El número termina en 4"
   SiNo
     Escribir "El número no termina en 4"
   FinSi
   
 FinAlgoritmo
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 4 Pseint */
 /*
 
 Algoritmo determinarMenorMayor
     Definir num1, num2, num3 como Entero
     
     Escribir "Ingrese el primer número:"
     Leer num1
     
     Escribir "Ingrese el segundo número:"
     Leer num2
     
     Escribir "Ingrese el tercer número:"
     Leer num3
     
     Si num1 < num2 Entonces
         Si num1 < num3 Entonces
             Si num2 < num3 Entonces
                 Escribir num1, ", ", num2, ", ", num3
             SiNo
                 Escribir num1, ", ", num3, ", ", num2
             FinSi
         SiNo
             Escribir num3, ", ", num1, ", ", num2
         FinSi
     SiNo
         Si num2 < num3 Entonces
             Si num1 < num3 Entonces
                 Escribir num2, ", ", num1, ", ", num3
             SiNo
                 Escribir num2, ", ", num3, ", ", num1
             FinSi
         SiNo
             Escribir num3, ", ", num2, ", ", num1
         FinSi
     FinSi
     
 FinAlgoritmo
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 5 Pseint */
 
 /*
 
 Algoritmo TiendaZapatos
 
 Definir cantidadZapatos, precioTotal, descuento Como Entero
 
 Escribir "Ingrese la cantidad de zapatos a comprar:"
 Leer cantidadZapatos
 
 precioTotal = cantidadZapatos * 80
 
 Si cantidadZapatos > 30 Entonces
    descuento = precioTotal * 0.4
 Sino Si cantidadZapatos > 20 Entonces
    descuento = precioTotal * 0.2
 Sino Si cantidadZapatos > 10 Entonces
    descuento = precioTotal * 0.1
 Sino
    descuento = 0
 Fin Si
 
 Escribir "El precio total de la compra es: ", precioTotal
 Escribir "El descuento aplicado es: ", descuento
 Escribir "El precio final a pagar es: ", precioTotal - descuento
 
 FinAlgoritmo
 
 */
 
 /*******************************************************************************************************/

  #  Pregunta 6 Pseint */
 
 /*
 
 Algoritmo SueldoSemanal
 
 Definir horasTrabajadas, sueldoBase, horasExtras, sueldoExtra, sueldoTotal Como Real
 
 Escribir "Ingrese las horas trabajadas en la semana:"
 Leer horasTrabajadas
 
 Si horasTrabajadas <= 40 Entonces
    sueldoBase = horasTrabajadas * 20
    horasExtras = 0
 Sino
    sueldoBase = 40 * 20
    horasExtras = horasTrabajadas - 40
 Fin Si
 
 sueldoExtra = horasExtras * 25
 sueldoTotal = sueldoBase + sueldoExtra
 
 Escribir "El sueldo semanal es: ", sueldoTotal
 
 FinAlgoritmo
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 7 Pseint */
 
 /*
 
 Algoritmo DescuentoPorMembresia
 
   Definir tipoMembresia, montoCompra, descuento Como Real
   
   Escribir "Ingrese el tipo de membresía (A, B o C):"
   Leer tipoMembresia
   
   Escribir "Ingrese el monto de la compra:"
   Leer montoCompra
   
   Si tipoMembresia = "A" Entonces
     descuento <- montoCompra * 0.10
     Escribir "El descuento es de: $", descuento
   SiNo Si tipoMembresia = "B" Entonces
     descuento <- montoCompra * 0.15
     Escribir "El descuento es de: $", descuento
   SiNo Si tipoMembresia = "C" Entonces
     descuento <- montoCompra * 0.20
     Escribir "El descuento es de: $", descuento
   SiNo
     Escribir "Tipo de membresía inválido"
   FinSi
 
 FinAlgoritmo
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 8 Pseint */
 
 /*
 
 Proceso CalcularPromedioYEstado
 
     Definir nota1, nota2, nota3, promedio Como Real
     Escribir "Ingrese la nota 1:"
     Leer nota1
     Escribir "Ingrese la nota 2:"
     Leer nota2
     Escribir "Ingrese la nota 3:"
     Leer nota3
     
     promedio <- (nota1 + nota2 + nota3) / 3
     
     Si promedio >= 10 Entonces
         Escribir "El estudiante aprobó con un promedio de ", promedio
     SiNo
         Escribir "El estudiante no aprobó con un promedio de ", promedio
     FinSi
 FinProceso
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 9 Pseint */
 
 /*
 
 Algoritmo AumentoTrabajador
    // Declarar variables
    Definir salario, aumento Como Real
    
    // Leer salario del trabajador
    Escribir "Ingrese el salario actual del trabajador:"
    Leer salario
    
    // Calcular aumento
    Si salario > 2000 Entonces
       aumento <- salario * 0.05
    SiNo
       aumento <- salario * 0.1
    FinSi
    
    // Mostrar resultado
    Escribir "El aumento del trabajador es de: $" + aumento
 FinAlgoritmo
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 10 Pseint */
 
 /*
 
 Proceso ParImpar
    Escribir "Ingrese un número:"
    Leer num
    Si num % 2 = 0 Entonces
       Escribir "El número es par"
    Sino
       Escribir "El número es impar"
    FinSi
 FinProceso
 
 */
 
 /*******************************************************************************************************/

  #  Pregunta 11 Pseint */
 
 /*
 
 Algoritmo MayorDeTresNumeros
    Escribir "Ingrese el primer número: "
    Leer numero1
    Escribir "Ingrese el segundo número: "
    Leer numero2
    Escribir "Ingrese el tercer número: "
    Leer numero3
    Si numero1 > numero2 Y numero1 > numero3 Entonces
       Escribir "El mayor es: ", numero1
    SiNo Si numero2 > numero3 Entonces
       Escribir "El mayor es: ", numero2
    SiNo
       Escribir "El mayor es: ", numero3
    FinSi
 FinAlgoritmo
 
 */
 
 /*******************************************************************************************************/

  #  Pregunta 12 Pseint */
 
 /*
 
 Algoritmo MayorDeTresNumeros
    Escribir "Ingrese el primer número: "
    Leer numero1
    Escribir "Ingrese el segundo número: "
    Leer numero2
    Si numero1 > numero2  Entonces
       Escribir "El mayor es: ", numero1
    SiNo
       Escribir "El mayor es: ", numero2
    FinSi
 FinAlgoritmo
 
 */
 
 /*******************************************************************************************************/

  #  Pregunta 13 Pseint */
 
 /*
 
 Proceso DeterminarVocal
     Definir letra como Caracter
     Escribir "Ingrese una letra:"
     Leer letra
     
     Si letra == "a" o letra == "e" o letra == "i" o letra == "o" o letra == "u" entonces
         Escribir "La letra ingresada es una vocal."
     SiNo
         Escribir "La letra ingresada no es una vocal."
     FinSi
     
 FinProceso
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 14 Pseint */
 
 /*
 
 Algoritmo determinarPrimo
   Definir num como Entero
   num <- ConvertirEnEntero(documento.obtenerElementoPorId("num").valor)
 
   Si num no es un número Entero Entonces
     documento.obtenerElementoPorId("resultado14").innerHTML <- "Ingrese un número válido"
   Sino Si num < 1 o num > 10 Entonces
      documento.obtenerElementoPorId("resultado14").innerHTML <- "El número ingresado está fuera del rango válido"
   Sino Si num = 1 Entonces
     documento.obtenerElementoPorId("resultado14").innerHTML <- "El número 1 no es primo"
   Sino
     Definir esPrimo como Booleano
     esPrimo <- Verdadero
     Para i <- 2 hasta num / 2 hacer
   Si num MOD i = 0 Entonces
     esPrimo <- Falso
   Romper
   Fin Si
   Fin Para
    Si esPrimo Entonces
     documento.obtenerElementoPorId("resultado14").innerHTML <- "El número ingresado es primo"
    Sino
     documento.obtenerElementoPorId("resultado14").innerHTML <- "El número ingresado no es primo"
    Fin Si
    Fin Si
 FinAlgoritmo
 
 */
 
 /*******************************************************************************************************/

  #  Pregunta 15 Pseint */
 
 /*
 
 Proceso ConvertirUnidades
     Escribir "Ingrese la cantidad de centímetros a convertir a pulgadas: "
     Leer centimetros
     pulgadas = centimetros / 2.54
     Escribir centimetros, " centímetros equivalen a ", pulgadas, " pulgadas"
     Escribir "Ingrese la cantidad de libras a convertir a kilogramos: "
     Leer libras
     kilogramos = libras / 2.2046
     Escribir libras, " libras equivalen a ", kilogramos, " kilogramos"
 FinProceso
 
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 16 Pseint */
 
 /*
 
 Proceso IndicarDia
     Escribir "Ingrese un número del 1 al 7"
     Leer num
     Segun num Hacer
         1: Escribir "Lunes"
         2: Escribir "Martes"
         3: Escribir "Miércoles"
         4: Escribir "Jueves"
         5: Escribir "Viernes"
         6: Escribir "Sábado"
         7: Escribir "Domingo"
         De Otro Modo: Escribir "Número inválido, debe ser del 1 al 7"
     Fin Segun
 FinProceso
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 17 Pseint */
 
 /*
 
 Proceso HoraEnSegundos
     Definir hora, minuto, segundo Como Entero
 
     Escribir "Ingrese la hora:"
     Leer hora
 
     Escribir "Ingrese el minuto:"
     Leer minuto
 
     Escribir "Ingrese el segundo:"
     Leer segundo
 
     segundo <- segundo + 1
 
     Si segundo = 60 Entonces
         segundo <- 0
         minuto <- minuto + 1
     Fin Si
 
     Si minuto = 60 Entonces
         minuto <- 0
         hora <- hora + 1
     Fin Si
 
     Si hora = 24 Entonces
         hora <- 0
     Fin Si
 
     Escribir "La hora dentro de un segundo es: ", hora, ":", minuto, ":", segundo
 Fin Proceso
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 18 Pseint */
 
 /*
 
 Algoritmo Venta_CD
 
 Definir cantidad, precio, ganancia Como Entero
 Definir total Como Real
 
 Escribir "Ingrese la cantidad de CD a vender:"
 Leer cantidad
 
 Si cantidad >= 1 y cantidad <= 9 Entonces
     precio <- 10
 SinoSi cantidad >= 10 y cantidad <= 99 Entonces
     precio <- 8
 SinoSi cantidad >= 100 y cantidad <= 499 Entonces
     precio <- 7
 Sino
     precio <- 6
 FinSi
 
 total <- cantidad * precio
 ganancia <- total * 0.0825
 
 Escribir "El precio total para el cliente es: ", total, " dólares"
 Escribir "La ganancia para el vendedor es: ", ganancia, " dólares"
 
 FinAlgoritmo
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 19 Pseint */
 
 /*
 
 Algoritmo PagarEmpleados
     Definir numEmpleado, diasTrabajados, salarioDiario, sueldoComoCajero, sueldoComoServidor, sueldoComoPreparador, sueldoComoMantenimiento Como Entero
     salarioComoCajero = 56
     salarioComoServidor = 64
     salarioComoPreparador = 80
     salarioComoMantenimiento = 48
     
     Escribir "Ingrese el número identificador del empleado (1-4)"
     Leer numEmpleado
     
     Escribir "Ingrese la cantidad de días trabajados en la semana (1-6)"
     Leer diasTrabajados
     
     Segun numEmpleado Hacer
         1:
             sueldoComoCajero = diasTrabajados * salarioComoCajero
             Escribir "El sueldo del cajero es: " sueldoComoCajero
         2:
             sueldoComoServidor = diasTrabajados * salarioComoServidor
             Escribir "El sueldo del servidor es: " sueldoComoServidor
         3:
             sueldoComoPreparador = diasTrabajados * salarioComoPreparador
             Escribir "El sueldo del preparador de mezclas es: " sueldoComoPreparador
         4:
             sueldoComoMantenimiento = diasTrabajados * salarioComoMantenimiento
             Escribir "El sueldo del empleado de mantenimiento es: " sueldoComoMantenimiento
         De Otro Modo:
             Escribir "El número de empleado ingresado no es válido"
     FinSegun
 FinAlgoritmo
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 20 Pseint */
 
 /*
 
 Proceso numeros_pares_mayor
     Definir num1, num2, num3, num4, pares, mayor, media, cuadrado_segundo, suma Como Entero
     Escribir "Ingrese el primer número:"
     Leer num1
     Escribir "Ingrese el segundo número:"
     Leer num2
     Escribir "Ingrese el tercer número:"
     Leer num3
     Escribir "Ingrese el cuarto número:"
     Leer num4
     pares <- 0
     mayor <- num1
     Si (num2 > mayor) Entonces
         mayor <- num2
     FinSi
     Si (num3 > mayor) Entonces
         mayor <- num3
     FinSi
     Si (num4 > mayor) Entonces
         mayor <- num4
     FinSi
     Si (num1 % 2 = 0) Entonces
         pares <- pares + 1
     FinSi
     Si (num2 % 2 = 0) Entonces
         pares <- pares + 1
     FinSi
     Si (num3 % 2 = 0) Entonces
         pares <- pares + 1
     FinSi
     Si (num4 % 2 = 0) Entonces
         pares <- pares + 1
     FinSi
     Escribir "La cantidad de números pares es:", pares
     Si (num3 % 2 = 0) Entonces
         cuadrado_segundo <- num2 * num2
         Escribir "El cuadrado del segundo número es:", cuadrado_segundo
     FinSi
     Si (num1 < num4) Entonces
         media <- (num1 + num2 + num3 + num4) / 4
         Escribir "La media de los 4 números es:", media
     FinSi
     Si (num2 > num3) Entonces
         Si (num3 >= 50 Y num3 <= 700) Entonces
             suma <- num1 + num2 + num3 + num4
             Escribir "La suma de los 4 números es:", suma
         FinSi
     FinSi
 FinProceso
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 21 Pseint */
 
 /*
 
 Proceso factorial
     Definir num, factorial Como Entero
     factorial <- 1
     Escribir "Ingrese un número entero:"
     Leer num
     Si (num >= 0) Entonces
         Si (num = 0) Entonces
             Escribir "El factorial de 0 es 1"
         Sino
             Para i <- 1 Hasta num Hacer
                 factorial <- factorial * i
             FinPara
             Escribir "El factorial de", num, "es", factorial
         FinSi
     Sino
         Escribir "El número ingresado no es válido."
     FinSi
 FinProceso
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 22 Pseint */
 
 /*
 
 Proceso suma_n_primeros_numeros
     Definir n, suma Como Entero
     Escribir "Ingrese el valor de n:"
     Leer n
     suma <- 0
     Para i <- 1 Hasta n Con Paso 1 Hacer
         suma <- suma + i
     FinPara
     Escribir "La suma de los", n, "primeros números es:", suma
 FinProceso
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 23 Pseint */
 
 /*
 
 Proceso suma_impares
     Definir n, suma Como Entero
     Escribir "Ingrese un número entero positivo:"
     Leer n
     suma <- 0
     Para i <- 1 Hasta n Con Paso 2 Hacer
         suma <- suma + i
     FinPara
     Escribir "La suma de los números impares menores o iguales a", n, "es:", suma
 FinProceso
 
 */
 
 /*******************************************************************************************************/

#  Pregunta 24 Pseint */
 
 /*
 
 Proceso SumaNumerosPares
     Definir i, suma Como Entero
     suma <- 0
     Para i <- 1 Hasta 1000 Con Paso 1 Hacer
         Si (i % 2 = 0) Entonces
             suma <- suma + i
         FinSi
     FinPara
     Escribir "La suma de todos los números pares hasta el 1000 es:", suma
 FinProceso
 
 */
 
 /*******************************************************************************************************/

 #  Pregunta 25 Pseint 
 
 /*
 
 Proceso SumaNumerosPares
     Definir i, suma Como Entero
     suma <- 0
     Para i <- 1 Hasta 1000 Con Paso 1 Hacer
         Si (i % 2 = 0) Entonces
             suma <- suma + i
         FinSi
     FinPara
     Escribir "La suma de todos los números pares hasta el 1000 es:", suma
 FinProceso
 
 */
 
 /*******************************************************************************************************/

  # Pregunta 26 Pseint 
 
 /*
 
 Algoritmo RestaSucesiva
 
     Definir dividendo, divisor, cociente, resto Como Entero
 
     Escribir "Ingrese el dividendo: "
     Leer dividendo
 
     Escribir "Ingrese el divisor: "
     Leer divisor
 
     cociente <- 0
     resto <- dividendo
 
     Mientras resto >= divisor Hacer
         resto <- resto - divisor
         cociente <- cociente + 1
     Fin Mientras
 
     Escribir "El cociente es: ", cociente
     Escribir "El resto es: ", resto
 
 FinAlgoritmo
 
 */
 
  /*******************************************************************************************************/

  # Pregunta 27 Pseint 

Definir suma como entero
Definir contador como entero
Definir numero como entero
Definir media como real

suma = 0
contador = 0

Escribir "Ingrese números positivos. Ingrese un número negativo para terminar."

Repetir
    Escribir "Ingrese un número:"
    Leer numero
    
    Si numero >= 0 Entonces
        suma = suma + numero
        contador = contador + 1
    FinSi
    
Hasta Que numero < 0

Si contador > 0 Entonces
    media = suma / contador
    Escribir "La media de los números ingresados es: ", media
Sino
    Escribir "No se ingresaron números positivos."
FinSi




  /*******************************************************************************************************/

  # Pregunta 28 Pseint 

  Algoritmo SumaPrimerosCienNumerosConRepetir
    Definir suma como entero;
    Definir contador como entero;
    suma = 0;
    contador = 1;
    Repetir
        suma = suma + contador;
        contador = contador + 1;
    Hasta que contador > 100;
    Escribir "La suma de los primeros cien números es ", suma;
FinAlgoritmo

  /*******************************************************************************************************/

  # Pregunta 29 Pseint 

  Algoritmo SumaPrimerosCienNumerosConMientras
    Definir suma como entero;
    Definir contador como entero;
    suma = 0;
    contador = 1;
    Mientras contador <= 100 Hacer
        suma = suma + contador;
        contador = contador + 1;
    FinMientras
    Escribir "La suma de los primeros cien números es ", suma;
FinAlgoritmo


  /*******************************************************************************************************/

  # Pregunta 30 Pseint 

  Algoritmo SumaPrimerosCienNumerosConPara
    Definir suma como entero;
    suma = 0;
    Para contador = 1 hasta 100 hacer
        suma = suma + contador;
    FinPara
    Escribir "La suma de los primeros cien números es ", suma;
FinAlgoritmo


  /*******************************************************************************************************/

  # Pregunta 31 Pseint 

  Algoritmo MediaParesEImpares
    Definir sumaPares, sumaImpares, contadorPares, contadorImpares, numero como enteros;
    sumaPares = 0;
    sumaImpares = 0;
    contadorPares = 0;
    contadorImpares = 0;
    
    Para i = 1 hasta 10 hacer
        Escribir "Ingrese el número ", i, ": ";
        Leer numero;
        
        Si numero MOD 2 = 0 Entonces
            sumaPares = sumaPares + numero;
            contadorPares = contadorPares + 1;
        Sino
            sumaImpares = sumaImpares + numero;
            contadorImpares = contadorImpares + 1;
        FinSi
    FinPara
    
    Si contadorPares > 0 Entonces
        mediaPares = sumaPares / contadorPares;
        Escribir "La media de los números pares ingresados es ", mediaPares;
    FinSi
    
    Si contadorImpares > 0 Entonces
        mediaImpares = sumaImpares / contadorImpares;
        Escribir "La media de los números impares ingresados es ", mediaImpares;
    FinSi
FinAlgoritmo

  /*******************************************************************************************************/

  # Pregunta 32 Pseint 

Definir poblacion como matriz de tres filas y once columnas de números enteros

Definir maxPoblacion como un número entero igual a cero

Definir ciudadMaxPoblacion como una cadena de caracteres vacía

Para cada provincia desde 0 hasta 2 hacer:
Para cada ciudad desde 0 hasta 10 hacer:
Mostrar mensaje "Ingrese la población de la ciudad [ciudad + 1] de la provincia [provincia + 1]:"
Leer y guardar en poblacion[provincia][ciudad] un número entero ingresado por el usuario
Si poblacion[provincia][ciudad] es mayor que maxPoblacion entonces:
maxPoblacion = poblacion[provincia][ciudad]
ciudadMaxPoblacion = "Ciudad [ciudad + 1] de la provincia [provincia + 1]"
Fin Para
Fin Para

Mostrar mensaje "La ciudad con la mayor población es: [ciudadMaxPoblacion]"

Fin del algoritmo.

  /*******************************************************************************************************/
   # Pregunta 33 Pseint 

Definir continuar Como Caracter
continuar = "S"

Mientras continuar = "S" Hacer
   Escribir "El programa sigue ejecutándose"
   Escribir "¿Desea continuar? (S/N)"
   Leer continuar
FinMientras

Escribir "Fin del programa"

  /*******************************************************************************************************/

  # Pregunta 34 Pseint 

Algoritmo TablaDeMultiplicar
   Para i = 1 Hasta 9 Con Paso 1 Hacer
      Escribir("Tabla de multiplicar del número ", i)
      Para j = 1 Hasta 10 Con Paso 1 Hacer
         Escribir(i, " x ", j, " = ", i*j)
      FinPara
      Escribir()
   FinPara
FinAlgoritmo


  /*******************************************************************************************************/

  # Pregunta 35 Pseint 

  Algoritmo Mayor_Menor

Definir numeros[20] como arreglo de enteros
Definir mayor como entero
Definir menor como entero

Para i desde 0 hasta 19 hacer
    Escribir "Ingrese un número:"
    Leer numeros[i]
FinPara

mayor = numeros[0]
menor = numeros[0]

Para i desde 1 hasta 19 hacer
    Si numeros[i] > mayor entonces
        mayor = numeros[i]
    FinSi
    Si numeros[i] < menor entonces
        menor = numeros[i]
    FinSi
FinPara

Escribir "El número mayor es: ", mayor
Escribir "El número menor es: ", menor

FinAlgoritmo

  /*******************************************************************************************************/

  # Pregunta 36 Pseint 

  Algoritmo Fibonacci
   Escribir "Ingrese la cantidad de términos que desea mostrar:"
   Leer cantidad
   Si cantidad > 0 Entonces
      Escribir "Serie de Fibonacci:"
      a <- 0
      b <- 1
      Escribir a
      Escribir b
      Para i <- 3 hasta cantidad hacer
         c <- a + b
         Escribir c
         a <- b
         b <- c
      FinPara
   Sino
      Escribir "La cantidad ingresada es inválida"
   FinSi
FinAlgoritmo


  /*******************************************************************************************************/

  # Pregunta 37 Pseint 

  Proceso MCD_Euclides
    Definir num1, num2, resto Como Entero
    
    Escribir "Ingrese el primer número:"
    Leer num1
    
    Escribir "Ingrese el segundo número:"
    Leer num2
    
    // Algoritmo de Euclides
    Mientras num2 <> 0 Hacer
        resto <- num1 MOD num2
        num1 <- num2
        num2 <- resto
    FinMientras
    
    Escribir "El M.C.D. es: ", num1
    
FinProceso

  /*******************************************************************************************************/

  # Pregunta 38 Pseint 

  Algoritmo NumeroPerfecto
    Definir n, sum Como Entero;
    Escribir "Ingrese un número: ";
    Leer n;
    sum <- 0;
    Para i <- 1 Hasta n/2 Con Paso 1 Hacer
        Si n Mod i = 0 Entonces
            sum <- sum + i;
        FinSi
    FinPara
    Si sum = n Entonces
        Escribir "El número ", n, " es un número perfecto.";
    SiNo
        Escribir "El número ", n, " no es un número perfecto.";
    FinSi
FinAlgoritmo

  /*******************************************************************************************************/

  # Pregunta 39 Pseint 

Inicio
// Pedir al usuario la cantidad de términos a sumar
Escribir "Ingrese la cantidad de términos a sumar:"
Leer n

// Inicializar la variable pi en cero
pi <- 0

// Iterar n veces para calcular los términos y sumarlos a pi
Para i <- 0 hasta n-1 Con paso 1 Hacer
// Calcular el término correspondiente
termino <- 4 / (2 * i + 1)
Fin Para

// Mostrar el valor aproximado de pi
Escribir pi
FinAlgoritmo

  
  /*******************************************************************************************************/

  # Pregunta 40 Pseint 

Algoritmo SerieNilakantha
    Definir pi, n, termino como Real;
    Definir signo como Entero;
    pi <- 3;
    signo <- 1;
    n <- 2;
    Escribir("Ingrese la cantidad de términos a sumar:");
    Leer(cantidad);

    Para i <- 1 Hasta cantidad Hacer
        termino <- 4 / (n * (n + 1) * (n + 2));
        pi <- pi + (signo * termino);
        n <- n + 2;
        signo <- signo * -1;
    FinPara

    Escribir("La aproximación de pi con la serie de Nilakantha es: ", pi);
FinAlgoritmo


  
  




