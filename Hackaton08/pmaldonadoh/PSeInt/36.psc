Algoritmo SerieFibonacci

Definir n, a, b, c Como Entero

Escribir "Ingrese un número para generar la serie de Fibonacci: "
Leer n

a = 0
b = 1

Escribir "Serie de Fibonacci: "

Para i = 1 Hasta n Con Paso 1 Hacer
    Escribir a
    c = a + b
    a = b
    b = c
Fin Para

FinAlgoritmo
