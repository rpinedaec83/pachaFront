Proceso Programa39
	Definir n, i Como Entero
	Definir numerador, denominador, signo Como Real
	Definir resultado Como Real
	
	Escribir "Ingrese la cantidad de términos de la serie de Gregory-Leibniz que desea utilizar: "
	Leer n
	
	resultado <- 0
	signo <- 1
	
	Para i <- 1 Hasta n Con Paso 1 Hacer
		numerador <- 4
		denominador <- (2 * i) - 1
		
		resultado <- resultado + (signo * (numerador / denominador))
		signo <- signo * (-1)
	FinPara
	
	Escribir "La aproximación de pi con la serie de Gregory-Leibniz utilizando ", n, " términos es: ", resultado
FinProceso
