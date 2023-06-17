Proceso pago_empleados_heladeria
Definir idEmpleado, diasTrabajados Como Entero
Dimension salarios(4)
Definir salarioSemanal Como Real

salarios(1) = 56
salarios(2) = 64
salarios(3) = 80
salarios(4) = 48

Escribir "Ingrese el número identificador del empleado: "
Leer idEmpleado

Si (idEmpleado >= 1) y (idEmpleado <= 4) Entonces
	Escribir "Ingrese la cantidad de días trabajados en la semana: "
	Leer diasTrabajados
	
	salarioSemanal = diasTrabajados * salarios(idEmpleado)
	
	Escribir "El empleado con el número de identificación ", idEmpleado, " trabajó ", diasTrabajados, " días en la semana y se le debe pagar $", salarioSemanal, " por su salario semanal."
Sino
	Escribir "El número de identificación ingresado no es válido."
FinSi

	
FinProceso
