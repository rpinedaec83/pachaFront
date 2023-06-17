let n = parseInt(prompt("Ingrese un número entero del 1 al 9:"));
let primo = 1;

if (n > 1) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            primo = 0;
            break;
        }
    }
}

if (primo === 1) {
    console.log(n + " es un número primo.");
} else {
    console.log(n + " no es un número primo.");
}
