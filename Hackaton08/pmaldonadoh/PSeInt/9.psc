Algoritmo CalculoAumento 
	
	Definir salario, aumento, nvoslario Como Real 
	
	Escribir "¿Cuál es actualmente tu ingreso mensual? " 
	
	Leer salario 
	
	Si salario < 2000 Entonces 
		
		aumento = salario * 0.10 
		
	SiNo 
		
		aumento = salario * 0.05 
		
	FinSi 
	
	nvoslario = salario + aumento 
	
	Escribir "Tu aumento es de $ " aumento " y tu nuevo salario es de $ " nvoslario 
	
FinAlgoritmo 