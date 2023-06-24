Proceso Ejercicio32
	Definir provincia1, provincia2, provincia3, ciudad, numeroCiudad, mayorPoblacion Como Entero
	
	Para i = 1 Hasta 3 Con Paso 1 Hacer
		mayorPoblacion = 0
		
		Escribir "Ciudades de la provincia " i ":"
		
		Para j = 1 Hasta 11 Con Paso 1 Hacer
			Escribir "Ingrese la cantidad de pobladores de la ciudad " j
			Leer ciudad
			
			Mientras ciudad < 0 Hacer
				Escribir "No puede ingresar numeros negativos:"
				Leer ciudad
			Fin Mientras
			
			Si ciudad > mayorPoblacion Entonces
				mayorPoblacion = ciudad
				numeroCiudad = j
			Fin Si
		Fin Para
		
		Escribir "La ciudad con mayor poblacion de la provincia " i " es la ciudad " numeroCiudad ". Poblacion: " mayorPoblacion 
	Fin Para
FinProceso
