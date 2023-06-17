Proceso Programa04
	Escribir "Ingrese el primer numero: "
	Leer num1
	Escribir "Ingrese el segundo numero: "
	Leer num2
	Escribir "Ingrese el tercer numero: "
	Leer num3
	
	Si (num1 < num2 y num1 < num3) entonces
		si (num2 < num3)
			Escribir num1," ", num2, " ", num3;
		SiNo
			Escribir num1," ", num3, " ",num2;
		FinSi
	FinSi
	
	Si (num2 < num1 y num2 < num3) Entonces
		si (num1 < num3) Entonces
			Escribir num2," ", num1," ", num3;
		SiNo
			Escribir num2," ", num3," ", num1;
		FinSi
	FinSi
	
	Si (num3 < num1 y num3 < num2) Entonces
		si (num1 < num2)
			Escribir num3," ", num1," ", num2;
		SiNo
			Escribir num3," ", num2," ", num1;
		FinSi
	FinSi
FinProceso
