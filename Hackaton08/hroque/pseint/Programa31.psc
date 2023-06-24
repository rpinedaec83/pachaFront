Proceso Programa31
	contador = 1
	sumaPares = 0
	sumaImpares = 0
	cantPares = 0
	cantImpares = 0
	
	// Pedir al usuario que ingrese los diez números
	Repetir
		Escribir "Ingrese el número ", contador
		Leer numero
		
		// Verificar si el número es par o impar
		Si numero % 2 = 0 Entonces
			sumaPares = sumaPares + numero
			cantPares = cantPares + 1
		Sino
			sumaImpares = sumaImpares + numero
			cantImpares = cantImpares + 1
		FinSi
		
		contador = contador + 1
	Hasta Que  contador > 10
		
	// Calcular la media de los números pares e impares
	Si cantPares > 0 Entonces
		mediaPares = sumaPares / cantPares
		Escribir "La media de los números pares es: ", mediaPares
	Sino
		Escribir "No se ingresaron números pares."
	FinSi
	
	Si cantImpares > 0 Entonces
		mediaImpares = sumaImpares / cantImpares
		Escribir "La media de los números impares es: ", mediaImpares
	Sino
		Escribir "No se ingresaron números impares."
	FinSi
FinProceso
