Proceso numero_primo
	Escribir "Ingrese un número entre 1 y 10 "
	Leer numero
	
	Si numero < 1 O numero > 10 Entonces
		Escribir "El número ingresado no está dentro del rango válido."
	FinSi
	
	EsPrimo <- Verdadero
	
	Si numero = 1 Entonces
		EsPrimo <- Falso
	FinSi
	
	Para i <- 2 Hasta (raiz(numero)) Con Paso 1 Hacer
		Si numero Mod i = 0 Entonces
			EsPrimo <- Falso
		FinSi
	FinPara
	
	Si EsPrimo Entonces
		Escribir "El número ingresado es primo."
	Sino
		Escribir "El número ingresado no es primo."
	FinSi
	
FinProceso
