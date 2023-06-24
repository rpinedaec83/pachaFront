Algoritmo MayorMenor

Definir mayor, menor, numero Como Entero

mayor = 0
menor = 0

Para i = 1 Hasta 20 Con Paso 1 Hacer
    Escribir "Ingrese el número ", i, ": "
    Leer numero
    
    Si i = 1 Entonces
        mayor = numero
        menor = numero
    SiNo
        Si numero > mayor Entonces
            mayor = numero
        Fin Si
        
        Si numero < menor Entonces
            menor = numero
        Fin Si
    Fin Si
Fin Para

Escribir "El número mayor es: ", mayor
Escribir "El número menor es: ", menor

FinAlgoritmo
