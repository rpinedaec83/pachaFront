Proceso calcular_promedio
	Definir nota1, nota2, nota3, promedio como Real
    
    Escribir "Ingrese la primera nota: "
    Leer nota1
    
    Escribir "Ingrese la segunda nota: "
    Leer nota2
    
    Escribir "Ingrese la tercera nota: "
    Leer nota3
    
    promedio <- (nota1 + nota2 + nota3) / 3
    
    Si promedio >= 3.0 Entonces
        Escribir "El estudiante aprobó con un promedio de ", promedio
    Sino
        Escribir "El estudiante no aprobó con un promedio de ", promedio
    FinSi
	
FinProceso
