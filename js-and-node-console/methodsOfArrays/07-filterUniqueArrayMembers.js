"use strict";

function unique(arr) {
  let tmp = [];
  arr.forEach((element) => {
    if (!tmp.includes(element)) {
      tmp.push(element);
    }
  });
  return tmp;
}

function uniqueFilter(arr) {
  return arr.filter((element, index) => {
    return arr.indexOf(element) === index;
  });
}

/*
- indexOf(element) devuelve la primera posición donde aparece ese elemento
- Si es la primera vez que aparece → index === indexOf → lo incluye
- Si ya apareció antes → index !== indexOf → lo excluye
*/

function uniqueWithSet(arr) {
  return [...new Set(arr)];
}
// Usamos Set para filtrar cada value del arr, y usamos el spread "..."
// para transformar ese nuevo set en un array

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

// Hare, Krishna, :-O
console.log(unique(strings));
console.log(uniqueFilter(strings));
console.log(uniqueWithSet(strings));
