# Filtrar por rango "in place" (en el mismo lugar)

Escribe una función filterRangeInPlace(arr, a, b) que reciba un array arr y elimine de él todos los valores excepto aquellos que estén entre a y b. La prueba es: a ≤ arr[i] ≤ b.

- La función solo debe modificar el array. No debe devolver nada.

Por ejemplo:

~~~javascript

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // elimina los números excepto los del 1 al 4

alert( arr ); // [3, 1]

~~~
