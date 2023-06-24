const N = 100000;
let pi = 0;

for (let i = 0; i <= N; i++) {
    pi += 4 * Math.pow(-1, i) / (2 * i + 1);
}

console.log("El valor aproximado de pi es: ", pi);
