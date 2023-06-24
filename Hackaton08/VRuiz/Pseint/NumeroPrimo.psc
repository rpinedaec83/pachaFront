Proceso NumeroPrimo
	Definir x Como Entero
	
	Escribir "Ingrese un numero del 1 al 9"
	Leer x
	cont <- 0
	Para i <- 1 Hasta x Hacer
		si x%i=0 Entonces
			cont <- cont + 1
		FinSi
	FinPara
	
	si cont = 2 Entonces
		Escribir "El numero ",x, " es primo"
	SiNo
		Escribir "El numero ",x, " no es primo"
	FinSi
	
FinProceso
