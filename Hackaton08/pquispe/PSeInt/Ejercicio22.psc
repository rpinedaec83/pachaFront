Proceso Ejercicio22
	Definir numeroIngresado, sumaNumeros Como Entero
	
	Escribir "Ingrese un numero positivo:"
	Leer numeroIngresado
	
	Si numeroIngresado >= 0 Entonces
		sumaNumeros = (numeroIngresado * (numeroIngresado + 1)) / 2
		
		Escribir "La suma de los n primeros numeros es: " sumaNumeros
	SiNo
		Escribir "Solo puede ingresar numeros positivos."
	Fin Si
FinProceso
