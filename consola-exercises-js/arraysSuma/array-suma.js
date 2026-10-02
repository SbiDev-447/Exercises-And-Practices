// Escribe una función que reciba un array de números y devuelva la suma.

function multiplyArraysNums(nums) {
  let result = 1;

  for (const multy of nums) {
    result *= multy;
  }
  return result;
}

const numbers = [47, 73, 3, 7];
const multiply = multiplyArraysNums(numbers);
console.log(multiply);
