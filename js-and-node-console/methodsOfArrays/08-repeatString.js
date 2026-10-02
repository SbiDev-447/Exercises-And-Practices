"use strict";

function repeatString(str, iteral) {
  if (iteral < 0) {
    return "ERROR";
  }

  let myString = "";
  for (let i = 0; i < iteral; i++) {
    myString += str;
  }
  return myString;
}

console.log(repeatString("Hola", 5)); // "HolaHolaHolaHolaHola"
console.log(repeatString("hey", 3)); // "heyheyhey"
console.log(repeatString("", 3)); // ""
console.log(repeatString("Hola", 0)); // ""
console.log(repeatString("Hola", -5)); // "ERROR"
