Proceso Ejercicio14
	Definir numeroIngresado Como Entero
	Definir numeroPrimo Como Caracter
	
	Escribir "Ingrese un numero entre el 1 al 10"
	Leer numeroIngresado
	
	Si numeroIngresado >= 1 Y numeroIngresado <= 10 Entonces
		Para i = 2 Hasta numeroIngresado - 1 Con Paso 1 Hacer
			Si numeroIngresado % i == 0 Entonces
				numeroPrimo = "no"
			Fin Si
		Fin Para
		
		Si numeroPrimo == "no" O numeroIngresado == 1 Entonces
			Escribir "El numero " numeroIngresado " no es primo."
		SiNo
			Escribir "El numero " numeroIngresado " es primo."
		Fin Si
	SiNo
		Escribir "Ingrese solo un numero entre el 1 al 10."
	Fin Si
FinProceso
