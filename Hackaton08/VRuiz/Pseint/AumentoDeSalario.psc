Proceso AumentoDeSalario
	Definir salario, aumento Como Real
	aumento1 =0
	aumento2 =0
	salario =0
	Escribir "Ingrese salario"
	Leer salario
	
	si salario > 2000 Entonces
		aumento1 <- (salario *.5)
		
		Escribir "Tu sueldo con aumento es: ", salario + aumento1	
	FinSi
	si salario < 2000 Entonces
		aumento2 <- (salario *.10)
		
		Escribir "Tu sueldo con aumento es: ", salario + aumento2
	FinSi
	
	
FinProceso
