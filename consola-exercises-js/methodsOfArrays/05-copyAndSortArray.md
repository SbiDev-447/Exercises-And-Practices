# Copiar y ordenar un array

Tenemos un array de strings arr. Nos gustaría tener una copia ordenada del mismo, pero mantener arr sin modificar.

- Crea una función copySorted(arr) que devuelva dicha copia.

~~~javascript

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (sin cambios)

~~~
