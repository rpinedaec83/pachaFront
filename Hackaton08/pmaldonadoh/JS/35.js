let mayor = 0;
let menor = 0;

for (let i = 1; i <= 20; i++) {
    let numero = parseInt(prompt("Ingrese el número " + i + ":"));
    
    if (i === 1) {
        mayor = numero;
        menor = numero;
    } else {
        if (numero > mayor) {
            mayor = numero;
        }
        
        if (numero < menor) {
            menor = numero;
        }
    }
}

console.log("El número mayor es: " + mayor);
console.log("El número menor es: " + menor);