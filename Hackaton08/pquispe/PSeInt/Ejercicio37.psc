Proceso Ejercicio37
	Definir primerNumero, segundoNumero, resto Como Entero
	
	Escribir "Ingrese el primer numero:"
	Leer primerNumero
	Escribir "Ingrese el segundo numero:"
	Leer segundoNumero
	
	resto = 1
	primerNumero = abs(primerNumero)
	segundoNumero = abs(segundoNumero)
	
	Mientras resto <> 0 Hacer
		resto = primerNumero % segundoNumero
		primerNumero = segundoNumero
		segundoNumero = resto
	Fin Mientras
	
	Escribir "El M.C.D por medio del algoritmo de Euclides es: ", primerNumero
FinProceso
