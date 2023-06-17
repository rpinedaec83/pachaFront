Proceso Programa35
	mayor = -999999
	menor = 999999
	Para i = 1 Hasta 20 Hacer
		Escribir "Ingrese el número " + ConvertirATexto(i) + ":"
		Leer numero
		
		// Verificar si el número ingresado es mayor o menor que los números previos
		Si numero > mayor Entonces
			mayor = numero
		FinSi
		Si numero < menor Entonces
			menor = numero
		FinSi
	FinPara
	
	// Mostrar el número mayor y el número menor
	Escribir "El número mayor es: " + ConvertirATexto(mayor)
	Escribir "El número menor es: " + ConvertirATexto(menor)
FinProceso
