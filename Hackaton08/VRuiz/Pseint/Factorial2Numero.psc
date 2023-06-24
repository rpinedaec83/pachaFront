Proceso Factorial2Numero
	Definir n,conta,factorial2 Como Entero;
	Escribir "Ingrese un número";
	Leer n;
	conta <- 1; factorial2 <- 1;
	Repetir
		factorial2 <- factorial2*conta;
		conta <- conta+1;
	Hasta Que conta>n
	Escribir "El factorial es: ",factorial2;	
FinProceso
