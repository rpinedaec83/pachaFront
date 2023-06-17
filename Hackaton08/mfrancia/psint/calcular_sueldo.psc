Proceso calcular_sueldo
	Definir horas_trabajadas, sueldo_total, horas_normales, horas_extra como Entero
    
    Escribir "Ingrese las horas trabajadas esta semana: "
    Leer horas_trabajadas
    
    Si horas_trabajadas <= 40 Entonces
        sueldo_total <- horas_trabajadas * 20
        horas_normales <- horas_trabajadas
        horas_extra <- 0
    Sino
        horas_normales <- 40
        horas_extra <- horas_trabajadas - 40
        sueldo_total <- horas_normales * 20 + horas_extra * 25
    FinSi
    
    Escribir "Horas normales trabajadas: ", horas_normales
    Escribir "Horas extras trabajadas: ", horas_extra
    Escribir "Sueldo semanal total: $", sueldo_total
	
FinProceso
