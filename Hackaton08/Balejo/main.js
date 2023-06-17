//1.
// let numero = parseInt(prompt("Ingrese un numero:"));

// if(numero>=100 && numero<=999){
//     console.log("El numero tiene 3 digitos")

// }else{
//     console.log("El numero tiene mas 3 digitos")

// }
//2.
// let numero = parseInt(prompt("Ingrese un numero:"));

// if(numero<0){
//     console.log("El numero es negativo")

// }else{
//     console.log("El numero no es negativo")
// }
//3.
// let numero = parseInt(prompt("Ingrese un numero:"));
// let ultimodig=numero%10;
// if(ultimodig===4){
//     console.log("El numero termina en 4")

// }else{
//     console.log("El numero no termina en 4")
//}
//4.
let numero = []  ;
let aux=0,mayor=0,menor=0;
for (let i = 0; i<= 2; i++) {
    numero[i]= parseInt(prompt("Ingrese un numero:"));
    // if(numero[i]>aux){
    //     aux=numero[i];
    //     aux=mayor;
    // }else{
    //     numero[i]=aux;
    //     aux=menor;
    // }
    
    
    
}
for (let i = 0; i<= 2; i++){

    console.log("Los numeros son:" +numero[i]);
}