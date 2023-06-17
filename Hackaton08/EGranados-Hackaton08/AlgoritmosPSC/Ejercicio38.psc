Algoritmo NumeroPerfecto
    Definir numero, sumaDivisores como Entero;
    Escribir "Ingresa un numero para comprobar si es un numero perfecto:";
    Leer numero;
    sumaDivisores = 0;
    Para i = 1 Hasta (numero/2) Con Paso 1 Hacer
        Si numero MOD i = 0 Entonces
            sumaDivisores = sumaDivisores + i;
        FinSi
    FinPara
    Si sumaDivisores = numero Entonces
        Escribir numero, " es un numero perfecto";
    Sino
        Escribir numero, " no es un numero perfecto";
    FinSi
FinAlgoritmo
