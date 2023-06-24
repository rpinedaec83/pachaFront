Proceso ejercicio38
	Escribir "ingresa numero"
	Leer num
	i=2
	suma=0
	
	mientras i<=num
		si num%i==0 Entonces
			suma=suma+(num/i)
		FinSi
		i=i+1
	FinMientras
	
	si suma==num Entonces
		Escribir "El numero es perfecto"
	SiNo
		Escribir "El numero no es perfecto"
	FinSi
	
FinProceso
