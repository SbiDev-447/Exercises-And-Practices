"use strict";

import promptSync from "prompt-sync";
const prompt = promptSync();

// ROCK-PAPER-SCIZZOR

const RPS = ["rock", "paper", "scizzor"];
let humanScore = 0;
let cpuScore = 0;
let option;

function getCpuChoise() {
  let cpu = Math.random() * RPS.length;
  let choise;
  if (cpu >= 2) {
    choise = "rock";
  } else if (cpu >= 1) {
    choise = "scizzor";
  } else {
    choise = "paper";
  }
  return choise;
}

function getHumanChoise() {
  console.log("WELCOME HUMAN, WHAT YOU PLAY TODAY?");
  let human = prompt("Choise 'rock', 'paper' or 'scizzor': ");
  let choise = human.toLowerCase();
  return choise;
}

function playRound() {
  while (option != 2) {
    console.log(`
/////////////////////////
 *          THE         *
 *  ROCK-PAPER-SCIZZOR  *
 *         GAME         *
/////////////////////////

Human: ${humanScore} | CPU: ${cpuScore}

    1) Play
    2) Exit
`);
    option = prompt("Choise: ");
    switch (option) {
      case "1":
        let humanC = getHumanChoise();
        let cpuC = getCpuChoise();
        if (humanC == cpuC) {
          console.clear();
          console.log(`\nEmpate\n`);
        } else if (
          (humanC == "rock" && cpuC == "scizzor") ||
          (humanC == "scizzor" && cpuC == "paper") ||
          (humanC == "paper" && cpuC == "rock")
        ) {
          console.clear();
          console.log(`\nThe Human Win to CPU, ${humanC} win ${cpuC}\n`);
          humanScore += 1;
        } else {
          console.clear();
          console.log(`\nThe CPU Win to Human, ${cpuC} win ${humanC}\n`);
          cpuScore += 1;
        }
        break;
      case "2":
        console.clear();
        console.log("\nGOOD BAY PLAYER\n");
        break;
      default:
        console.clear();
        console.log("INVALID CHOISE");
    }
  }
}

playRound();
