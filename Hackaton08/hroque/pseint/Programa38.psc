Proceso Programa38
	// Pedir al usuario que ingrese el número
	Escribir "Ingrese un número:"
	Leer numero
	
	// Inicializar la suma en cero
	suma = 0
	
	// Calcular la suma de los divisores propios del número
	Para divisor = 1 Hasta numero/2 Hacer
		Si numero % divisor = 0 Entonces
			suma = suma + divisor
		FinSi
	FinPara
	
	// Comprobar si el número es un número perfecto
	Si suma = numero Entonces
		Escribir "El número es un número perfecto"
	Sino
		Escribir "El número no es un número perfecto"
  FinSi
FinProceso
