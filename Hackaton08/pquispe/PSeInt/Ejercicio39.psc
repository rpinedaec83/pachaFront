Proceso Ejercicio39
	Definir numeroIngresado, signo, divisor Como Entero
	Definir aproximacion Como Real
	
	Escribir "Ingrese un numero positivo:"
	Leer numeroIngresado
	
	Si numeroIngresado > 0 Entonces
		signo = 1
		divisor = 1
		
		Para i = 1 Hasta numeroIngresado Con Paso 1 Hacer
			aproximacion = aproximacion + (signo * (4 / divisor))
			
			divisor = divisor + 2
			signo = signo * (-1)
		Fin Para
		
		Escribir "La aproximacion de pi por la serie de Gregory-Leibniz es: " aproximacion
	SiNo
		Escribir "Solo puede ingresar numeros positvos."
	Fin Si
FinProceso
