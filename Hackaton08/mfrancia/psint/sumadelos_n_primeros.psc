Proceso sumadelos_n_primeros
	// Declaración de variables
	Definir n, suma Como Entero
	
	// Lectura del número
	Escribir "Ingrese un número entero positivo: "
	Leer n
	
	// Cálculo de la suma
	suma <- 0
	Para i <- 1 Hasta n Con Paso 1 Hacer
		suma <- suma + i
	FinPara
	
	// Impresión del resultado
	Escribir "La suma de los ", n, " primeros números es: ", suma
FinProceso
