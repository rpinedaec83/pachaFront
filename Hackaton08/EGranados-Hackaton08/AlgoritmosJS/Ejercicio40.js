let pi = 3;
let sign = 1;
let denominator = 2;

for (let i = 0; i < 100000; i++) {
  pi += sign * (4 / (denominator * (denominator + 1) * (denominator + 2)));
  sign *= -1;
  denominator += 2;
}

console.log(pi);
