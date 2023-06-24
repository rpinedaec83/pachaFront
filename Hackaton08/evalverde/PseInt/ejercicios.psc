//ejercico 1
//numero con 3 digitos
Proceso numeroEntero
	numero=0
	Escribir "Escribe un numero"
	Leer numero
	si numero/2 =0
		Escribir numero "es entero"
	SiNo
		Escribir numero "no es entero"
	FinSi
FinProceso

//ejercicio2
	Proceso numeroEntero
	numero=0
	Escribir "Escribe un numero"
	Leer numero
	
	si numero > 0 entonces
		Escribir "positivo"
	SiNo
		Escribir "negativo"
	FinSi
	
	si numero - trunc(numero) == 0 Entonces 
	
		
		Escribir numero "es entero"
	SiNo
		Escribir numero " no es entero"
	FinSi
FinProceso

Proceso ejercicio3 -el numero acaba en 4

	numero = 0
	
	Escribir numero
	Leer numero
	
	si numero mod 10 = 4 Entonces
		Escribir "el numero acaba en 4"
	SiNo
		Escribir "el numero no acaba en 4"
	FinSi
FinProceso

Proceso ejercicio4
	Definir num1,num2,num3 Como Entero
	Escribir "escribe el primer numero"
	Leer num1
	Escribir "escribe el segundo numero"
	Leer num2
	Escribir "escribe el tercero numero"
	Leer num3
	si num1=num2 y num2=num3
		Escribir "los  numeros son iguales"
	SiNo
		
		
		si num1<num2 y num1<num3 Entonces
			si num2<num2 Entonces
				Escribir num1," - ",num2," - ",num3
			SiNo
				Escribir num1, " - " num3, " - ",num2
			FinSi
		sino
			si num2<num1 y num2<num3 Entonces
				si num1<num3 Entonces
					Escribir num2," - ",num1," - ",num3
				SiNo
					Escribir num2," - ",num3," - ",num1
				FinSi
			SiNo
				si num3<num2 y num3<num1 Entonces
					si num2<num1 Entonces
						Escribir num3," - ",num2," - ",num1
					SiNo
						Escribir num3," - ",num1," - ",num2
					FinSi
				FinSi
				
			FinSi
			
		FinSi
		
	FinSi
	
FinProceso

Proceso ejercicio5
	Definir pares,total Como Entero
	precio=80
	Escribir "cuantos pares de zapatos desea comprar"
	Leer pares
	
	si pares<10 Entonces
		total=precio* pares
		Escribir "el total a pagar es " total 
	SiNo
		si pares >10 Entonces
			total=precio* pares -(pares *precio* 0.1)
			Escribir "usted pagara " total
		SiNo
			si 20< pares y pares<30 Entonces
				total=precio* pares -(pares *precio* 0.2)
				Escribir "usted pagara" total
			SiNo
				si pares>30 Entonces
					total= precio * pares-(precio * pares * 0.3)
					Escribir "usted pagara" total
				FinSi
			
			FinSi
		
			
		FinSi
		
	FinSi
FinProceso

Proceso ejercicio6
	horasTrabajadas=0
	sueldoXhora=20
	suedoXextra=25
	sueldo=0
	Escribir "ingresa la horas trabajadas"
	Leer horasTrabajadas
	
	si horasTrabajadas<=40 Entonces
		sueldo=horasTrabajadas* sueldoXhora 
		Escribir "Tu sueldo de este mes es : " sueldo 
	sino 
		si horasTrabajadas>40
			sueldo = 800 +((horasTrabajadas - 40)*suedoXextra) 
			Escribir "tu sueldo de este mes es : " sueldo
			
		FinSi
	FinSi
	
FinProceso

Proceso ejercicio7
	
	Escribir "Bienvenido a la Tienda de Helados"
	Escribir "Por favor, ingrese su tipo de membresía (A, B o C): "
	Leer TipoDeMembresía
	Escribir "Por favor, ingrese el total de su compra: "
	Leer TotalDeCompra
	
	si TipoDeMembresía == "A" Entonces
		total=TotalDeCompra-(TotalDeCompra*0.1)
		Escribir "El total de su compra con descuento es: "  total
	SiNo
		si TipoDeMembresía =="B" Entonces
			total= TotalDeCompra -( TotalDeCompra*0.15)
			Escribir "El total de su compra con descuento es: "  total
		SiNo
			si TipoDeMembresía== "C" Entonces
				total=TotalDeCompra -( TotalDeCompra*0.2)
				Escribir "El total de su compra con descuento es: "  total
			FinSi
		FinSi
	FinSi
	

