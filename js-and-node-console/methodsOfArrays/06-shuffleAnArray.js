"use strict";

// for (let i = arr.length - 1; i > 0; i--) {

let arr = [1, 2, 3];

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const RANDOM = Math.floor(Math.random() * i);
    let tmp = arr[RANDOM];
    arr[RANDOM] = arr[i];
    arr[i] = tmp;
  }
  return arr;
}

for (let i = 0; i < 20; i++) {
  console.log(shuffle(arr));
}
