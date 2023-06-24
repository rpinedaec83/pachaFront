Proceso Ejercicio36
	Definir numeroIngresado, numeroAnteriror, numeroSiguiente, numeroActual Como Entero
	
	Escribir "Ingrese la cantidad de numeros de Fibonacci:"
	Leer numeroIngresado
	
	Si numeroIngresado > 0 Entonces
		Si numeroIngresado = 1 Entonces
			Escribir 0
		Fin Si
		
		Si numeroIngresado = 2 Entonces
			Escribir 0
			Escribir 1
		Fin Si
		
		Si numeroIngresado >= 3 Entonces
			numeroAnteriror = 0
			numeroSiguiente = 1
			
			Escribir numeroAnteriror
			Escribir numeroSiguiente
			
			Para i = 1 Hasta numeroIngresado - 2 Con Paso 1 Hacer
				numeroActual = numeroAnteriror + numeroSiguiente
				
				Escribir numeroActual
				
				numeroAnteriror = numeroSiguiente
				numeroSiguiente = numeroActual
			Fin Para
		Fin Si
		
	SiNo
		Escribir "Solo puede ingresar numeros positivos."
	Fin Si
FinProceso
