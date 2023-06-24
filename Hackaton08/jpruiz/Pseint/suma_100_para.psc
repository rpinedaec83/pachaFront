Proceso suma_100_para
	// Declaración de variables
	Definir suma, i Como Entero
	
	// Inicialización de variables
	suma <- 0
	
	// Ciclo para para sumar los primeros cien números
	Para i <- 1 Hasta 100 Con Paso 1 Hacer
		suma <- suma + i
	FinPara
	
	// Impresión del resultado
	Escribir "La suma de los primeros cien números es: ", suma
FinProceso
