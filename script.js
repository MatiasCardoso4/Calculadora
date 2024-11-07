import { Display } from "./Display.js";

const numeros = document.querySelectorAll(".numero");
const operadores = document.querySelectorAll(".operador");
const prevDisplay = document.querySelector(".prev-display");
const currentDisplay = document.querySelector(".current-display");

const newDisplay = new Display(prevDisplay, currentDisplay);

numeros.forEach((numero) => {
  numero.addEventListener("click", () =>
    newDisplay.showNumbersOnDisplay(numero.innerHTML)
  );
});

operadores.forEach((operador) => {
  operador.addEventListener("click", () =>
    newDisplay.showOperatorsOnDisplay(operador.innerHTML)
  );
});
