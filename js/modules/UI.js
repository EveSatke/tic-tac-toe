export default class UI {
  constructor() {
    this.cells = document.querySelectorAll(".cell");
    this.status = document.querySelector(".info-text");
    this.resetButton = document.querySelector(".restart-button");
  }

  updateCell(index, symbol) {
    this.cells[index].innerText = symbol;
  }
  updateStatus(message) {
    this.status.innerText = message;
  }
  resetDisplay() {
    this.cells.forEach((item) => (item.innerText = ""));
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
