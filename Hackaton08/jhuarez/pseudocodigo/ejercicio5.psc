Proceso ejercicio5
	Escribir "Ingresar numero de zapatos"
	Leer zapatos
	
	si zapatos<10
		Escribir "El precio de su compra es de ", zapatos*80
	SiNo
		si zapatos>=10 y zapatos<20
			Escribir "Dscto 10%. El precio de su compra es de ", zapatos*80*0.9
		SiNo
			si zapatos>=20 y zapatos<30
				Escribir "Dscto 20%. El precio de su compra es de ", zapatos*80*0.8
			SiNo
				Escribir "Dscto 40%. El precio de su compra es de ", zapatos*80*0.6
			FinSi
		FinSi
		
	FinSi
	
	
FinProceso
