Proceso mcd_euclides
	
    Definir num1 como Entero
    Definir num2 como Entero
    Definir resto como Entero
    
    Escribir "Ingrese el primer número: "
    Leer num1
    
    Escribir "Ingrese el segundo número: "
    Leer num2
    
    Mientras num2 > 0 Hacer
        resto <- num1 % num2
        num1 <- num2
        num2 <- resto
    Fin Mientras
    
    Escribir "El Máximo Común Divisor es: " num1
FinProceso
