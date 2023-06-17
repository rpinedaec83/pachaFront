Proceso Programa25
	Escribir "Ingrese un numero y te doy el factorial"
	Leer numero
	Si numero < 0 Entonces
		Escribir "El numero ",numero, "no se puede calcular"
	Sino
		x = 1
		factorial = 1
		Repetir
			factorial = factorial * x
			x = x + 1
		Hasta que x>numero
		Escribir factorial//Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
	FinSi
FinProceso