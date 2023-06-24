/* Pregunta 1 */
function determinarTresDigitos() {
   let num1 = document.getElementById("numero1").value;
   if (num1 >= 100 && num1 <= 999) {
      document.getElementById("resultado1").innerHTML = "El número tiene tres dígitos";
   } else if (num1 > 0 && num1 < 100) {
      document.getElementById("resultado1").innerHTML = "El número no tiene tres dígitos";
   } else {
      document.getElementById("resultado1").innerHTML = "No ha ingresado un número válido";
   }
}


/*******************************************************************************************************/

/* Pregunta 2 */
function determinarNegativo() {
   let num2 = document.getElementById("numero2").value;
   if (num2 < 0) {
      document.getElementById("resultado2").innerHTML = "El número es negativo";
   } else if (num2 > 0) {
      document.getElementById("resultado2").innerHTML = "El número no es negativo";
   } else {
      document.getElementById("resultado2").innerHTML = "No ha ingresado un número válido";
   }
}

/*******************************************************************************************************/

/* Pregunta 3 */
function determinarCuatro() {
   let num3 = document.getElementById("numero3").value;
   if (num3 % 10 === 4) {
      document.getElementById("resultado3").innerHTML = "El número termina en 4";
   } else if (num3 > 0 && num3 % 10 != 4) {
      document.getElementById("resultado3").innerHTML = "El número no termina en 4";
   } else {
      document.getElementById("resultado3").innerHTML = "No ha ingresado un número válido";
   }
}

/*******************************************************************************************************/

/* Pregunta 4 */
function determinarMenorMayor() {

   let num1 = parseInt(document.getElementById("num1").value);
   let num2 = parseInt(document.getElementById("num2").value);
   let num3 = parseInt(document.getElementById("num3").value);

   if (num1 < num2) {
      if (num1 < num3) {
         if (num2 < num3) {
            document.getElementById("resultado4").innerHTML = (num1 + ", " + num2 + ", " + num3);
         } else {
            document.getElementById("resultado4").innerHTML = (num1 + ", " + num3 + ", " + num2);
         }
      } else {
         document.getElementById("resultado4").innerHTML = (num3 + ", " + num1 + ", " + num2);
      }
   } else {
      if (num2 < num3) {
         if (num1 < num3) {
            document.getElementById("resultado4").innerHTML = (num2 + ", " + num1 + ", " + num3);
         } else {
            document.getElementById("resultado4").innerHTML = (num2 + ", " + num3 + ", " + num1);
         }
      } else {
         document.getElementById("resultado4").innerHTML = (num3 + ", " + num2 + ", " + num1);
      }
   }
}

/*******************************************************************************************************/

/* Pregunta 5 */
function TiendaZapatos() {

   let cantidadZapatos = document.getElementById("numero7").value;
   let precioTotal = cantidadZapatos * 80;
   let descuento = 0;

   if (cantidadZapatos > 30) {
      descuento = precioTotal * 0.4;
   } else if (cantidadZapatos > 20) {
      descuento = precioTotal * 0.2;
   } else if (cantidadZapatos > 10) {
      descuento = precioTotal * 0.1;
   }

   let precioFinal = precioTotal - descuento;

   document.getElementById("resultado51").innerHTML = "El precio total de la compra es: $ " + precioTotal;
   document.getElementById("resultado52").innerHTML = "El descuento aplicado es: $ " + descuento;
   document.getElementById("resultado53").innerHTML = "El precio final a pagar es: $" + precioFinal;


}

/*******************************************************************************************************/

/* Pregunta 6 */
function SueldoSemanal() {

   let horasTrabajadas = document.getElementById("numero8").value;

   let sueldoBase, horasExtras, sueldoExtra, sueldoTotal;

   if (horasTrabajadas <= 40) {
      sueldoBase = horasTrabajadas * 20;
      horasExtras = 0;
   } else {
      sueldoBase = 40 * 20;
      horasExtras = horasTrabajadas - 40;
   }

   sueldoExtra = horasExtras * 25;
   sueldoTotal = sueldoBase + sueldoExtra;

   document.getElementById("resultado6").innerHTML = "El sueldo semanal es: $" + sueldoTotal;

}

/*******************************************************************************************************/

/* Pregunta 7 */

