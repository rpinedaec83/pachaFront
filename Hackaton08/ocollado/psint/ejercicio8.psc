Proceso ejercicio8
	Dimension nota[3]
	para i=i+1 Hasta 3 Hacer
		
			Escribir ("Ingrese nota "),i
			Leer nota[i]
			
			Mientras nota[i]<0 o nota[i]>20	
				Escribir ("Ingrese valor correcto")
				Leer nota[i]
			FinMientras			
	FinPara

	i=0
	
	para i=i+1 Hasta 3 Hacer
		acumulado = acumulado + nota[i]
		promedio = acumulado / i
	FinPara
	
	Escribir "Su promedio es de ", promedio
	Si promedio>=11
		Escribir "Usted ha aprobado"
	SiNo
		Escribir "Usted ha desaprobado"
	FinSi
FinProceso
