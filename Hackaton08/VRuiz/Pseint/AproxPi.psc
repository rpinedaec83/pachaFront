Proceso AproxPi
	Definir i, num, conta como entero
	Definir _pi como real
	_pi <- 0
	conta <- 0
	
	Escribir "Ingrese un número"
	Escribir "Para calcular la sucesión de pi"
	Leer num
	
	para i <-1 hasta num Con Paso 2 hacer
		
		si (conta mod 2 = 0) Entonces
			_pi <- _pi + (4 / i)
		SiNo
			_pi <- _pi - (4/ i)
		FinSi
		conta <- conta + 1
		
	FinPara
	
	Escribir "Pi se aproxima a: ", _pi	
FinProceso
