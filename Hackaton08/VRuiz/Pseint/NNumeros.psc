Proceso NNumeros
	Definir total, x Como Real
	Definir suma, n Como Real
	Escribir "Inserte cuantos numeros que desea sumar"
	Leer total
	x = 1
	suma = 0
	Mientras x <= total Hacer
		Escribir "Ingresar un numero"
		Leer n
		suma = suma + n
		x = x+1
	FinMientras
	Escribir "La suma de los ",total, " numeros es:",suma
FinProceso
