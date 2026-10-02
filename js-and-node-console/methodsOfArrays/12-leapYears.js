"use strict";

const leapYears = (year) => {
  if (year % 4 !== 0 || (year % 400 !== 0 && year % 100 === 0)) {
    return ` The year ${year} isn't a leap`;
  }
  return `${year} is a leap`;
};

console.log(leapYears(2000));
console.log(leapYears(1900));
console.log(leapYears(1982));
console.log(leapYears(1760));
console.log(leapYears(1540));
