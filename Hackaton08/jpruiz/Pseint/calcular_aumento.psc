Proceso calcular_aumento
	Definir sueldo, aumento como Real
    
    Escribir "Ingrese el sueldo del trabajador: "
    Leer sueldo
    
    Si sueldo > 2000 Entonces
        aumento <- sueldo * 0.05
    Sino
        aumento <- sueldo * 0.1
    FinSi
    
    Escribir "El aumento del trabajador es de: ", aumento
	
FinProceso
