Proceso FactorialRecursivo
    Definir n, factorial Como Entero
    Escribir "Ingrese un número:"
    Leer n
    factorial = calcularFactorial(n)
    Escribir "El factorial de ", n, " es: ", factorial
FinProceso

Funcion calcularFactorial(numero: Entero) Devolver Entero
    Si numero = 0 Entonces
        Devolver 1
    Sino
        Devolver numero * calcularFactorial(numero - 1)
    FinSi
FinFuncion
