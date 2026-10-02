let myvar = 0; // Declaramos la variable que va a tomar el valor de la suma
let a = 1;
let b = 0;
// a y b son los dos primeros numeros fibonacci (necesarios para crear la sucesión)

// Constatar que i solo va a ser la referencia del N° Fibonacci en el que vamos
for (let i = 1; i <= 50; i++) {
  myvar = a + b; // myvar coge la suma
  a = b; // decimos que a tome los valores de b
  b = myvar; // luego que b los de myvar

  // Esto resulta en que (a=1 + b=0) = 1; (a=0 + b=1) = 1; (a=1 + b=1) = 2; (a=1 + b=2) = 3 ...
  // y asi hasta repetir el ciclo 50veces

  console.log(myvar);
}
