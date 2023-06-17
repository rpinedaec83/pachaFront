Proceso resto_cociente
	// Declaración de variables
	Definir dividendo, divisor, cociente, resto Como Entero
	
	// Lectura de los números
	Escribir "Ingrese el dividendo: "
	Leer dividendo
	Escribir "Ingrese el divisor: "
	Leer divisor
	
	// Inicialización de variables
	cociente <- 0
	resto <- dividendo
	
	// Cálculo del cociente
	Mientras resto >= divisor Hacer
		cociente <- cociente + 1
		resto <- resto - divisor
	FinMientras
	
	// Impresión de resultados
	Escribir "El cociente es: ", cociente
	Escribir "El resto es: ", resto
FinProceso
