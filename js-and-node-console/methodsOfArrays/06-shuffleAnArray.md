# Mezclar un array

- Escribe la función shuffle(array) que mezcle (reordene aleatoriamente) los elementos del array.

Múltiples ejecuciones de shuffle pueden dar lugar a diferentes órdenes de los elementos. Por ejemplo:

~~~ javascript

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...

~~~

Todos los órdenes de los elementos deben tener la misma probabilidad. Por ejemplo, [1,2,3] puede reordenarse como [1,2,3] o [1,3,2] o [3,1,2], etc., con la misma probabilidad en cada caso.

---

**¡Buena suerte! 🍀 Recuerda:** Debes modificar el array original (no devolver uno nuevo) y asegurarte de que todas las permutaciones sean igualmente probables.

