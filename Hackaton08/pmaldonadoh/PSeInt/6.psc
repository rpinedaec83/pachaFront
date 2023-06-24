Algoritmo CalculoSalario 
	
	
	
	Definir horasT, pago, horaextra Como Real 
	
	Escribir "¿Cuantas horas trabajaste?" 
	
	Leer HorasT 
	
	Si horasT <= 40 Entonces 
		
		pago = horasT * 20 
		
	SiNo 
		
		horaextra = horasT - 40 
		
		pago = ((horasT-horaextra) * 20) + (horaextra * 25) 
		
	FinSi 
	
	Escribir "Tu sueldo semanal es $ " pago 
	
	
	
FinAlgoritmo 