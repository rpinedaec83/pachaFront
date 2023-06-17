let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let num3 = parseInt(prompt("Ingrese el tercer número:"));
if (num1 <= num2 && num1 <= num3) {
  if (num2 <= num3) {
    console.log(`Los números ordenados son: ${num1}, ${num2}, ${num3}`);
  } else {
    console.log(`Los números ordenados son: ${num1}, ${num3}, ${num2}`);
  }
} else if (num2 <= num1 && num2 <= num3) {
  if (num1 <= num3) {
    console.log(`Los números ordenados son: ${num2}, ${num1}, ${num3}`);
  } else {
    console.log(`Los números ordenados son: ${num2}, ${num3}, ${num1}`);
  }
} else {
  if (num1 <= num2) {
    console.log(`Los números ordenados son: ${num3}, ${num1}, ${num2}`);
  } else {
    console.log(`Los números ordenados son: ${num3}, ${num2}, ${num1}`);
  }
}
