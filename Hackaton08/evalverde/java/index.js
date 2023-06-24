//ejercicio1
let verificaDigito = (numero) => {
    let texto = numero.toString()
    if (texto.length === 3){
        console.log(`el numero ${numero} tiene 3 digitos`);
    }else{
        console.log(`el numero ${numero} no tiene 3 digitos`);
    }
}
//verificaDigito(2)

//ejercicio2
let number = (num)=>{
    if (num < 0) {
        console.log(`El número ${num} ingresado es negativo.`);
      } else {
        console.log(`El número ${num} ingresado es positivo o cero.`);
      }

}
 //number()

 //ejercicio3
 let numero3 = (cifra3)=>{
    if (cifra3%10 == 4){
        console.log(`el numero ${cifra3} acaba en 4`)
    }else{
        console.log(`el numero ${cifra3} no acaba en 4`)
    }

 }
//numero3(2)
//ejercicio4
let n1
let n2
let n3
function numeros (n1,n2,n3){
    let n =[n1,n2,n3]

    n.sort( function(n1,n2){
        return (n1-n2);
    
    });

    return console.log(n)
}


//numeros(3,4,9)

const  precio=80;
function pares(numero){
    if (numero<10){
        total= numero*precio
        console.log (total)
    }else  if (numero>10){
            total= numero*precio - (numero*precio *0.1)
            console.log (total)
        
       
    } else 
        if (numero>20 && numero<30){
            total= numero*precio - (numero*precio *0.2)
            console.log (total)
        }
       

    else  if (numero>40){
            total= numero*precio - (numero*precio *0.4)
            console.log (total)
        }
    
     
}
//pares(31)
//ejercicio 6
const SalarioXhora=20;
const SalarioXhorasExtras=25;
function horas(num){
    if (num<=40){
        sueldo=num*SalarioXhora
        console.log (`esta semana tendras un sueldo de ${sueldo}`)
    }else if(num >40){
        sueldo =800+((num-40)*SalarioXhorasExtras)
        console.log (`esta semana tendras un sueldo de ${sueldo}`)
    }
}
//horas(41)
//ejercicio 7
//tipos de menbresias 

function gastoTotal(total ,membresia){
    const tipoA=0.1;
const tipoB=0.15;
const tipoC=0.2;
    switch (membresia){
        case "tipoA":
        total=total*0.9;
        break
        case "tipoB":
        total=total*0.75;
        break
        case "tipoC":
        total=total*0.8
        break
        
        default : (console.log(`pagara ${total} `))
    }
        
   console.log(`pagara ${total} `) 
}

//gastoTotal(100,"tipoB")

//ejercicio8
function promedioNotas(notas){

    let sumaNotas = notas.reduce((a ,b )=> a + b )

    let promedio = sumaNotas/notas.length

   if(promedio > 10){
    console.log("APROBADO")
   }else{
    console.log(`DESAPROBADO`)
   }
}

let jhon =[10,06,14]

//promedioNotas(jhon)

//ejercicio9
function aumento(salario){
    if (salario>2000){
        sueldo=salario+(salario*0.05)
        console.log (`tu salario de este mes es ${sueldo}`)
    } else if(salario<2000){
        sueldo =sueldo+(salario*0.1)
    console.log(`tu salario de este mes es ${sueldo}`)
    }
    
}
//aumento(1999)
//ejercicio10
function parOno(numero){
    if (numero%2==0){
        console.log(`el numero ${numero} es par `)
    }else
    {console.log(`el numero ${numero} no es par `)}
}
//parOno(5)
//ejercicio11
function numMayor(num1,num2,num3){
    if (num1 >= num2 && num1 >= num3) {
        console.log(num1 + " es el número mayor");
      } else if (num2 >= num1 && num2 >= num3) {
        console.log(num2 + " es el número mayor");
      } else if (num3 >= num1 && num3 >= num2) {
        console.log(num3 + " es el número mayor");
      }
}
//numMayor(12,2,13)
//ejercicio 12
function numMayor(num1,num2){
    if (num1 >= num2 ) {
        console.log(num1 + " es el número mayor");
      } else if (num2 >= num1 ) {
        console.log(num2 + " es el número mayor");
      } 
}
//numMayor(12,22)
//ejercicio13
function EsUnoVocal(letra){
    if (letra === "a" || letra === "e"||letra === "i"||letra === "o" ||letra === "u"){
        console.log(` la letra digitada es un vocal`)
    }
    else{
        console.log (`no es una vocal`);
    }
   
}
//EsUnoVocal("v")
//ejercicio 14
function del1Al9(numero){
    if (numero==2 || numero==5 || numero==7 ||numero==9){
        console.log (`es un numero primo`)
    }else {
        console.log(`no es un muero primo`)
    }
}
//del1Al9(1)
//ejercicio 15 
function covertir (centimetros,libras){
     pulgadas = centimetros / 2.54;
     kg = libras / 2.205;
     console.log (`los centimetros en pulgadas son ${pulgadas}, y las libras en kg son {kg}`)
     
    }
//covertir(100,100)
//ejercicio18