FinProceso

Proceso ejercicio8
	Escribir "calcular el promedio"
	Escribir "ingresa la primera nota"
	Leer nota1
	Escribir "ingresa la segunda nota"
	Leer nota2
	Escribir "ingresa la tercera nota"
	Leer nota3
	suma=nota1+nota2+nota3
	
	promedio=suma/3

	si promedio>10 Entonces
		Escribir "el alumno aprobo"
	SiNo
		Escribir "el alunno desaprobo"
	FinSi
	
FinProceso

Proceso ejercicio9
	Escribir "calculo del aumento"
	Escribir "sueldo actual"
	Leer sueldo

			si sueldo>2000 Entonces
				sueldo =sueldo + (sueldo*0.05)
				Escribir "tu sueldo sera de : " sueldo
			SiNo
				sueldo = sueldo + (sueldo*0.1)
				Escribir "tu sueldo sera de : " sueldo
			FinSi
	
FinProceso

Proceso ejecicio10
	Escribir "calular si el numero es par o no"
	Escribir "ingresa un numero"
	leer cifra
	si cifra mod 2 = 0 Entonces
		Escribir "El numero ingresado es par"
	SiNo
		Escribir "El numero ingresado es dipar"
	FinSi
	
	
FinProceso

Proceso ejercicio11
	Escribir "Qual de los 3 numeros es el meyor"
	Escribir "digita el primer numero"
	Leer num1
	Escribir "digita el segundo numero"
	Leer num2
	Escribir "digita el tercer numero"
	Leer num3
	
	si num1=num2 y num1=num3 Entonces
		Escribir "los 3 numeros son iguales"
	SiNo
		si num1>num2 y num1 >num3 Entonces
			Escribir "El numero mayor es : " num1
		SiNo
			si num2>num1 y num2> num3
				Escribir "El numero mayor es : " num2
			SiNo
				si num3>num1 y num3>num2 Entonces
					Escribir "El numero mayor es : " num3
				FinSi
			FinSi
		FinSi
		
	FinSi
FinProceso

Proceso ejecicio12

		Escribir "Qual de los 2 numeros es el meyor"
		Escribir "digita el primer numero"
		Leer num1
		Escribir "digita el segundo numero"
		Leer num2
	
		
		si num1=num2 y num1=num3 Entonces
			Escribir "los 3 numeros son iguales"
		SiNo
			si num1>num2 y num1 >num3 Entonces
				Escribir "El numero mayor es : " num1
			SiNo
				si num2>num1 y num2> num3
					Escribir "El numero mayor es : " num2
				FinSi
			FinSi
			
		FinSi
FinProceso


	Proceso ejercicio13
		Escribir "ingresa una letra"
		Leer letra
		si letra =="a" O letra=="e" O letra=="i" O letra =="o" O letra =="u" Entonces
			Escribir "La letra ingresada es una vocal"
		SiNo
			Escribir "La letra ingresada no es un vocal"
			
		FinSi
		
FinProceso

Proceso ejercicio14
	Escribir "determine si es un número primo"
	Escribir "Digita un numero del 1 al 10"
	leer num
	si num ==1 Entonces
		Escribir "El numero 1 no es un numero primo"
	SiNo
		si num == 2 O num==3 O num==4 O num==5 O num==6 O num==7 O num==8 O num==9 Entonces
			Escribir "El numero ingresado es un numero primo"
		FinSi
	FinSi
FinProceso

Proceso ejercicio15
	Escribir "Transformacion de centimetro y libras"
	Escribir "Ingresar los centimetros que quieres convertir a pulgadas"
	leer cm
	pulgada=cm/2.54
	Escribir "los " cm " centimetros son : " pulgada " pulgadas"
	
	
	Escribir "ingresar las libras que quieres convertir en kilogramos"
	Leer lb
	kg=lb/2.20462 
	Escribir "Los " lb " libras ingresadas son " kg " kilogramos"
	
