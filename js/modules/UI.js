export default class UI {
  constructor() {
    this.cells = document.querySelectorAll(".cell");
    this.status = document.querySelector(".info-text");
    this.resetButton = document.querySelector(".restart-button");
    this.modeSelection = document.querySelector(".mode-selection");
    this.gameContainer = document.querySelector(".game-container");
    this.boardSizeButtons = document.querySelectorAll(".board-size-button");
    this.modeHumanButton = document.getElementById("human-vs-human");
    this.modeComputerButton = document.getElementById("human-vs-computer");
    this.modeButtons = document.querySelectorAll(".mode-button");
    this.startButton = document.querySelector(".start-button");
    this.boardSize = 3;
    this.board = document.querySelector(".game-board");
    this.setBoardSize(this.boardSize);
    this.changeModeButton = document.querySelector(".change-mode-button");
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

  showGame() {
    this.modeSelection.classList.add("hidden");
    this.gameContainer.classList.remove("hidden");
    this.changeModeButton.classList.remove("hidden");
  }

  highlightCells(combination) {
    if (combination) {
      combination.forEach((index) =>
        this.cells[index].classList.add("highlight")
      );
    }
  }

  toggleButtonSelection(clickedButton, buttonGroup) {
    buttonGroup.forEach((button) => {
      button.classList.remove("selected");
    });
    clickedButton.classList.add("selected");
  }

  addButtonSelectionListeners() {
    this.boardSizeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.toggleButtonSelection(button, this.boardSizeButtons);
        const size = button.textContent.startsWith("3") ? 3 : 4;
        this.setBoardSize(size);
      });
    });

    this.modeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.toggleButtonSelection(button, this.modeButtons);
      });
    });
  }

  resetDisplay() {
    this.cells.forEach((cell) => {
      cell.innerText = "";
      cell.classList.remove("game-over");
      cell.classList.remove("highlight");
    });
    this.status.classList.remove("game-end");
  }

  addHumanModeSelectionListener(callback) {
    this.modeHumanButton.addEventListener("click", callback);
  }

  addComputerModeSelectionListener(callback) {
    this.modeComputerButton.addEventListener("click", callback);
  }

  addStartButtonListener(callback) {
    this.startButton.addEventListener("click", callback);
  }

  addCellClickListener(callback) {
    this.cells.forEach((cell, index) => {
      cell.addEventListener("click", () => callback(cell, index));
    });
  }

  addResetButtonListener(callback) {
    this.resetButton.addEventListener("click", callback);
  }

  setBoardSize(size) {
    this.boardSize = size;
    this.board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    // Show/hide cells based on board size
    this.cells.forEach((cell, index) => {
      if (index < size * size) {
        cell.style.display = "flex";
      } else {
        cell.style.display = "none";
      }
    });
  }

  showModeSelection() {
    this.gameContainer.classList.add("hidden");
    this.modeSelection.classList.remove("hidden");
    this.changeModeButton.classList.add("hidden");
    this.resetDisplay();
  }

  addChangeModeButtonListener(callback) {
    this.changeModeButton.addEventListener("click", callback);
  }
}