function articulos (numero){
    let precio
    switch(true){
        case numero<10:
            precio=numero*10;
            
            break
            case numero >=10 && numero <=99:
                precio =numero*8;
          
                break
                case numero>=100 && numero<=499:
                    precio=numero*7;
                    
                    break
                    case numero>=500:
                        precio =numero*6;
                        

                        default:console.log(`usted tiene ${numero} articulos y pagara ${precio}`)
    }
    console.log(`usted tiene ${numero} articulos y pagara ${precio}`)
    }
    //articulos(90)
    //ejercicio 19
    function pagaSemanal( identificador,dias){
        let sueldo
        if (identificador=="cajero"){
            sueldo=dias*56
            console.log(`el ${identificador}  ha trabado ${dias} ganara ${sueldo}`)
        }else if(identificador=="servidor"){
            sueldo=dias*64
            console.log(`el ${identificador}  ha trabado ${dias} ganara ${sueldo}`)
        }else if(identificador=="preparador"){
            sueldo=dias*80
            console.log(`el ${identificador}  ha trabado ${dias} ganara ${sueldo}`)
        }else if(identificador=="mantenimiento"){
            sueldo=dias*48
            console.log(`el ${identificador}  ha trabado ${dias} ganara ${sueldo}`)
        }
    
    }
    //agaSemanal("preparador",5)
    //ejercicio20
    function numeros(n1, n2, n3, n4) {
        let pares = 0;
        
        if (n1 % 2 == 0) {
          pares++;
        }
        if (n2 % 2 == 0) {
          pares++;
        }
        if (n3 % 2 == 0) {
          pares++;
        }
        if (n4 % 2 == 0) {
          pares++;
        }
        
        console.log(`Hay ${pares} números pares`);
      }
      function numeros(n1, n2, n3, n4){
        let mayor
        if(n1>n2 && n1>n3 && n1>n4){
           console.log(`el numero mayor es ${n1}`)
        }else if(n2>n3 && n2>n4 && n2>n1){
            console.log(`el numero mayor es ${n2}`) 
      }
      else if(n3>n2 && n3>n1 && n3>n4){
        console.log(`el numero mayor es ${n3}`)
      }if(n4>n2 && n4>n3 && n4>n1){
        console.log(`el numero mayor es ${n4}`)
      }
    }

    function numeros(n1, n2, n3, n4){
      if (n3%2==0){
        respuesta =n2*n2
        console.log(`${respuesta}`)
      }else {
        console.log (`el tercer numero no es par`)
      }
    }

    function numeros(n1, n2, n3, n4){
        if (n1<n4){
            respuesta =(n1+n2+n3+n4)/4
            console.log(`${respuesta}`)
        }else {
            console.log(`el primer numero ${n1} es mayor que el cuarto numero ${n4}`)
        }
    }
    function numeros(n1, n2, n3, n4){
        if (n2>n3 && n3>50 &&n3<700){
            respuesta =(n1+n2+n3+n4)
            console.log(`${respuesta}`)
        }else {
            console.log(`no cumolio la condicion`)
        }
    }

      //numeros(2, 55, 53, 3);
    //ejercicio21
    function factorial(n) {
        let resultado = 1;
        for (let i = 1; i <= n; i++) {
          resultado *= i;
        }
        return  console.log (`${resultado}`);
      }
     // factorial(3)

      //ejercicio22
      function sumaN(n){
        
       return (n * (n + 1)) / 2;

      }
      //console.log(sumaN(3))
      //ejercicio23
      function numero(n) {
       let suma=0
        for (let i = 1; i <= n; i++) {
            if (i%2 != 0){
                suma =suma + i
            }
        }
        return  console.log (`${suma}`);
      }

//numero(5)
// ejercicio24
function numero(n) {
    let suma=0
     for (let i = 1; i <= n; i++) {
        
             suma =suma + i
         
     }
     return  console.log (`${suma}`);
   }
   //numero(3)
//ejercicio 26
function valores(dividendo,divisor){
    let cociente=0;
    let resto=0;
    while(dividendo>=divisor){
        dividendo -= divisor;
    cociente++;
    }
    resto = dividendo;
    console.log(`El cociente es:  ${cociente}`)
  console.log(`El resto es:  ${resto}`)
}
//valores(12,4)
//ejercicio 28
//let i = 1, suma = 0;
//while (i <= 100) {
 // suma += i;
 // i++;
//}
//console.log(`La suma de los primeros cien números es:  ${suma}`);


//ejercicio29
//let suma = 0;
//let i = 1;

//while (i <= 100) {
 // suma += i;
//  i++;
//}

//console.log(`La suma de los primeros cien números es:  ${suma}`);

//ejercicio30
//let suma = 0;

//for (let i = 1; i <= 100; i++) {
//  suma += i;
//}

//console.log("La suma de los primeros cien números es: " + suma);
//ejercicio31
//function numeros(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10){
  // let  suma=0
 //  let media=0
 //   for(i=1;i<=numeros.length +1; i++){
 //      if (i%2==0)
 //       suma=suma + i
 //       media= suma/10
       

//    }
 //   console.log (`la media es ${media}`)

//}
//numeros(1,2,3,4,5,6,7,8,9,10)
//ejercicio34
//for (let i = 1; i <= 9; i++) {
   // console.log("Tabla de multiplicar del " + i);
    
   // for (let j = 1; j <= 10; j++) {
   //   let resultado = i * j;
   //   console.log( `${i} X ${j} = ${resultado}`);
  //  }
  
 // }

 //ejercicio35

 let serie = [5, 12, 3, 9, 27,1,3,43,45,65,7,87,25,35.76,87,77,43,8,14];
let numeroMayor = Math.max(...serie);

let numeroMenor= Math.min(...serie)
//console.log(`El número mayor es:  ${numeroMayor}`);
//console.log(`El número mayor es:  ${numeroMenor}`);

//ejercicio 38
//ingresa un numero  en la variable esPerfecto
  let esPerfecto= 7;
  let suma = 0;
  
  for (let i = 1; i < esPerfecto; i++) {
    if (esPerfecto % i === 0) {
      suma += i;
    }
  }
  
  if (suma === esPerfecto) {
    console.log(esPerfecto + ' es un número perfecto');
  } else {
    console.log(esPerfecto + ' no es un número perfecto');
  }
  