function DescuentoPorMembresia() {

   let tipoMembresia = document.getElementById("Letra").value;
   let montoCompra = document.getElementById("numero9").value;
   let descuento;


   if (tipoMembresia == "A") {
      descuento = montoCompra * 0.10;
      document.getElementById("resultado7").innerHTML = "El descuento es de: $" + descuento;
   } else if (tipoMembresia == "B") {
      descuento = montoCompra * 0.15;
      document.getElementById("resultado7").innerHTML = "El descuento es de: $" + descuento;
   } else if (tipoMembresia == "C") {
      descuento = montoCompra * 0.20;
      document.getElementById("resultado7").innerHTML = "El descuento es de: $" + descuento;
   } else if (tipoMembresia != "A" && tipoMembresia != "B" && tipoMembresia != "C") {
      document.getElementById("resultado7").innerHTML = "Tipo de membresía inválido";
   }

}

/*******************************************************************************************************/

/* Pregunta 8 */

function calcularPromedioYEstado() {
   let nota1 = parseInt(document.getElementById("nota1").value, 10);
   let nota2 = parseInt(document.getElementById("nota2").value, 10);
   let nota3 = parseInt(document.getElementById("nota3").value, 10);
   let promedio = (nota1 + nota2 + nota3) / 3;

   if (promedio >= 10.5) {
      document.getElementById("resultado8").innerHTML = "El promedio es: " + promedio.toFixed(2) + ". Estado: Aprobado.";
   } else {
      document.getElementById("resultado8").innerHTML = "El promedio es: " + promedio.toFixed(2) + ". Estado: Reprobado.";
   }
}

/*******************************************************************************************************/

/* Pregunta 9 */

function AumentoTrabajador() {
   let salario = parseFloat(document.getElementById("numero10").value);
   let aumento;

   if (salario > 2000) {
      aumento = salario * 0.05;
   } else {
      aumento = salario * 0.1;
   }

   document.getElementById("resultado9").innerHTML = "El aumento del trabajador es de: $" + aumento.toFixed(2);
}

/*******************************************************************************************************/

/* Pregunta 10 */

function ParImpar() {
   let num = parseFloat(document.getElementById("numero11").value);
   if (num % 2 == 0) {
      document.getElementById("resultado10").innerHTML = "El número es par";
   } else {
      document.getElementById("resultado10").innerHTML = "El número es impar";
   }
}

/*******************************************************************************************************/

/* Pregunta 11 */

function MayorDeTresNumeros() {
   let numero1 = parseFloat(document.getElementById("num1").value);
   let numero2 = parseFloat(document.getElementById("num2").value);
   let numero3 = parseFloat(document.getElementById("num3").value);

   if (numero1 > numero2 && numero1 > numero3) {
      document.getElementById("resultado11").innerHTML = "El mayor es: " + numero1;
   } else if (numero2 > numero3) {
      document.getElementById("resultado11").innerHTML = "El mayor es: " + numero2;
   } else {
      document.getElementById("resultado11").innerHTML = "El mayor es: " + numero3;
   }
}

/*******************************************************************************************************/

/* Pregunta 12 */

function MayorDeDosNumeros() {
   let numero1 = parseFloat(document.getElementById("num1").value);
   let numero2 = parseFloat(document.getElementById("num2").value);


   if (numero1 > numero2) {
      document.getElementById("resultado12").innerHTML = "El mayor es: " + numero1;
   } else {
      document.getElementById("resultado12").innerHTML = "El mayor es: " + numero2;
   }
}

/*******************************************************************************************************/

/* Pregunta 13 */

function DeterminarVocal() {
   let letra = document.getElementById("Letra1").value;

   if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
      document.getElementById("resultado13").innerHTML = "La letra ingresada es una vocal";
   } else {
      document.getElementById("resultado13").innerHTML = "La letra ingresada no es una vocal";
   }
}

/*******************************************************************************************************/

/* Pregunta 14 */