FinProceso

Proceso ejercicio18
	Escribir "ventad de cd"
	Escribir "Cuantas unidades de cd quiere adquirir"
	leer unidades
	si unidades <= 9 Entonces
		precio = 10*unidades
		Escribir "su pago es de : " precio "con una ganancia del : " precio * 0.0825
	SiNo
		si unidades >=10 y unidades <=99 Entonces
			precio = unidades* 8
			Escribir "su pago es de : " precio "con una ganancia del : " precio * 0.0825
		SiNo
			si unidades >=100 y unidades<=499 Entonces
				precio= unidades*7
				Escribir "su pago es de : " precio "con una ganancia del : " precio * 0.0825
			sino
				si unidades>=500 Entonces
					precio = unidades *6
					Escribir "su pago es de : " precio "con una ganancia del : " precio * 0.0825
				FinSi
			FinSi
		FinSi
	FinSi
	
FinProceso

Proceso ejercicio19
	Escribir " cantidad de dinero que el dueño le debe pagar al empleado que ingresó"
	escribir  "número identificador del empleado ( cajero, servidor, preparador, mantenimiento)"
	leer identificador
	escribir "cantidad de días que trabajó en la semana"
	Leer dias
	si identificador== "cajero" Entonces
		salario= 56* dias
		Escribir "El cajero esta semana recibira : " salario 
	SiNo
		si identificador =="servidor" Entonces
			salario = 64*dias
			Escribir "El servidor esta semana recibira : " salario
		SiNo
			si identificador=="preparador" Entonces
				salario= 80*dias
				Escribir "El Preparador esta semana recibira : " salario 
			SiNo
				si identificador=="mantenimiento" Entonces
					salario=48*dias
					Escribir "El de mantenimiento esta semana recibira : " salario
				FinSi
			FinSi
		FinSi
		
	FinSi
	
FinProceso

Proceso ejercicio20
	Escribir "Escribir 4 números enteros positivos"
	escribir "El primer numero"
	Leer num1
	escribir "El segundo numero"
	Leer num2
	escribir "El tercer numero"
	Leer num3
	escribir "El cuarto numero"
	Leer num4
	//cuales son pares 
	si num1 mod 2 =0 Entonces
		par=par+1
	FinSi
	si num2 mod 2 =0 Entonces
		par=par+1
	FinSi
	si num3 mod 2 =0 Entonces
		par=par+1
	FinSi
	si num4 mod 2 =0 Entonces
		par=par+1
	FinSi
	Escribir "Los numeros pares son : " par
	
	//el numero mayor
	
	
	si num1=num2 y num2=num3 y num3=num4 Entonces
		Escribir "Los numeros ingresados son iguales"
	SiNo
		si num1> num2 y num1> num3 y num1> num4  Entonces
			mayor=num1
			Escribir "el numero mayo es : " mayor
		SiNo
			si num2> num1 y num2> num3 y num2> num4 Entonces
				mayor=num2
				Escribir "el numero mayo es : " mayor
			SiNo
				si num3> num1 y num3> num2 y num3> num4 Entonces
					mayor=num3
					Escribir "el numero mayo es : " mayor
				SiNo
					
					si num4> num1 y num4> num2 y num4> num3 Entonces
						mayor=num4
						Escribir "el numero mayo es : " mayor
					FinSi
				FinSi
				
			FinSi
		FinSi
		
	FinSi
	//si el tercero es par calcular el cuadrado del segundo
	si num3 /2 =0 Entonces
		resultado =num2*num2
		Escribir "El cuadrado del segundo numero es : " resultado
	sino
		Escribir "El tercero es dispar"
	FinSi
	
	si num1<num4 Entonces
		media = (num1+num2+num3+num4)/4
		Escribir media
	SiNo
		escribir "El numero 1 - " num1 " - es mayor del numeoro cuarto - " num4
	FinSi
	
	si num2 >num3  y num3>50 y num3<700 Entonces
		suma=num1+num2+num3+num4
		Escribir suma
	SiNo
		Escribir "el numero 2 - " num2 " - es nemos del numero 3 - " num3
	FinSi
