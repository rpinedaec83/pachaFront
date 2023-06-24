Proceso AyudaATrabajador
	Definir x, sueldo, bono Como Entero
	bono<- 0
	sueldo<- 0
	Escribir "Ingrese las horas trabajadas"
	Leer x
	si (x < 40) Entonces
		sueldo <- x * 20
		Escribir "Su sueldo de esta semana es de : ",sueldo
	SiNo
		bono <- x - 40
		sueldo <- (x - bono) * 20
		Escribir "Su sueldo de esta semana es de: ",sueldo + (bono * 25)
		
	FinSi
	
FinProceso
