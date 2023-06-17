Proceso SumaImpares
    Definir n, suma Como Entero
    Escribir "Ingrese un número:"
    Leer n
    suma = 0
    Para i = 1 Hasta n Hacer
        Si i Mod 2 <> 0 Entonces
            suma = suma + i
        FinSi
    FinPara
    Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
FinProceso
