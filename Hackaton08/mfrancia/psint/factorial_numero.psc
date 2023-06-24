Proceso factorial_numero
	// Declaración de variables
	Definir num, factorial Como Entero
	
	// Lectura del número
	Escribir "Ingrese un número entero positivo: "
	Leer num
	
	// Cálculo del factorial
	factorial <- 1
	Para i <- 1 Hasta num Con Paso 1 Hacer
		factorial <- factorial * i
	FinPara
	
	// Impresión del resultado
	Escribir "El factorial de ", num, " es: ", factorial
FinProceso
