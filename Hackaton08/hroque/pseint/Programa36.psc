Proceso Programa36
	Escribir "Ingrese el número de términos de la serie de Fibonacci:"
	Leer n
	
	// Inicializar variables
	a = 0
	b = 1
	
	// Mostrar los dos primeros términos
	Escribir "0"
	Si n >= 2 Entonces
		Escribir "1"
	FinSi
	
	// Calcular los términos restantes y mostrarlos
	Para i = 3 Hasta n Hacer
		c = a + b
		a = b
		b = c
		Escribir ConvertirATexto(c)
	FinPara

FinProceso
