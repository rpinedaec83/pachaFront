Proceso suma_impares_menoresoigual_n
	// Declaración de variables
	Definir n, suma Como Entero
	
	// Lectura del número
	Escribir "Ingrese un número entero positivo: "
	Leer n
	
	// Cálculo de la suma
	suma <- 0
	Para i <- 1 Hasta n Con Paso 1 Hacer
		Si i % 2 <> 0 Entonces
			suma <- suma + i
		FinSi
	FinPara
	
	// Impresión del resultado
	Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma

FinProceso
