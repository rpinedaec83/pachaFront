Proceso Programa34
	Definir i, j, resultado Como Entero
	
	// Ejecutar la tabla de multiplicar del 1 al 9
	Para i = 1 Hasta 9 Hacer
		Escribir "Tabla de multiplicar del " + ConvertirATexto(i) + ":"
		Para j = 1 Hasta 10 Hacer
			resultado = i * j
			Escribir ConvertirATexto(i) + " x " + ConvertirATexto(j) + " = " + ConvertirATexto(resultado)
		FinPara
		Escribir ""
	FinPara
FinProceso
