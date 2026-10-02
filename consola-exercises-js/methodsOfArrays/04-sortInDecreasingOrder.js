"use strict";

let arr = [5, 2, 1, -10, 8];

// a-b decreciente
// b-a creciente

const compareNumbers = (a, b) => b - a;
arr.sort(compareNumbers);

console.log(arr); // 8, 5, 2, 1, -10
