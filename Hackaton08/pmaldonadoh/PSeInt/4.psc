Algoritmo Ordenado 
	
	Definir n,i,n1,n2,n3 como Real 
	
	Escribir "Escribe 3 numeros, cada uno separado por un Enter" 
	
	Para i = 1 Hasta 3 Con Paso 1 Hacer 
		
		Leer n 
		
		Si i == 1 Entonces 
			
			n1 = n 
			
		FinSi 
		
		Si i == 2 Entonces 
			
			Si n1 < n Entonces 
				
				n2 = n1 
				
				n1 = n 
				
			SiNo 
				
				n2 = n 
				
			FinSi 
			
		FinSi 
		
		Si i == 3 Entonces 
			
			Si n1 < n Entonces 
				
				n3 = n2 
				
				n2 = n1 
				
				n1 = n 
				
			SiNo 
				
				Si n2 < n Entonces 
					
					n3 = n2 
					
					n2 = n 
					
				SiNo 
					
					n3 = n 
					
				FinSi 
				
			FinSi 
			
		FinSi 
		
		
		
	FinPara 
	
	Escribir "Los números de menor a mayor son:" 
	
	Escribir n3 
	
	Escribir n2 
	
	Escribir n1 
	
FinAlgoritmo 