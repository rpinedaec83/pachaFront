Proceso MediaNumeros
	Definir conta,conta1,conta2 Como Entero;
	Definir n,suma1,suma2,media1,media2 Como Real;
	conta <- 0; conta1 <- 0; conta2 <- 0
	
	suma1 <- 0; suma2 <- 0
	media1 <- 0; media2 <- 0
	
	Repetir
		Leer n
		Si (n>0) Entonces
			suma1 <- suma1+n
			conta1 <- conta1+1
		SiNo
			suma2 <- suma2+n
			conta2 <- conta2+1
		FinSi
		conta <- conta+1
	Hasta Que conta=10
	media1 <- suma1/conta1
	media2 <- suma2/conta2
	Escribir "La media de los números positivos es: ",media1;
	Escribir "La media de los números negativos es: ",media2;
FinProceso
