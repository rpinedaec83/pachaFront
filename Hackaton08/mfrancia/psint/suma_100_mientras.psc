Proceso suma_100_mientras
	Definir suma, i Como Entero
	
	// Inicialización de variables
	suma <- 0
	i <- 1
	
	// Ciclo mientras para sumar los primeros cien números
	Mientras i <= 100 Hacer
		suma <- suma + i
		i <- i + 1
	FinMientras
	
	// Impresión del resultado
	Escribir "La suma de los primeros cien números es: ", suma
FinProceso
