Algoritmo MediaParesImpares

Definir numero como entero;
Definir contador como entero;
Definir sumaPares como entero;
Definir sumaImpares como entero;
Definir mediaPares como real;
Definir mediaImpares como real;

sumaPares <- 0;
sumaImpares <- 0;

Para contador desde 1 hasta 10 hacer
    Escribir("Ingrese el número ", contador, ": ");
    Leer(numero);
    Si numero % 2 == 0 Entonces
        sumaPares <- sumaPares + numero;
    SiNo
        sumaImpares <- sumaImpares + numero;
    FinSi
FinPara

mediaPares <- sumaPares / 5;
mediaImpares <- sumaImpares / 5;

Escribir("La media de los números pares es: ", mediaPares);
Escribir("La media de los números impares es: ", mediaImpares);

FinAlgoritmo
