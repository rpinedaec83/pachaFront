let n = parseInt(prompt("Ingrese un número para generar la serie de Fibonacci: "));
let a = 0;
let b = 1;

console.log("Serie de Fibonacci:");

for (let i = 1; i <= n; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
}