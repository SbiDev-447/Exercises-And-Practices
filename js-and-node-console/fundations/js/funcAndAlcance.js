function convert(word1 = "", word2 = "") {
  let a = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(word1 + word2);
    } else if (i % 5 == 0) {
      console.log(word2);
    } else if (i % 3 == 0) {
      console.log(word1);
    } else {
      a++;
    }
  }

  return a;
}
/*
Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
  - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
  - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
  - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
  - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
  - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
*/
console.log(convert("Kame", "HameHA"));

/////////////////////// Funcion Sin Parametro Ni Retorno
function saludar() {
  console.log("HI JS");
}
saludar();

const saludar2 = () => {
  console.log("HELLOW WORLD!");
}; // Same function but in arrow syntax
saludar2();

///////////////////// Funcion Sin Parametros pero CON Retorno
function PI() {
  return 3.14159;
} // With Arrow =====> const PI = () => 3.14159

const pi = PI();
console.log(pi);

/////////////////// Funcion Con Parametros y SIN Retorno
function saludarAlguien(name = "", age = 0) {
  console.log(`Hello ${name}, you have ${age} years old`);
} // With Arrow ====> const sumar = (a, b) => a + b
saludarAlguien("Ana", 25);

////////////////// Funcion por Defecto (ES6)
function saluto(name = "Invitado", saludo = "Hola") {
  return `${name}, ${saludo}`;
}
console.log(saluto()); // Invitado Hola
console.log(saluto("Sbi")); // Sbi Hola
console.log(saluto("Sbi", "Buona Tarda")); //Sbi Buona Tarda

////////////////// Funciones que retornan otras funciones
function multiplicador(factor) {
  return function (numero) {
    return numero * factor;
  };
}

const duplicar = multiplicador(2);
const triplicar = multiplicador(3);

console.log(duplicar(5)); // 10
console.log(triplicar(5)); // 15

console.log(String(1233));

const x = 2;
function par(a = 0) {
  if (a % x == 0) {
    return "Es par";
  } else {
    return "No Es Par";
  }
}

console.log(par(8));
