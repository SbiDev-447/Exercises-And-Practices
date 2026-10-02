"use strict";

const sumAll = (a, b) => {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    !Number.isInteger(a) ||
    !Number.isInteger(b) ||
    a < 0 ||
    b < 0 ||
    isNaN(a) ||
    isNaN(b)
  ) {
    return "ERROR";
  }

  const start = Math.min(a, b);
  const end = Math.max(a, b);

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(1, 4));
console.log(sumAll(10, 20));
console.log(sumAll(1, 100));
console.log(sumAll(2, 5));
console.log(sumAll(-1, 4));
console.log(sumAll(1, -4));
console.log(sumAll("A", 4));
console.log(sumAll("", "AB"));
console.log(sumAll(0, 4));
console.log(sumAll("1", 4));
console.log(sumAll(1.4, 4));
