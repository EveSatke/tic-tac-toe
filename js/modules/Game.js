import Player from "./Player.js";

export default class Game {
  constructor(board, gameState, ui) {
    this.board = board;
    this.gameState = gameState;
    this.ui = ui;
    this.playerX = new Player("X");
    this.playerO = new Player("O");
    this.isAiTurn = false;
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
    if (this.isAiTurn) return;

    if (this.gameState.isGameActive && this.board.isValidMove(index)) {
      this.makePlayerMove(index);
      this.isAiTurn = true;
      if (!this.gameState.isGameActive) return;
      setTimeout(() => {
        this.makeAiMove();
        this.isAiTurn = false;
      }, 500);
    }
  }

  makePlayerMove(index) {
    const currentPlayer = this.gameState.getCurrentPlayer();
    this.board.makeMove(index, currentPlayer);
    this.ui.updateCell(index, currentPlayer);

    if (this.checkGameEnd(currentPlayer)) return;

    this.gameState.switchPlayer();
    this.ui.updateStatus(`Player ${this.gameState.getCurrentPlayer()} turn`);
  }

  makeAiMove() {
    const currentPlayer = this.gameState.getCurrentPlayer();
    const aiMoveIndex = this.board.makeAiMove(currentPlayer);
    if (aiMoveIndex !== null) {
      this.ui.updateCell(aiMoveIndex, currentPlayer);
      if (this.checkGameEnd(currentPlayer)) return;

      this.gameState.switchPlayer();
      this.ui.updateStatus(`Player ${this.gameState.getCurrentPlayer()} turn`);
    }
  }

  checkGameEnd(player) {
    const checkWinResult = this.board.checkWin(player);

    if (checkWinResult.isWin) {
      this.gameState.setGameOver(player);
      this.ui.highlightCells(checkWinResult.combination);
      this.ui.updateStatus(`Player ${player} wins!`, true);
      return true;
    }

    if (this.board.checkDraw()) {
      this.gameState.setDraw();
      this.ui.updateStatus("Game is a draw!", true);
      return true;
    }
    return false;
  }

  resetGame() {
    this.board.reset();
    this.gameState.reset();
    this.ui.resetDisplay();
    this.isAiTurn = false;
    this.ui.updateStatus(`Player ${this.gameState.getCurrentPlayer()} turn`);
  }
}
