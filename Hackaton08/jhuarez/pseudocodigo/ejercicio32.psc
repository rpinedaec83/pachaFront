Proceso ejercicio32
	
	conta1 = 1;
	mientras (conta1 <= 3) Hacer
		Escribir "Ingresar poblacion de 11 ciudades de provincia ", conta1
		_mayor = 0;
		conta2 = 1;
		Mientras (conta2 <= 11) Hacer
			Leer ciudad;
			si (ciudad > _mayor) entonces
				_mayor = ciudad;
			FinSi
			conta2 = conta2 + 1;
		FinMientras
		Escribir "La población mayor de la provincia ",conta1," es: ",_mayor;
		conta1 = conta1 + 1;
	FinMientras
	
FinProceso
