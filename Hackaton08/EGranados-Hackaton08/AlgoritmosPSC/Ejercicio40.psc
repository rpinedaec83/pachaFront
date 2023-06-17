Proceso AproxPiNilakantha
	Definir i, terminos como Entero
	Definir pi, denominador, signo como Real
	
	pi <- 3
	denominador <- 2
	signo <- 1
	
	Escribir "Ingrese la cantidad de términos:"
	Leer terminos
	
	Para i <- 1 Hasta terminos Hacer
		pi <- pi + (4 * signo) / (denominador * (denominador + 1) * (denominador + 2))
		denominador <- denominador + 2
		signo <- signo * (-1)
	FinPara
	
	Escribir "El valor aproximado de Pi es: ", pi
FinProceso
