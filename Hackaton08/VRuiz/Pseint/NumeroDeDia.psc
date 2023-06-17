Proceso NumeroDeDia
	Definir dia Como Entero
	Escribir "Ingrese un dia"
	Leer dia
	si dia =1 Entonces
		Escribir "Lunes"
	SiNo
		si dia=2 Entonces
			Escribir "Martes"
		SiNo
			si dia =3 Entonces
				Escribir "Miercoles"
			SiNo
				si dia = 4 Entonces
					Escribir "Jueves"
				SiNo
					si dia =5 Entonces
						Escribir "Viernes"
					SiNo
						si dia = 6 Entonces
							Escribir "Sabado"
						SiNo
							si dia =7 Entonces
								Escribir "Domingo"
							SiNo
								Escribir "Dia invalido"
							FinSi
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
FinProceso
