Proceso Ejercicio21
	Definir numeroIngresado, factorial Como Entero
	
	Escribir "Ingrese un numero positivo:"
	Leer numeroIngresado
	
	Si numeroIngresado >= 0 Entonces
		factorial = 1
		
		Para i = 1 Hasta numeroIngresado Con Paso 1 Hacer
			factorial = factorial * i
		Fin Para
		
		Escribir "El factorial del numero " numeroIngresado " es: " factorial
	SiNo
		Escribir  "Solo puede ingresar numeros positivos."
	Fin Si
FinProceso
