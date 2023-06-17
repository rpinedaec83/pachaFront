Proceso ejercicio20
	Dimension num[4]
	Dimension array[4]
	
	para i=i+1 Hasta 4 Hacer
		Escribir ("Ingrese el numero "),i
		Leer num[i]
		array[i]=num[i]
	FinPara
	contador=0
	i=0
	
	para i=i+1 hasta 4 Hacer
		si num[i]%2==0 Entonces
			contador=contador+1			
		FinSi
	FinPara
	
	Escribir "Hay ", contador, " numeros pares"
	
	i=0
	k=0
	
	para i=i+1 hasta 3 Hacer
		posmenor=i
		k=posmenor-1
		Para k=k+1 hasta 3 Hacer
			si array[posmenor]>num[k+1]
				aux = array[posmenor]
				array[posmenor]=array[k+1]
				array[k+1]=aux
			FinSi
		FinPara
		
	FinPara
	
	Escribir "El numero mayor es ", array[4]
	
	si num[3]%2==0 Entonces
		sqr=num[2]^2
		Escribir "El cuadrado del segundo es ", sqr
	SiNo
		Escribir "No cumple primera condicion"
	FinSi
	
	si num[1]<num[4] Entonces
		media = (num[1]+num[2]+num[3]+num[4])/4
		Escribir "la media de los 4 numeros es ", media
	SiNo
		Escribir "No cumple segunda condicion"
	FinSi
	
	si num[2]>num[3] Entonces
		si num[3]>=50 y num[3]<=700 Entonces
			suma=num[1]+num[2]+num[3]+num[4]
			escribir "La suma de los 4 numeros es ", suma
		SiNo
			Escribir "No cumple tercera condicion"
		FinSi
	FinSi
	
	
	
	
	

	
FinProceso
