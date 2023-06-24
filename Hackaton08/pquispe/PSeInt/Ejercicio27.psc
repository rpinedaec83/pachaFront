Proceso Ejercicio27
	Definir numeroIngresado, sumaNumeros, cantidadNumeros Como Entero
	Definir media Como Real
	
	Escribir "Ingrese un numero (si ingresa uno negativo se termina el programa):"
	Leer numeroIngresado
	
	Si numeroIngresado >= 0 Entonces
		Repetir
			sumaNumeros = sumaNumeros + numeroIngresado
			cantidadNumeros = cantidadNumeros + 1
			
			Leer numeroIngresado
		Hasta Que numeroIngresado < 0
		
		media = sumaNumeros / cantidadNumeros
		
		Escribir "El programa se detuvo por haber ingresado un numero negativo."
		Escribir "La media de los numeros ingresados es: " media
	SiNo
		Escribir "El programa se detuvo por haber ingresado un numero negativo y no hay media."
	Fin Si
FinProceso
