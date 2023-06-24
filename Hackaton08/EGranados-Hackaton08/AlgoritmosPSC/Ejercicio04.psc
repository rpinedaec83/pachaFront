Algoritmo OrdenarNumeros
  Definir num1, num2, num3 como enteros
  Escribir "Ingrese el primer número:"
  Leer num1
  Escribir "Ingrese el segundo número:"
  Leer num2
  Escribir "Ingrese el tercer número:"
  Leer num3
  Si num1 <= num2 y num1 <= num3 entonces
    Si num2 <= num3 entonces
      Escribir "Los números ordenados son:", num1, num2, num3
    SiNo
      Escribir "Los números ordenados son:", num1, num3, num2
    FinSi
  SiNo
    Si num2 <= num1 y num2 <= num3 entonces
      Si num1 <= num3 entonces
        Escribir "Los números ordenados son:", num2, num1, num3
      SiNo
        Escribir "Los números ordenados son:", num2, num3, num1
      FinSi
    SiNo
      Si num1 <= num2 entonces
        Escribir "Los números ordenados son:", num3, num1, num2
      SiNo
        Escribir "Los números ordenados son:", num3, num2, num1
      FinSi
    FinSi
  FinSi
FinAlgoritmo
