Algoritmo Operaciones
	
	
	Definir n1, n2, n3, n4, cantidadPares, nnmayor Como Entero 
	
	cantidadPares = 0 
	
	nnmayor = 0 
		
	
	Escribir "Ingrese el primer número: " 
	
	Leer n1 
	
	
	Escribir "Ingrese el segundo número: " 
	
	Leer n2 

	
	Escribir "Ingrese el tercer número: " 
	
	Leer n3 	
	
	
	Escribir "Ingrese el cuarto número: " 
	
	Leer n4 	
	
	
	
	Si n1 % 2 = 0 entonces 
		
		cantidadPares = cantidadPares + 1 
		
	Fin Si 
	
	Si n2 % 2 = 0 entonces 
		
		cantidadPares = cantidadPares + 1 
		
	Fin Si 	
	
	Si n3 % 2 = 0 entonces 
		
		cantidadPares = cantidadPares + 1 
		
	Fin Si 
	
	Si n4 % 2 = 0 entonces 
		
		cantidadPares = cantidadPares + 1 
		
	Fin Si 
	
	Si n1 > nmayor entonces 
		
		nmayor = n1 
		
	Fin Si 
	
	
	
	Si n2 > nmayor entonces 
		
		nmayor = n2 
		
	Fin Si 
	
	
	Si n3 > nmayor entonces 
		
		nmayor = n3 
		
	Fin Si 
	
	
	Si n4 > nmayor entonces 
		
		nmayor = n4 
		
	Fin Si 
	
	
	Si n3 % 2 = 0 entonces 
		
		Escribir "El cuadrado del segundo número es: ", n2 ^ 2 
		
	Fin Si 
	
	
	Si n1 < n4 entonces 
		
		Escribir "El promedio de los 4 números es: ", (n1 + n2 + n3 + n4) / 4 
		
	Fin Si 
	
	
	Si n2 > n3 y n3 > 50 y n3 < 700 entonces 
		
		Escribir "La suma de los 4 números es: ", n1 + n2 + n3 + n4 
		
	Fin Si 
	
	
	Escribir "La cantidad de números pares es: ", cantidadPares 
	
	Escribir "El número nmayor es: ", nmayor 
	
FinAlgoritmo 