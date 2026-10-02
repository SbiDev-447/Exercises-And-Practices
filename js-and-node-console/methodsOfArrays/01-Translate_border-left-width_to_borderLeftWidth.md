"border-left-width" a "borderLeftWidth"

Escribe la función camelize(str) que transforme palabras separadas por guiones como "mi-cadena-corta" en su versión en camelCase "miCadenaCorta".

__Es decir:__ elimina todos los guiones, y cada palabra que esté después de un guión se convierte a mayúscula inicial (mayúscula la primera letra).

Ejemplos: 

- camelize("background-color") == 'backgroundColor';
- camelize("list-style-image") == 'listStyleImage';
- camelize("-webkit-transition") == 'WebkitTransition';

__Pista:__ usa `split` para dividir la cadena en un array, transfórmalo y vuelve a unirlo con `join`.

~~~ javascript

// puedes copiarlos en tu archivo .js y formar la función entorno a estas comprobaciones:
console.log(`First: ${camelize("background-color") == "backgroundColor"}`);
console.log(`Second: ${camelize("list-style-image") == "listStyleImage"}`);
console.log(`Third: ${camelize("-webkit-transition") == "WebkitTransition"}`);

~~~
