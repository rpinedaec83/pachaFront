Proceso suma_pares_hasta_1000
	// Declaración de variables
	Definir num, suma Como Entero
	
	// Inicialización de variables
	suma <- 0
	
	// Cálculo de la suma
	Para num <- 1 Hasta 1000 Con Paso 1 Hacer
		Si num % 2 = 0 Entonces
			suma <- suma + num
		FinSi
	FinPara
	
	// Impresión del resultado
	Escribir "La suma de todos los números pares hasta el 1000 es: ", suma
FinProceso
