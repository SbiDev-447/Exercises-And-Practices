"use strict";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

// Program:

let opcion;

do {
  //OPTIONS SWITCH
  console.log("\n==========================================");
  console.log("       Contact Agend                       ");
  console.log("==========================================");
  console.log("1. Buscar Un Contacto");
  console.log("2. Registrar Contacto");
  console.log("3. Editar");
  console.log("4. Eliminar");
  console.log("5. Salir");

  opcion = await rl.question("Elija Una Opcion: ");

  switch (opcion) {
    case "1":
      search();
      break;
    case "2":
      add();
      break;
    case "3":
      fixUpload();
      break;
    case "4":
      deleted();
      break;
    case "5":
      console.clear();
      rl.close();
      break;
    default:
      console.clear();
      console.log("Opcion no válida, intente de nuevo.");
  }
} while (opcion !== "5");
