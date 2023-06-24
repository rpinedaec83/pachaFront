Proceso Ejercicio35
	Definir numeroIngresado, numeroMayor, numeroMenor Como Entero
	
	Escribir "Ingresa 20 numeros:"
	
	Para i = 1 Hasta 20 Con Paso 1 Hacer
		Leer numeroIngresado
		
		Si i = 1 Entonces
			numeroMayor = numeroIngresado
			numeroMenor = numeroIngresado
		SiNo
			Si numeroIngresado > numeroMayor Entonces
				numeroMayor = numeroIngresado
			Fin Si
			Si numeroIngresado < numeroMenorr Entonces
				numeroMenor = numeroIngresado
			Fin Si
		Fin Si
	Fin Para
	
	Escribir "El número mayor es: ", numeroMayor
	Escribir "El número menor es: ", numeroMenor
FinProceso
