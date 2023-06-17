Proceso SusecionFibonacci
	Definir xx, yy, zz,num,i Como Entero
	xx <- 0
	yy <- 1
	Escribir "Inserte un numero"
	num <- 0
	Leer num
	Para i<-0 Hasta  num Con Paso  1 Hacer
		Escribir xx
		zz<-yy+xx
		xx<-yy
		yy<-zz
	FinPara
FinProceso
