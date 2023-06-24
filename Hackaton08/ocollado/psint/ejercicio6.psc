Proceso ejercicio6
	Escribir "Ingresar numero de horas laboradas"
	Leer horas
	
	si horas<=40
		trabajo=20*horas
		Escribir "Tu sueldo semanal es de ", trabajo
	SiNo
		trabajo = 40*20 + 25*(horas-40)
		Escribir "Tu sueldo semanal es de ", trabajo
	FinSi
	
FinProceso
