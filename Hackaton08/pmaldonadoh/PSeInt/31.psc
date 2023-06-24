Algoritmo CalcularMedia2

Definir suma_pares, suma_impares, contador, numero, media_pares, media_impares Como Entero

suma_pares = 0
suma_impares = 0
contador = 1

Repetir hasta que contador > 10
   Escribir "Ingrese el número ", contador, ": "
   Leer numero
   Si numero % 2 = 0 Entonces
      suma_pares = suma_pares + numero
   SiNo
      suma_impares = suma_impares + numero
   Fin Si
   contador = contador + 1
Fin Repetir

media_pares = suma_pares / 5
media_impares = suma_impares / 5

Escribir "La media de los números pares es: ", media_pares
Escribir "La media de los números impares es: ", media_impares

FinAlgoritmo
