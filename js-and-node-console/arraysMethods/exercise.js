"use strict";

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Example iterable-Loop-Manual-With-For
function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      const tripleEvenNumber = array[i] * 3;
      sum += tripleEvenNumber;
    }
  }
  return sum;
}

// The Complex Form
let myFilterNums = myNums.filter((nums) => nums % 2 === 0);
myFilterNums = myFilterNums.map((nums) => nums * 3);
myFilterNums = myFilterNums.reduce((acum, nums) => {
  return (acum += nums);
}, 0);

// The Elegant Form

const myTransformArray = myNums
  .filter((nums) => nums % 2 === 0)
  .map((nums) => nums * 3)
  .reduce((acum, nums) => (acum += nums), 0);

console.log(`\n The Function with for-loop: ${sumOfTripledEvens(myNums)}`);
console.log(`\n The complex form of FILTER-MAP-REDUCE: ${myFilterNums}`);
console.log(`\n The Elegant form of FILTER-MAP-REDUCE: ${myTransformArray}`);
