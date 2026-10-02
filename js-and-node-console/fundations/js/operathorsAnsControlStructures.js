let var1 = 9;
let var2 = 3;

// Aritmethic Operations
console.log(`The Addition + is: ${var1 + var2}`);
console.log(`The Rest - is: ${var1 - var2}`);
console.log(`The Multiplication * is: ${var1 * var2}`);
console.log(`The Division / is: ${var1 / var2}`);
console.log(`The Mod of Division % is: ${var1 % var2}`);
console.log(`The Potencia ** is: ${var1 ** var2}`);
console.log(`The Increment++ (In One) is: ${var1++}`);
console.log(`The Decrement-- (In One) is: ${var2--}`);

console.log(
  `\n Asignement Operator is like Aritmethic (+, -, /, %, *, **) but before than this use =. 
  for example var1 += var2`,
);

let var3 = var1 + var2;

if (var1 > var2) {
  console.log("It's True");
} else {
  console.log("It's false");
}

if (var1 != var2) {
  console.log("It's false, two are equal");
}

if (var3 < var2) {
  console.log("false the sume is bigger than var2");
}

let myArray = ["Sudoku", "Mono", "Canguro"];
console.log(`Confirm: ${4 in myArray}`);

let message = var2 >= 18 ? "POSITIVO OK" : "farso";
console.log(message);

// Crea un programa que imprima por consola todos los números comprendidos entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
for (let i = 10; i <= 55; i++) {
  if (i % 3 == 0 || i == 16) {
  } else if (i % 2 == 0) {
    console.log(i);
  }
}
