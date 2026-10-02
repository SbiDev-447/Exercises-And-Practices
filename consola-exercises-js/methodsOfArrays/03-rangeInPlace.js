"use strict";

let arr = [5, 3, 8, 1, 2, 3, 4];

function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let index = arr[i];
    if (index < a || index > b) {
      arr.splice(i, 1);
    }
  }
}

filterRangeInPlace(arr, 1, 5);
console.log(arr);
