"use strict";

const removeFromArray = (arr, ...args) => {
  return arr.filter((element) => {
    return !args.includes(element);
  });
};

console.log(removeFromArray([1, 2, 3, 4], 3));
