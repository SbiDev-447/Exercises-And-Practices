// Crea una Calculadora Simple

import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

let a = 0;
let b = 0;

const sumar = (a, b) => {
  let sum = a + b;
  console.log(sum);
};

const restar = (a, b) => {
  let rest = a - b;
  console.log(rest);
};

const multiplicar = (a, b) => {
  let mult = a * b;
  console.log(mult);
};
const dividir = (a, b) => {
  let divi = a / b;
  console.log(divi);
};
const potenciar = (a, b) => {
  let poten = a ** b;
  console.log(poten);
};

let opcion;
do {
  //OPTIONS SWITCH
  console.log("\n==========================================");
  console.log("  Calculadora Básica ");
  console.log("==========================================");
  console.log("1. Sumar");
  console.log("2. Restar");
  console.log("3. Multiplicar");
  console.log("4. Dividir");
  console.log("5. Potenciar");
  console.log("6. Salir");
  opcion = prompt("Seleccione una opción: ");

  switch (opcion) {
    case "1":
      console.clear();
      a = Number(prompt("Primer Numero: "));
      b = Number(prompt("Segundo Numero: "));
      sumar(a, b);
      break;
    case "2":
      console.clear();
      a = Number(prompt("Primer Numero: "));
      b = Number(prompt("Segundo Numero: "));
      restar(a, b);
      break;
    case "3":
      console.clear();
      a = Number(prompt("Primer Numero: "));
      b = Number(prompt("Segundo Numero: "));
      multiplicar(a, b);
      break;
    case "4":
      console.clear();
      a = Number(prompt("Primer Numero: "));
      while (b == 0) {
        b = Number(prompt("Segundo Numero: "));
      }
      dividir(a, b);
      break;
    case "5":
      console.clear();
      a = Number(prompt("Primer Numero: "));
      b = Number(prompt("A que numero desea elevarlo?: "));
      potenciar(a, b);
      break;
    case "6":
      console.timeEnd;
      console.clear();
      break;
    default:
      console.log("Opcion no válida, intente de nuevo.");
  }
} while (opcion !== "6");
