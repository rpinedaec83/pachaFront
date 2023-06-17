Proceso SumaNumerosPositivos
	Definir n,media,conta Como Entero
	Definir i Como Real
	Escribir "Ingrese un número"
	Leer n
	media <- 0; conta <- 0; i <- 0
	Mientras (n>=0) Hacer 
		media <- media+n
		conta <- conta+1
		Leer n     
	FinMientras
	i <- media/conta
	Escribir "La media es: ",i
FinProceso
