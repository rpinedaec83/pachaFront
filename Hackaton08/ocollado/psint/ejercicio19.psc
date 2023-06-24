Proceso ejercicio19
	Escribir "Ingresar codigo de empleado (1:cajero, 2:servidor, 3:preparador, 4:mantenimiento)"
	leer cod
	Escribir "Ingresar cantidad de dias laborados"
	leer dias
	
	si dias>6 Entonces
		Escribir "La cantidad de dias no es correcta"
	SiNo
		Segun cod Hacer
			1: sueldo=dias*56
			2: sueldo=dias*64
			3: sueldo=dias*80
			4: sueldo=dias*48
				
			De otro modo: Escribir "codigo de trabajador es incorrecto"
		FinSegun
		
		Escribir "Se le debe pagar al trabajador la cantidad de ", sueldo
	FinSi
	

	
	
FinProceso
