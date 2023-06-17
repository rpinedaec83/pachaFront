Proceso Ejercicio25
	Definir numeroIngresado, factorial, n Como Entero
	
	Escribir "Ingrese un numero positivo:"
	Leer numeroIngresado
	
	Si numeroIngresado >= 0 Entonces
		Si numeroIngresado == 0 O numeroIngresado == 1 Entonces
			factorial = 1
			
			Escribir "El factorial del numero " numeroIngresado " es: " factorial
		SiNo
			factorial = redon((raiz(2 * PI * numeroIngresado)) * (numeroIngresado / Euler) ^ numeroIngresado)
			
			Escribir "El factorial del numero " numeroIngresado " por la formula de Stirling es: " factorial
		Fin Si
	SiNo
		Escribir "Solo puede ingresar numeros positivos."
	Fin Si
FinProceso
