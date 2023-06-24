Proceso Ejercicio4
	Definir primerNumero, segundoNumero, tercerNumero, intercambio Como Entero
	
	Escribir "Ingrese el primer numero:"
	Leer primerNumero
	Escribir "Ingrese el segundo numero:"
	Leer segundoNumero
	Escribir "Ingrese el tercer numero:"
	Leer tercerNumero
	
	Si primerNumero > segundoNumero Entonces
		intercambio = primerNumero
		primerNumero = segundoNumero
		segundoNumero = intercambio
	Fin Si
	Si segundoNumero > tercerNumero Entonces
		intercambio = segundoNumero
		segundoNumero = tercerNumero
		tercerNumero = intercambio
		Si primerNumero > segundoNumero Entonces
			intercambio = primerNumero
			primerNumero = segundoNumero
			segundoNumero = intercambio
		Fin Si
	Fin Si
	
	Escribir "El orden de menor de mayor de los numeros ingresados es: " primerNumero ", " segundoNumero ", " tercerNumero "."
FinProceso
