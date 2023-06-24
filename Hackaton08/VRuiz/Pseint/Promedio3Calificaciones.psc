Proceso Promedio3Calificaciones
	Definir calif1, calif2, calif3, promedio Como Real
	Escribir "Escribe 3 calificaciones"
	Leer calif1, calif2, calif3
	promedio = (calif1+calif2+calif3)/3
	
	Escribir "El promedio de las tres calificaciones es: ",promedio
	si promedio>11 Entonces 
		Escribir "El alumno aprobo"
	SiNo
		Escribir "El alumno desaprobo"
	FinSi
	
FinProceso