function determinarPrimo() {
   let num = parseInt(document.getElementById("num").value);

   if (isNaN(num)) {
      document.getElementById("resultado14").innerHTML = "Ingrese un número válido";
   } else if (num < 1 || num > 10) {
      document.getElementById("resultado14").innerHTML = "El número ingresado está fuera del rango válido";
   } else if (num == 1) {
      document.getElementById("resultado14").innerHTML = "El número 1 no es primo";
   } else {
      let esPrimo = true;
      for (let i = 2; i <= num / 2; i++) {
         if (num % i == 0) {
            esPrimo = false;
            break;
         }
      }
      if (esPrimo) {
         document.getElementById("resultado14").innerHTML = "El número ingresado es primo";
      } else {
         document.getElementById("resultado14").innerHTML = "El número ingresado no es primo";
      }
   }
}

/*******************************************************************************************************/

/* Pregunta 15 */

function convertirPulgadas() {
   let centimetros = parseInt(document.getElementById("pulga").value);
   let pulgadas = centimetros / 2.54;
   document.getElementById("resultado15").innerHTML = centimetros + " centímetros equivalen a " + pulgadas.toFixed(2) + " pulgadas";

}

function convertirKilogramos() {
   let libras = parseInt(document.getElementById("kilo").value);
   let kilogramos = libras / 2.2046;
   document.getElementById("resultado16").innerHTML = libras + " libras equivalen a " + kilogramos.toFixed(2) + " kilogramos";
}

/*******************************************************************************************************/

/* Pregunta 16 */

function indicarDia() {
   let num = parseInt(document.getElementById("nu").value);
   switch (num) {
      case 1:
         document.getElementById("resultado17").innerHTML = ("Lunes");
         break;
      case 2:
         document.getElementById("resultado17").innerHTML = ("Martes");
         break;
      case 3:
         document.getElementById("resultado17").innerHTML = ("Miércoles");
         break;
      case 4:
         document.getElementById("resultado17").innerHTML = ("Jueves");
         break;
      case 5:
         document.getElementById("resultado17").innerHTML = ("Viernes");
         break;
      case 6:
         document.getElementById("resultado17").innerHTML = ("Sábado");
         break;
      case 7:
         document.getElementById("resultado17").innerHTML = ("Domingo");
         break;
      default:
         document.getElementById("resultado17").innerHTML = ("Número inválido, debe ser del 1 al 7");
   }
}

/*******************************************************************************************************/

/* Pregunta 17 */

function horaEnSegundos() {
   let hora = parseInt(document.getElementById("Ingrese la hora").value);
   let minuto = parseInt(document.getElementById("Ingrese el minuto").value);
   let segundo = parseInt(document.getElementById("Ingrese el segundo").value);

   segundo++;

   if (segundo == 60) {
      segundo = 0;
      minuto++;
   }

   if (minuto == 60) {
      minuto = 0;
      hora++;
   }

   if (hora == 24) {
      hora = 0;
   }

   document.getElementById("resultado18").innerHTML = ("La hora dentro de un segundo es: " + hora + ":" + minuto + ":" + segundo);
}

/*******************************************************************************************************/

/* Pregunta 18 */

function venderCD() {
   let cantidad = parseInt(document.getElementById("Ingrese la cantidad de CD a vender").value);
   let precio, ganancia, total;

   if (cantidad >= 1 && cantidad <= 9) {
      precio = 10;
   } else if (cantidad >= 10 && cantidad <= 99) {
      precio = 8;
   } else if (cantidad >= 100 && cantidad <= 499) {
      precio = 7;
   } else {
      precio = 6;
   }

   total = cantidad * precio;
   ganancia = total * 0.0825;

   document.getElementById("resultado19").innerHTML = ("El precio total para el cliente es: " + total + " dólares");
   document.getElementById("resultado19").innerHTML = ("La ganancia para el vendedor es: " + ganancia + " dólares");
}

/*******************************************************************************************************/

/* Pregunta 19 */

