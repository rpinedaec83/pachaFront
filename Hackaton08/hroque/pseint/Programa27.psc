Proceso Programa27
	contador = 0
	suma = 0
	media = 0
	
	// Pedir al usuario los números y calcular la media
	Escribir "Ingrese un número positivo (Ingrese un número negativo para terminar):"
	Leer numero
	
	Mientras numero >= 0 Hacer
		suma = suma + numero
		contador = contador + 1
		
		Escribir "Ingrese otro número positivo (Ingrese un número negativo para terminar):"
		Leer numero
	FinMientras
	
	Si contador > 0 Entonces
		media = suma / contador
		Escribir "La media de los números ingresados es: ", media
	SiNo
		Escribir "No se ingresaron números positivos"
  FinSi
FinProceso
