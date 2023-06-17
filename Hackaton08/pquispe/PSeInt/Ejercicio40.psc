Proceso Ejercicio40
	Definir numeroIngresado, signo, divisor Como Entero
	Definir aproximacion Como Real
	
	Escribir "Ingrese un numero positivo:"
	Leer numeroIngresado
	
	Si numeroIngresado >= 0 Entonces
		aproximacion = 3
		signo = 1
		divisor = 2
		
		Para i = 1 Hasta numeroIngresado Con Paso 1 Hacer
			aproximacion = aproximacion + (signo * (4 / (divisor * (divisor + 1) * (divisor + 2))))
			
			signo = signo * (-1)
			divisor = divisor + 2
		Fin Para
		
		Escribir "El valor aproximado de pi por la serie de Nilakantha es:" aproximacion
	SiNo
		Escribir "Solo ingrese numeros positivos."
	Fin Si
FinProceso
