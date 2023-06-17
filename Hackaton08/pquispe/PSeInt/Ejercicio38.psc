Proceso Ejercicio38
	Definir numeroIngresado, sumaDivisores Como Entero
	
	Escribir "Ingrese un numero positivo:"
	Leer numeroIngresado
	
	Si numeroIngresado > 0 Entonces
		Para i = 1 Hasta numeroIngresado - 1 Con Paso 1 Hacer
			Si numeroIngresado % i == 0 Entonces
				sumaDivisores = sumaDivisores + i
			Fin Si
		Fin Para
		
		Si sumaDivisores == numeroIngresado Entonces
			Escribir "El numero " numeroIngresado " es un numero perfecto."
		SiNo
			Escribir "El numero " numeroIngresado " no es un numero perfecto."
		Fin Si
	SiNo
		Escribir "Solo puede ingresar numeros positivos."
	Fin Si
FinProceso
