"use strict";

function reverseString(str) {
  return str.split("").toReversed().join("");
}

// split("") => transforma el string a array => toReversed() => lo invierte => join("") => reconvierte de array a string

console.log(reverseString("hello there")); // devuelve 'ereht olleh'
