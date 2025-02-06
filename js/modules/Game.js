import Player from "./Player.js";

export default class Game {
  constructor(board, gameState, ui) {
    this.board = board;
    this.gameState = gameState;
    this.ui = ui;
    this.playerX = new Player("X");
    this.playerO = new Player("O");
  }

  start() {
    this.ui.addCellClickListener((cell, index) => {
      this.handleCellClick(index);
    });

    this.ui.addResetButtonListener(() => {
      this.resetGame();
    });

    this.ui.updateStatus(`Player ${this.gameState.getCurrentPlayer()} turn`);
  }

  handleCellClick(index) {
    if (this.gameState.isGameActive && this.board.isValidMove(index)) {
      const currentPlayer = this.gameState.getCurrentPlayer();

      this.board.makeMove(index, currentPlayer);
      this.ui.updateCell(index, currentPlayer);

      if (this.board.checkWin(currentPlayer)) {
        this.gameState.setGameOver(currentPlayer);
        this.ui.updateStatus(`Player ${currentPlayer} wins!`, true);
      } else if (this.board.checkDraw()) {
        this.gameState.setDraw();
        this.ui.updateStatus("Game is a draw!", true);
      } else {
        this.gameState.switchPlayer();
        this.ui.updateStatus(
          `Player ${this.gameState.getCurrentPlayer()} turn`
        );
      }
    }
  }
  resetGame() {
    this.board.reset();
    this.gameState.reset();
    this.ui.resetDisplay();
    this.ui.updateStatus(`Player ${this.gameState.getCurrentPlayer()} turn`);
  }
}
