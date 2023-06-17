Proceso AproxPi2
	Definir i,num,conta Como Entero
	Definir _pi Como Real
	_pi <- 0
	conta <- 0
	Escribir "Ingrese un número"
	Escribir "Para calcular la sucesión de pi"
	Leer num
	Para i<-2 Hasta num Con Paso 2 Hacer
		Si (conta MOD 2=0) Entonces
			_pi <- _pi+(4/(i*(i+1)*(i+2)))
		SiNo
			_pi <- _pi-(4/(i*(i+1)*(i+2)))
		FinSi
		conta <- conta+1
	FinPara
	Escribir "Pi se aproxima a: ",_pi+3	
FinProceso
