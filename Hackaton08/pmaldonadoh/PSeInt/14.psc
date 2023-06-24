Algoritmo DeterminarPrimo

Definir n, i, primo Como Entero

Escribir "Ingrese un número entero del 1 al 9:"
Leer n

primo = 1

Si n > 1 Entonces
    Para i = 2 Hasta n - 1 Hacer
        Si n % i = 0 Entonces
            primo = 0
            Salir
        Fin Si
    Fin Para
Fin Si

Si primo = 1 Entonces
    Escribir n, " es un número primo."
De Otro Modo
    Escribir n, " no es un número primo."
Fin Si

FinAlgoritmo
