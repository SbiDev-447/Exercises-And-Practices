# Filtrar por rango

Escribe una función filterRange(arr, a, b) que reciba un array arr, busque los elementos con valores mayores o iguales a a y menores o iguales a b, y devuelva el resultado como un array.

La función no debe modificar el array original. Debe devolver un nuevo array.

Por ejemplo:
~~~javascript

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (valores que coinciden)

alert( arr ); // 5,3,8,1 (no ha sido modificado)

~~~
