Algoritmo AumentoTrabajador
  Definir salario, aumento, nuevo_salario como entero
  Escribir "Ingrese el salario actual:"
  Leer salario
  Si salario > 2000 entonces
    aumento = salario * 0.05
  SiNo
    aumento = salario * 0.1
  FinSi
  nuevo_salario = salario + aumento
  Escribir "El nuevo salario es:", nuevo_salario
FinAlgoritmo
