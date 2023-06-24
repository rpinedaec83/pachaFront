Proceso MayorPoblacion
	Definir conta1, conta2,ciudad, mayor1  como Entero
	conta1 <- 1
	mientras (conta1 <= 3) Hacer
		mayor1 <- 0
		conta2 <- 1
		Mientras (conta2 <= 11) Hacer
			Leer ciudad
			si (ciudad > mayor1) entonces
				mayor1 <- ciudad
			FinSi
			conta2 <- conta2 + 1
		FinMientras
		Escribir "La población mayor de la provincia ",conta1," es: ",mayor1
		conta1 <- conta1 + 1
	FinMientras
FinProceso
