let mayor = -Infinity;
let menor = Infinity;
let numero;

for(let i = 1; i <= 20; i++){
  numero = parseInt(prompt("Ingresa el número " + i + ":"));
  
  if(numero > mayor){
    mayor = numero;
  }
  
  if(numero < menor){
    menor = numero;
  }
}

console.log("El número mayor es: " + mayor);
console.log("El número menor es: " + menor);
