Proceso EnterosAscendente
	Definir a,b,c Como Entero
	Escribir "Ingrese 3 numeros"
	Leer a,b,c
	si a<b y a<c y b<c Entonces
		Escribir a,b,c, " Se ingresaron en orden ascendente"
	SiNo
		si a>b y a>c y b>c Entonces
			Escribir a,b,c," Se ingresaron en orden descendente"
		SiNo
			Escribir a,b,c, " se ingresaron en desorden" 
		FinSi
	FinSi
	
FinProceso