function PagarEmpleados() {
   let salarioComoCajero = 56;
   let salarioComoServidor = 64;
   let salarioComoPreparador = 80;
   let salarioComoMantenimiento = 48;

   let numEmpleado = parseInt(document.getElementById("Ingrese el número identificador del empleado").value);
   let diasTrabajados = parseInt(document.getElementById("Ingrese la cantidad de días trabajados en la semana").value);

   switch (parseInt(numEmpleado)) {
      case 11:
         let sueldoComoCajero = diasTrabajados * salarioComoCajero;
         document.getElementById("resultado20").innerHTML = ("El sueldo del cajero es: " + sueldoComoCajero);
         break;
      case 12:
         let sueldoComoServidor = diasTrabajados * salarioComoServidor;
         document.getElementById("resultado20").innerHTML = ("El sueldo del servidor es: " + sueldoComoServidor);
         break;
      case 13:
         let sueldoComoPreparador = diasTrabajados * salarioComoPreparador;
         document.getElementById("resultado20").innerHTML = ("El sueldo del preparador de mezclas es: " + sueldoComoPreparador);
         break;
      case 14:
         let sueldoComoMantenimiento = diasTrabajados * salarioComoMantenimiento;
         document.getElementById("resultado20").innerHTML = ("El sueldo del empleado de mantenimiento es: " + sueldoComoMantenimiento);
         break;
      default:
         document.getElementById("resultado20").innerHTML = ("El número de empleado ingresado no es válido");
         break;
   }

}

/*******************************************************************************************************/

/* Pregunta 20 */

function numeros_pares_mayor() {
   let num1 = parseInt(document.getElementById("Ingrese el primer número").value);
   let num2 = parseInt(document.getElementById("Ingrese el segundo número").value);
   let num3 = parseInt(document.getElementById("Ingrese el tercer número").value);
   let num4 = parseInt(document.getElementById("Ingrese el cuarto número").value);

   let pares = 0;
   let mayor = num1;
   if (num2 > mayor) {
      mayor = num2;
   }
   if (num3 > mayor) {
      mayor = num3;
   }
   if (num4 > mayor) {
      mayor = num4;
   }
   if (num1 % 2 == 0) {
      pares++;
   }
   if (num2 % 2 == 0) {
      pares++;
   }
   if (num3 % 2 == 0) {
      pares++;
   }
   if (num4 % 2 == 0) {
      pares++;
   }
   document.getElementById("resultado21").innerHTML = ("La cantidad de números pares es: " + pares);
   if (num3 % 2 == 0) {
      let cuadrado_segundo = num2 * num2;
      document.getElementById("resultado22").innerHTML = ("El cuadrado del segundo número es: " + cuadrado_segundo);
   }
   if (num1 < num4) {
      media = (num1 + num2 + num3 + num4) / 4;
      document.getElementById("resultado23").innerHTML = ("La media de los 4 números es: " + media);
   }

   if (num2 > num3) {
      if (num3 >= 50 && num3 <= 700) {
         suma = num1 + num2 + num3 + num4;
         document.getElementById("resultado24").innerHTML = ("La suma de los 4 números es: " + suma);
      }

   }
}

/*******************************************************************************************************/

/* Pregunta 21 */

function facto() {
   let num = parseInt(document.getElementById("Ingrese un número entero").value);
   let factorial = 1;

   if (num >= 0) {
      if (num === 0) {
         document.getElementById("resultado25").innerHTML = ("El factorial de 0 es 1");
      } else {
         for (let i = 1; i <= num; i++) {
            factorial *= i;
         }
         document.getElementById("resultado25").innerHTML = ("El factorial de " + num + " es " + factorial);
      }
   } else {
      document.getElementById("resultado25").innerHTML = ("El número ingresado no es válido.");
   }

}

/*******************************************************************************************************/

/* Pregunta 22 */

function suma_n_primeros_numeros() {

   let n = parseInt(document.getElementById("Ingrese el valor de n").value);
   let suma = 0;
   for (let i = 1; i <= n; i++) {
      suma += i;
   }
   document.getElementById("resultado26").innerHTML = (`La suma de los ${n} primeros números es: ${suma}`);

}

/*******************************************************************************************************/

/* Pregunta 23 */

function suma_impares() {

   let n = parseInt(document.getElementById("Ingrese un número entero positivo").value);
   let suma = 0;

   for (let i = 1; i <= n; i += 2) {
      suma += i;
   }

   document.getElementById("resultado27").innerHTML = (`La suma de los números impares menores o iguales a ${n} es: ${suma}`);

}

/*******************************************************************************************************/

/* Pregunta 24 */

function SumaNumerosPares() {

   let suma = 0;

   for (let i = 1; i <= 1000; i++) {
      if (i % 2 === 0) {
         suma += i;
      }
   }

   document.getElementById("resultado28").innerHTML = suma;

}

/*******************************************************************************************************/

/* Pregunta 25 */

