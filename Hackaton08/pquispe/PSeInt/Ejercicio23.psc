Proceso Ejercicio23
	Definir numeroIngresado, convertirImpar, numerosImpares Como Entero
	
	Escribir "Ingrese un numero positivo:"
	Leer numeroIngresado
	
	Si numeroIngresado >= 0 Entonces
		Si numeroIngresado % 2 == 0 Entonces
			convertirImpar = numeroIngresado - 1
			numerosImpares = ((convertirImpar + 1) / 2) ^ 2
		SiNo
			numerosImpares = ((numeroIngresado + 1) / 2) ^ 2
		Fin Si
		
		Escribir "La suma de los numeros impares hasta " numeroIngresado " es: " numerosImpares
	SiNo
		Escribir "Solo puede ingresar numeros positivos."
	Fin Si
FinProceso
