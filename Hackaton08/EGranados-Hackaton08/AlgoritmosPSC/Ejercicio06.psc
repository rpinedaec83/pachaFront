Algoritmo SueldoSemanal
  Definir horas, sueldo como entero
  Escribir "Ingrese la cantidad de horas trabajadas en la semana:"
  Leer horas
  Si horas <= 40 entonces
    sueldo = horas * 20
  SiNo
    sueldo = 40 * 20 + (horas - 40) * 25
  FinSi
  Escribir "El sueldo semanal es:", sueldo
FinAlgoritmo
