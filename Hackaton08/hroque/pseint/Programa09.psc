Proceso Programa09
	Escribir 'Ingrese su salario anterior';
	Leer salario;
	
	Si (salario<2000) Entonces
		Escribir 'Su nuevo salario será: ',salario+(salario*0.1);
	SiNo
		Escribir 'Su nuevo salario será: ',salario+(salario*0.05);
	FinSi
FinProceso
