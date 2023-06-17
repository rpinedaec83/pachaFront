Proceso ejercicio7
	Escribir "Ingrese su tipo de membresia para averiguar su descuento"
	Leer membresia
	
	si membresia=='a' O membresia== "A"	
		Escribir "Tiene 10% de descuento"
	SiNo
		si membresia=="b" O membresia=="B"	
			Escribir "Tiene 15% de descuento"
			
		SiNo
			si membresia=="c" O membresia== "C"	
				Escribir "Tiene 20% de descuento"
			SiNo
				Escribir "Ingrese valor correcto"
			FinSi
		FinSi
	FinSi	
FinProceso
