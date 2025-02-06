export default class UI {
  constructor() {
    this.cells = document.querySelectorAll(".cell");
    this.status = document.querySelector(".info-text");
    this.resetButton = document.querySelector(".restart-button");
  }

  updateCell(index, symbol) {
    this.cells[index].innerText = symbol;
  }
  updateStatus(message, isGameEnd = false) {
    this.status.innerText = message;
    if (isGameEnd) {
      this.status.classList.add("game-end");
      this.cells.forEach((cell) => cell.classList.add("game-over"));
    } else {
      this.status.classList.remove("game-end");
    }
  }

  highlightCells(combination) {
    if (combination) {
      combination.forEach((index) =>
        this.cells[index].classList.add("highlight")
      );
    }
  }

  resetDisplay() {
    this.cells.forEach((cell) => {
      cell.innerText = "";
      cell.classList.remove("game-over");
      cell.classList.remove("highlight");
    });
    this.status.classList.remove("game-end");
  }
  addCellClickListener(callback) {
    this.cells.forEach((cell, index) => {
      cell.addEventListener("click", () => callback(cell, index));
    });
  }
  addResetButtonListener(callback) {
    this.resetButton.addEventListener("click", callback);
  }
}
