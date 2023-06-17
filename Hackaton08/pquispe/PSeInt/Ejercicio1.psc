Proceso Ejercicio1
	Definir numeroIngresado, cantidadDigitos Como Entero
	
	Escribir "Ingrese un numero: "
	Leer numeroIngresado
	
	cantidadDigitos = longitud(ConvertirATexto(abs(numeroIngresado)))
	
	Si cantidadDigitos == 3 Entonces
		Escribir "El numero " numeroIngresado " tiene 3 digitos."
	SiNo
		Escribir "El numero " numeroIngresado " no tiene 3 digitos."
	Fin Si
FinProceso
