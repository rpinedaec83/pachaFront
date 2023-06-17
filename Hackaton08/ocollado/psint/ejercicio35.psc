Proceso ejercicio35
	Dimension num[20]
	
	para i=1 Hasta 20 Hacer
		Escribir ("Ingrese el numero "),i
		Leer num[i]
	FinPara
	
	para j=1 hasta 19 Hacer
		posmenor=j
		
		Para k=posmenor hasta 19 Hacer
			si num[posmenor]>num[k+1]
				aux = num[posmenor]
				num[posmenor]=num[k+1]
				num[k+1]=aux
			FinSi
		FinPara
				
	FinPara
	
	Escribir "El numero menor es ", num[1]
	Escribir "El numero mayor es ", num[20]
	
FinProceso
