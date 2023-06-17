Algoritmo Euclides

Definir a, b, r Como Entero

Escribir "Ingrese el primer número:"
Leer a

Escribir "Ingrese el segundo número:"
Leer b

Mientras b <> 0 Hacer
    r = a % b
    a = b
    b = r
Fin Mientras

Escribir "El MCD de los dos números es:", a

FinAlgoritmo