/* INTENTO DE HALLAR FACTORIAL POR MEDIO DE RECURSIVA FALLIDO 
 
function calcularFactorial(n) {
 
  let n = parseInt(document.getElementById("Ingrese un número entero2").value);

  if (numero === 0 || numero === 1) {
     return 1;
  } else {
     return numero * calcularFactorial(numero - 1);
  }
}

document.getElementById("resultado29").addEventListener("click", function() {
  var inputNumero = document.getElementById("Ingrese un número entero2").value;
  var resultado = calcularFactorial(inputNumero);
  document.getElementById("resultado29").innerHTML = "El factorial de " + inputNumero + " es " + resultado;
});*/

/*******************************************************************************************************/

/* Pregunta 26 */


function RestaSuce() {
   let dividendo = parseInt(document.getElementById("Ingrese_el_dividendo").value);
   let divisor = parseInt(document.getElementById("Ingrese_el_divisor").value);
   let cociente = 0;
   let resto = dividendo;

   while (resto >= divisor) {
      resto = resto - divisor;
      cociente++;
   }

   document.getElementById("resultado30").innerHTML = "El cociente es: " + cociente + "<br>El resto es: " + resto;

}

/*******************************************************************************************************/

/* Pregunta 27 */

function calcularMedia() {
   let suma = 0;
   let contador = 0;
   let numero = 0;
   let media = 0;

   do {
      numero = parseInt(prompt("Ingrese un número:"));

      if (numero >= 0) {
         suma += numero;
         contador++;
      }
   } while (numero >= 0);

   if (contador > 0) {
      media = suma / contador;
      document.getElementById("resultado31").innerHTML = "La media de los números ingresados es: " + media;
   } else {
      document.getElementById("resultado31").innerHTML = "No se ingresaron números positivos.";
   }
}

/*******************************************************************************************************/

/* Pregunta 28 */

function sumaPrimerosCienNumerosConRepetir() {
   let suma = 0;
   let contador = 1;

   do {
      suma += contador;
      contador++;
   } while (contador <= 100);

   document.getElementById("resultado32").innerHTML = suma;

}


/*******************************************************************************************************/

/* Pregunta 29 */

function sumaPrimerosCienNumerosConMientras() {
   let suma = 0;
   let contador = 1;

   while (contador <= 100) {
      suma += contador;
      contador++;
   }


   document.getElementById("resultado33").innerHTML = suma;

}


/*******************************************************************************************************/

/* Pregunta 30 */

function sumaPrimerosCienNumerosConPara() {
   let suma = 0;

   for (let contador = 1; contador <= 100; contador++) {
      suma += contador;
   }


   document.getElementById("resultado34").innerHTML = suma;

}


/*******************************************************************************************************/

/* Pregunta 31 */

function mediaParesEImpares() {
   let sumaPares = 0;
   let sumaImpares = 0;
   let contadorPares = 0;
   let contadorImpares = 0;

   for (let i = 1; i <= 10; i++) {
      let numero = parseInt(prompt("Ingrese el número " + i + ":"));
      if (numero % 2 == 0) {
         sumaPares += numero;
         contadorPares++;
      } else {
         sumaImpares += numero;
         contadorImpares++;
      }
   }

   if (contadorPares > 0) {
      let mediaPares = sumaPares / contadorPares;
      document.getElementById("resultado35").innerHTML = ("La media de los números pares ingresados es " + mediaPares);
   }

   if (contadorImpares > 0) {
      let mediaImpares = sumaImpares / contadorImpares;
      document.getElementById("resultado36").innerHTML = ("La media de los números impares ingresados es " + mediaImpares);
   }
}



/*******************************************************************************************************/

/* Pregunta 32 */

function Ciudad() {
   let poblacion = [[], [], []];
   let maxPoblacion = 0;
   let ciudadMaxPoblacion = '';

   for (let provincia = 0; provincia < 3; provincia++) {
      for (let ciudad = 0; ciudad < 11; ciudad++) {
         poblacion[provincia][ciudad] = parseInt(prompt(`Ingrese la población de la ciudad ${ciudad + 1} de la provincia ${provincia + 1}:`));

         if (poblacion[provincia][ciudad] > maxPoblacion) {
            maxPoblacion = poblacion[provincia][ciudad];
            ciudadMaxPoblacion = `Ciudad ${ciudad + 1} de la provincia ${provincia + 1}`;
         }
      }
   }

   document.getElementById("resultado37").innerHTML = (`La ciudad con la mayor población es: ${ciudadMaxPoblacion}`);

}



