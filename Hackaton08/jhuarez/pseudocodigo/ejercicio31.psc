Proceso ejercicio31
	conta = 0
	conta1 = 0
	conta2 = 0
	suma1 = 0
	suma2 = 0
	media1 = 0
	media2 = 0
	
	Repetir
		Leer n;
		Si (n%2==0) Entonces
			suma1 = suma1+n;
			conta1 = conta1+1;
		SiNo
			suma2 = suma2+n;
			conta2 = conta2+1;
		FinSi
		conta = conta+1;
	Hasta Que conta=10
	
	si conta1<>0 Entonces
		media1 = suma1/conta1;
	FinSi
	
	si conta2<>0 Entonces
		media2 = suma2/conta2;
	FinSi
	
	
	
	Escribir 'La media de los números pares es: ',media1;
	Escribir 'La media de los números impares es: ',media2;
	
FinProceso
