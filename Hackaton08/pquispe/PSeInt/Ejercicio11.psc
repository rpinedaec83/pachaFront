Proceso Ejercicio11
	Definir primerNumero, segundoNumero, TercerNumero, mayorNumero Como Entero
	
	Escribir "Ingrese el primer numero:"
	Leer primerNumero
	Escribir "Ingrese el segundo numero:"
	Leer segundoNumero
	Escribir "Ingrese el tercer numero:"
	Leer TercerNumero
	
	Si primerNumero >= segundoNumero Y primerNumero >= TercerNumero Entonces
		mayorNumero = primerNumero
	Fin Si
	Si segundoNumero >= primerNumero Y segundoNumero >= TercerNumero Entonces
		mayorNumero = segundoNumero
	Fin Si
	Si TercerNumero >= primerNumero Y TercerNumero >= segundoNumero Entonces
		mayorNumero = TercerNumero
	Fin Si
	
	Escribir "El numero mayor es: " mayorNumero "."
FinProceso
