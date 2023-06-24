Proceso Programa19
	id=0
	dias_trabajados=0
	salario_semanal=0.0
	
	Escribir "Ingrese el id del empleado (1=Cajero, 2=Servidor, 3=Preparador, 4=Mantenimiento):"
	Leer id
	
	Escribir "Ingrese la cantidad de días trabajados en la semana: "
	Leer dias_trabajados
	
	Segun id Hacer
		1:
			salario_semanal = 56 * dias_trabajados;
		2:
			salario_semanal = 64 * dias_trabajados;
		3:
			salario_semanal = 80 * dias_trabajados;
		4:
			salario_semanal = 48 * dias_trabajados;
	FinSegun
	Escribir "El salario semanal del empleado es de: $" salario_semanal
FinProceso
