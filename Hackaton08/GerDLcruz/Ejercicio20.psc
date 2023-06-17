Proceso Ejercicio20
	
	Definir primerNumero, segundoNumero, tercerNumero, cuartoNumero, numerosPares, mayorNumero, potencia, suma Como Entero
	Definir media Como Real
	
	Escribir "Ingrese el primer numero"
	Leer primerNumero
	Escribir "Ingrese el segundo numero"
	Leer segundoNumero
	Escribir "Ingrese el tercer numero"
	Leer tercerNumero
	Escribir "Ingrese el cuarto numero"
	Leer cuartoNumero
	
	Si primerNumero >= 0 Y segundoNumero >= 0 Y tercerNumero >= 0 Y cuartoNumero >= 0 Entonces
		Si primerNumero % 2 == 0 Entonces
			numerosPares = numerosPares + 1
		Fin Si
		Si segundoNumero % 2 == 0 Entonces
			numerosPares = numerosPares + 1
		Fin Si
		Si tercerNumero % 2 == 0 Entonces
			numerosPares = numerosPares + 1
		Fin Si
		Si cuartoNumero % 2 == 0 Entonces
			numerosPares = numerosPares + 1
		Fin Si
		
		Escribir "Cantidad de numeros pares: " numerosPares
		
		Si primerNumero >= segundoNumero Y primerNumero >= tercerNumero Y primerNumero >= cuartoNumero Entonces
			mayorNumero = primerNumero
		Fin Si
		Si segundoNumero >= primerNumero Y segundoNumero >= tercerNumero Y segundoNumero >= cuartoNumero Entonces
			mayorNumero = segundoNumero
		Fin Si
		Si tercerNumero >= primerNumero Y tercerNumero >= segundoNumero Y tercerNumero >= cuartoNumero Entonces
			mayorNumero = tercerNumero
		Fin Si
		Si cuartoNumero >= primerNumero Y cuartoNumero >= segundoNumero Y cuartoNumero >= tercerNumero Entonces
			mayorNumero = cuartoNumero
		Fin Si
		
		Escribir "El numero mayor es: " mayorNumero "."
		
		Si tercerNumero % 2 == 0 Entonces
			potencia = segundoNumero ^ 2
			Escribir "La potencia cuadrada del segundo numero es: " potencia
		SiNo
			Escribir "El tercer numero no es par."
		Fin Si
		
		Si primerNumero < cuartoNumero Entonces
			media = (primerNumero + segundoNumero + tercerNumero + cuartoNumero) / 4
			Escribir "La media de los cuatro numeros es: " media
		SiNo
			Escribir "El primer numero no es menor que el cuarto numero."
		Fin Si
		
		Si segundoNumero > tercerNumero Entonces
			Si tercerNumero >= 50 Y tercerNumero <= 700 Entonces
				suma = primerNumero + segundoNumero + tercerNumero + cuartoNumero
				Escribir "La suma de los cuatro numeros es: " suma
			SiNo
				Escribir "El tercer numero no esta comprendido entre los valores 50 y 700."
			Fin Si
		SiNo
			Escribir "El segundo numero no es mayor que el tercero."
		Fin Si
	SiNo
		Escribir "Solo ingrese numeros positivos."
	Fin Si
FinProceso
