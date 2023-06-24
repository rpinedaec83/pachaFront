Proceso operacion_con_numeros
	// Declaración de variables
	Definir num1, num2, num3, num4 Como Entero
	Definir cantidadPares, mayor Como Entero
	Definir resultado Como Real
	
	// Lectura de números enteros positivos
	Escribir "Ingrese el primer número entero positivo: "
	Leer num1
	Escribir "Ingrese el segundo número entero positivo: "
	Leer num2
	Escribir "Ingrese el tercer número entero positivo: "
	Leer num3
	Escribir "Ingrese el cuarto número entero positivo: "
	Leer num4
	
	// Verificación de números pares
	cantidadPares <- 0
	Si num1 MOD 2 = 0 Entonces
		cantidadPares <- cantidadPares + 1
	FinSi
	Si num2 MOD 2 = 0 Entonces
		cantidadPares <- cantidadPares + 1
	FinSi
	Si num3 MOD 2 = 0 Entonces
		cantidadPares <- cantidadPares + 1
	FinSi
	Si num4 MOD 2 = 0 Entonces
		cantidadPares <- cantidadPares + 1
	FinSi
	Escribir "La cantidad de números pares es: ", cantidadPares
	
	// Mayor de todos los números
	mayor <- num1
	Si num2 > mayor Entonces
		mayor <- num2
	FinSi
	Si num3 > mayor Entonces
		mayor <- num3
	FinSi
	Si num4 > mayor Entonces
		mayor <- num4
	FinSi
	Escribir "El mayor de los números es: ", mayor
	
	// Cálculo del cuadrado del segundo número si el tercero es par
	Si num3 MOD 2 = 0 Entonces
		resultado <- num2 ^ 2
		Escribir "El cuadrado del segundo número es: ", resultado
	FinSi
	
	// Cálculo de la media si el primero es menor que el cuarto
	Si num1 < num4 Entonces
		resultado <- (num1 + num2 + num3 + num4) / 4.0
		Escribir "La media de los 4 números es: ", resultado
	FinSi
	
	// Verificación de la segunda condición y cálculo de la suma
	Si num2 > num3 Entonces
		Si num3 >= 50 Y num3 <= 700 Entonces
			resultado <- num1 + num2 + num3 + num4
			Escribir "La suma de los 4 números es: ", resultado
    FinSi
FinSi
FinProceso
