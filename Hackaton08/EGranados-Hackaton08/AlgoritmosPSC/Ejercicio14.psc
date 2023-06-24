Algoritmo NumeroPrimo
  Definir numero como entero
  Definir esPrimo como booleano
  Escribir "Ingrese un número entre 1 y 10, excepto el 1:"
  Leer numero
  esPrimo <- Verdadero
  Si numero <= 1 o numero == 9 entonces
    esPrimo <- Falso
  SiNo
    Para i <- 2 hasta numero-1 hacer
      Si numero % i == 0 entonces
        esPrimo <- Falso
        Salir
      FinSi
    FinPara
  FinSi
  Si esPrimo entonces
    Escribir "El número ingresado es primo."
  SiNo
    Escribir "El número ingresado no es primo."
  FinSi
FinAlgoritmo
