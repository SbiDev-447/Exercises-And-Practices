"use strict";

const redondearDecimal = (num) => {
  return Math.round(num * 10) / 10;
};

const convertToCelsius = (temp) => {
  return redondearDecimal((temp - 32) * (5 / 9));
};

const convertToFahrenheit = (temp) => {
  return redondearDecimal(temp * (9 / 5) + 32);
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(0));