/*******************************************************************************************************/

/* Pregunta 33 */

function Continuar() {
   let continuar = true;

   while (continuar) {
      console.log("El programa sigue ejecutándose");
      continuar = confirm("¿Desea continuar?");
   }

   console.log("Fin del programa");
}

/*******************************************************************************************************/

/* Pregunta 34 */

function Tablaa() {

   for (let i = 1; i <= 9; i++) {
      console.log(`Tabla de multiplicar del número ${i}`);
      for (let j = 1; j <= 10; j++) {
         console.log(`${i} x ${j} = ${i * j}`);
      }
      console.log("");
   }
}

/*******************************************************************************************************/

/* Pregunta 35 */

function Mayor_Menor() {

   let numeros = [];
   let mayor;
   let menor;

   for (let i = 0; i < 20; i++) {
      numeros[i] = parseInt(prompt("Ingrese un número " + i + ":"));
   }

   mayor = numeros[0];
   menor = numeros[0];

   for (let i = 1; i < 20; i++) {
      if (numeros[i] > mayor) {
         mayor = numeros[i];
      }
      if (numeros[i] < menor) {
         menor = numeros[i];
      }
   }
   document.getElementById("resultado38").innerHTML = ("El número mayor es: " + mayor);
   document.getElementById("resultado39").innerHTML = ("El número menor es: " + menor);

}

/*******************************************************************************************************/

/* Pregunta 36 */

function Fibonacci() {

   cantidad = parseInt(prompt("Ingrese la cantidad a mostrar:"));

   if (cantidad > 0) {
      console.log("Serie de Fibonacci:");
      let a = 0;
      let b = 1;
      console.log(a);
      console.log(b);

      for (let i = 3; i <= cantidad; i++) {
         let c = a + b;
         console.log(c);
         a = b;
         b = c;
      }
   } else {
      console.log("La cantidad ingresada es inválida");
   }
}



/*******************************************************************************************************/

/* Pregunta 37 */

function MCD_Euclides() {
   let num1 = parseInt(prompt("Ingrese el primer número:"));
   let num2 = parseInt(prompt("Ingrese el segundo número:"));
   let resto;

   // Algoritmo de Euclides
   while (num2 !== 0) {
      resto = num1 % num2;
      num1 = num2;
      num2 = resto;
   }

   document.getElementById("resultado40").innerHTML = ("El M.C.D. es: " + num1);
}

/*******************************************************************************************************/

/* Pregunta 38 */

function Número_perfecto() {
   let n = parseInt(prompt("Ingrese un número: "));
   let sum = 0;

   for (let i = 1; i <= n / 2; i++) {
      if (n % i === 0) {
         sum += i;
      }
   }

   if (sum === n) {
      document.getElementById("resultado41").innerHTML = ("El número " + n + " es un número perfecto.");
   } else {
      document.getElementById("resultado41").innerHTML = ("El número " + n + " no es un número perfecto.");
   }

}

/*******************************************************************************************************/

/* Pregunta 39 */

function GregoryLeibniz() {
   let n = parseInt(prompt("Ingrese la cantidad de términos a sumar:"));
   let pi = 0;

   for (let i = 0; i < n; i++) {
      let termino = 4 / (2 * i + 1);

      if (i % 2 == 1) {
         termino *= -1;
      }

      pi += termino;
   }

   document.getElementById("resultado42").innerHTML = ("Aproximación del número pi: " + pi);

}

/*******************************************************************************************************/

/* Pregunta 40 */

function Nilakantha() {
   let pi = 3;
   let signo = 1;
   let n = 2;
   let cantidad = parseInt(prompt("Ingrese la cantidad de términos a sumar:"));

   for (let i = 1; i <= cantidad; i++) {
      let termino = 4 / (n * (n + 1) * (n + 2));
      pi += signo * termino;
      n += 2;
      signo *= -1;
   }

   document.getElementById("resultado43").innerHTML = ("La aproximación de pi con la serie de Nilakantha es:", pi);
}

/*******************************************************************************************************/


