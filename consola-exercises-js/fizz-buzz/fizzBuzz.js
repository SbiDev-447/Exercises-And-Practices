for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FIZZBUZZ!");
  } else if (i % 5 == 0) {
    console.log("BUZZ");
  } else if (i % 3 == 0) {
    console.log("FIZZ");
  } else {
    console.log(i);
  }
}

/*

  For con If Else If sencillo, Primero comparamos los casos con mayor necesidad de Igualdad
  y luego vamos desde los individuales hasta terminar en aquellos que no entran en las 
  especificaciones especiales y que pueden ser imprimidos como números tal cual.

*/

console.log("FINISH");
