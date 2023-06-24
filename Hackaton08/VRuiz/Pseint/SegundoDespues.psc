Proceso SegundoDespues
	Escribir "Ingresar las horas"
	Leer h
	Escribir "Ingresar los minutos"
	Leer m
	Escribir "Ingresar los segundos"
	Leer s
    SegundosT<- (h*3600)+(m*60)+s+1
	h1<-Trunc(SegundosT/3600)
	r1<-SegundosT mod 3600
	m1<-Trunc(r1/60)
	s1<-r1 mod 60
	Escribir "El numero de horas es: ",h1
	Escribir "El numero de minutos es: ",m1
	Escribir "El numero de segundos es: ",s1
	
FinProceso
