Algoritmo Oferta 
	
	Definir dcto, subtotal, total Como Real 
	
	Definir cantidad Como Entero 
	
	Escribir "¿Cuantos zapatos llevaste?" 
	
	Leer cantidad 
	
	subtotal = cantidad * 80 
	
	Si cantidad > 10 y cantidad < 20 Entonces 
		
		dcto = subtotal * 0.10 
		
		total = subtotal - dcto 
		
	SiNo 
		
		Si cantidad > 20 y cantidad < 30 Entonces 
			
			dcto = subtotal * 0.20 
			
			total = subtotal - dcto 
			
		SiNo 
			
			Si cantidad > 30 Entonces 
				
				dcto = subtotal * 0.40 
				
				total = subtotal - dcto 
				
			SiNo 
				
				total = subtotal 
				
			Fin Si 
			
		Fin Si 
		
	Fin Si 
	
	Escribir "El total a pagar es: $ " total 
	
FinAlgoritmo 