Proceso Programa17
	Escribir "Introduce la hora:";
    Leer hora;
    Escribir "Introduce los minutos:";
    Leer minuto;
    Escribir "Introduce los segundos:";
    Leer segundo;
	
    segundo = segundo + 1;
	
    Si segundo >= 60 Entonces
        minuto = minuto + 1;
        segundo = 0;
        Si minuto >= 60 Entonces
            hora = hora + 1;
            minuto = 0;
            Si hora >= 24 Entonces
                hora = 0;
            FinSi
        FinSi
    FinSi
	
    Escribir "La hora dentro de un segundo es: ",hora,":",minuto,":",segundo;
FinProceso
