Proceso ejercicio14
	Escribir "Ingresar numero del 1 al 10"
	Leer num
	
	Mientras num<1 o num>10 hacer
		Escribir "Numero incorrecto, Ingresar numero"
		Leer num
	FinMientras
	
	i=num-1
	bandera=1
	
	mientras bandera<>0 y i>1 hacer
		bandera=num%i
		i=i-1
	FinMientras
	
	si bandera==0
		Escribir "No es primo"
	SiNo
		Escribir "Es primo"
	FinSi

	
	
	
FinProceso
