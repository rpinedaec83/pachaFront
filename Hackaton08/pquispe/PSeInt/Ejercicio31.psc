Proceso Ejercicio31
	Definir numeroIngresado, sumaPares, sumaImpares, cantidadPares, cantidadImpares Como Entero
	Definir mediaPares, mediaImpares Como Real
	
	Escribir "Ingrese 10 numeros:"
	
	Para i = 1 Hasta 10 Con Paso 1 Hacer
		Leer numeroIngresado
		
		Si numeroIngresado % 2 == 0 Entonces
			sumaPares = sumaPares + numeroIngresado
			cantidadPares = cantidadPares + 1
		SiNo
			sumaImpares = sumaImpares + numeroIngresado
			cantidadImpares = cantidadImpares + 1
		Fin Si
	Fin Para
	
	mediaPares = sumaPares / cantidadPares
	mediaImpares = sumaImpares / cantidadImpares
	
	Escribir "La media de los numeros pares es: " mediaPares
	Escribir "La media de los numeros impares es :" mediaImpares
FinProceso
