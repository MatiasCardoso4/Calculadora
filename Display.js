import Calculadora from "./Calculadora.js";

export class Display {
  constructor(display, prevDisplay, currentDisplay) {
    this.display = display;
    this.prevDisplay = prevDisplay;
    this.currentDisplay = currentDisplay;
    this.prev = "";
    this.current = "";
    this.calculadora = new Calculadora();
    this.operador = {
      suma: "+",
      resta: "-",
      división: "/",
      multiplicación: "x",
    };
  }

  setDisplay() {
    this.prevDisplay.textContent = this.prev;
  }

  showNumbersOnDisplay(numero) {
    if (this.prev.includes(".") && numero === ".") return;

    this.prev += numero;
    this.setDisplay();
  }

  // showOperatorsOnDisplay(operador) {
  //   if (this.updateDisplay.includes(operador)) return;
  //   this.updateDisplay += this.operador[operador];
  //   this.setDisplay();
  // }
}
