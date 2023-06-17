Proceso ejercicio4
	Dimension num[3]
	
	para i=i+1 Hasta 3 Hacer
		Escribir ("Ingrese el numero "),i
		Leer num[i]
	FinPara
	
	para j=j+1 hasta 2 Hacer
		posmenor=j
		k=posmenor-1
		Para k=k+1 hasta 2 Hacer
			si num[posmenor]>num[k+1]
				aux = num[posmenor]
				num[posmenor]=num[k+1]
				num[k+1]=aux
			FinSi
		FinPara
		 
	FinPara
	
	Escribir ("La lista ordenada es ")
	i=0
	para i=i+1 Hasta 3 Hacer
		Escribir num[i]
	FinPara
	
FinProceso
