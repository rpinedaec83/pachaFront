Algoritmo VentaCD 
	
	Definir cantidad Como Entero 
	
	Definir total, ganancia Como Real 
	
	Escribir "¿Cuantas unidades de CDs compraste?" 
	
	Leer cantidad 
	
	Si cantidad > 0 y cantidad < 10 Entonces 
		
		total = cantidad * 10 
		
	SiNo 
		
		Si cantidad >= 10 y cantidad <= 99 Entonces 
			
			total = cantidad * 8 
			
		SiNo 
			
			Si cantidad >= 100 y cantidad <= 499 Entonces 
				
				total = cantidad * 7 
				
			SiNo 
				
				total = cantidad * 6 
				
			FinSi 
			
		FinSi 
		
	FinSi 
	
	
	
	ganancia = total * 0.0825 
	
	Escribir " El total a pagar es de $" total 
	
	Escribir " La ganancia del vendedor es de $" ganancia 
	
FinAlgoritmo 