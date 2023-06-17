Proceso ejercicio18
	Escribir "Ingresar cantidad de CDs"
	Leer discos
	
	Si discos>0 y discos<10 Entonces
		precio=discos*10
	SiNo
		si discos>=10 y discos<=99 Entonces
			precio=discos*8
		SiNo
			si discos>=100 y discos<=499
				precio=discos*7
			SiNo
				precio=discos*6
			FinSi
		FinSi
	FinSi
	
	ganancia=precio*0.0825
	
	Escribir "El monto precio total de la venta es ", precio, " y la ganancia es ", ganancia
	
FinProceso
