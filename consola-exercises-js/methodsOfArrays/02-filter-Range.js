"use strict";

function filterRange(arr, a, b) {
  let range = arr.filter((index) => {
    return index >= a && index <= b;
  });

  return range;
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(arr);
console.log(filtered);