FinProceso

Proceso ejercicio21
	n=0
    
    Escribir "Ingrese un número para calcular su factorial:"
    Leer n
    
    factorial = 1
    
    Para i desde 1 hasta n Hacer
        factorial = factorial * i
    FinPara
    
    Escribir "El factorial de -" n " - es ", factorial
	
FinProceso

Proceso ejercicio22
	escribir "la suma de los n primeros números"
	Leer n
	para i desde 1 hasta n Hacer
		suma=suma + i
		
	FinPara
	Escribir suma
FinProceso

Proceso ejercicio23
	Escribir "suma de los números impares menores o iguales a n"
	Leer n
	para i desde 1 hasta n Hacer
		si i mod 2 <>0 Entonces
			suma=suma + i
			
		FinSi
		
	FinPara
	Escribir suma
FinProceso

Proceso ejercicio24
	para i desde 1 hasta 1000 Hacer
		si i mod 2=0 Entonces
			suma=suma + i
		FinSi
	FinPara
	Escribir suma
FinProceso

Proceso ejercicio26
	escribir "escribe un dividendo"
	Leer dividendo
	Escribir "escribo el divisor"
	leer divisor
	
	Mientras dividendo>=divisor Hacer
		dividendo = dividendo-divisor
		cociente = cociente +1
	FinMientras
	Escribir "conciente: " cociente ", resto: " dividendo
FinProceso

Proceso ejercicio27
	suma = 0
	contador = 0
	Escribir "inicia a escribir los numeros"
	Leer numero
	Mientras numero >= 0 hacer
		suma = suma + numero
		contador = contador + 1
		Leer numero
	Fin mientras
	Si contador > 0 entonces
		media = suma / contador
		Mostrar "La media es: ", media
	Sino
		Mostrar "No se han ingresado números positivos"
	Fin Si
FinProceso

Proceso ejercicio28
	para i desde 1 hasta 100 Hacer
		suma =suma+i
	
	FinPara
	Escribir suma
FinProceso

Proceso ejercicio29
	Escribir "suma de  los 100 primeros numeros"
	suma = 0
	i = 1
	mientras i <= 100 hacer
		suma = suma + i
		i = i + 1
	Fin mientras
	Mostrar  suma
FinProceso

Proceso ejercicio30
	suma = 0
	para i = 1 hasta 100 hacer
		suma = suma + i
	Fin para
	Escribir  suma
FinProceso

Proceso ejercicio34	
	Para i desde 1 Hasta 9 Hacer
		Escribir"Tabla de multiplicar del número  ", i
		Para j desde 1 Hasta 10  Hacer
			Resultado <- i * j
			Escribir i, " x ", j, " = ", Resultado
		FinPara
	FinPara
FinProceso

Proceso ejercicio35
	Escribir("Ingrese veinte números:")
	Mayor = -9999
	Menor = 9999
	Para i desde 1 Hasta 20  Hacer
		Escribir "Ingrese el número "  i
		Leer num
		Si num > Mayor Entonces
			Mayor = num
		FinSi
		Si num < Menor Entonces
			Menor = num
		FinSi
	FinPara
	Escribir "El número mayor es: " Mayor
	Escribir "El número menor es: " Menor
FinProceso

Proceso ejercicio36
	Escribir "serie fibonacci"
	Escribir "ingrese n"
	leer n
	a=0
	b=1
	para i desde 1 hasta n
		Escribir a
		c=a+b
		a=b
		b=c
	FinPara
	
FinProceso

Proceso ejercicio37
	escribir "primer numero"
	leer num1
	Escribir "segundo numero"
	leer num2
	Mientras num2>0 Hacer
		resto= num1%num2
		num1=num2
		num2=resto
	FinMientras
	Escribir "El MCD es: ", num1
FinProceso

Proceso ejercicio38
	Escribir "escribe un numero"
	leer num
	suma=0
	para i=1 hasta num/2 Hacer
		si num % i = 0 Entonces
			suma=suma+i
		FinSi
	FinPara
	
	si suma = num Entonces
		
		Escribir  num ", es un numero perfecto"
	SiNo
		Escribir num " , no es un numero perfecto"
	FinSi
FinProceso




