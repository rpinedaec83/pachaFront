Proceso media_delista_numeros
// Declaración de variables
Definir numero, suma, contador Como Entero
Definir media Como Real

// Inicialización de variables
suma <- 0
contador <- 0

// Lectura de números
Escribir "Ingrese números positivos para calcular su media. Ingrese un número negativo para terminar."
Leer numero

Mientras numero >= 0 Hacer
	// Suma del número ingresado a la suma acumulada
	suma <- suma + numero
	
	// Incremento del contador de números ingresados
	contador <- contador + 1
	
	// Lectura del siguiente número
	Escribir "Ingrese otro número positivo o un número negativo para terminar."
	Leer numero
FinMientras
	
// Cálculo de la media
Si contador > 0 Entonces
	media <- suma / contador
	Escribir "La media de los números ingresados es: ", media
Sino
	Escribir "No se ingresaron números válidos para calcular la media."
FinSi

FinProceso
