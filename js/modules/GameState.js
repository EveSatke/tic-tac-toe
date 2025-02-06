export default class GameState {
  constructor(currentPlayer, winner) {
    this.currentPlayer = currentPlayer;
    this.isGameActive = true;
    this.winner = winner;
  }
  getCurrentPlayer() {
    return this.currentPlayer;
  }

  switchPlayer() {
    this.currentPlayer === "X"
      ? (this.currentPlayer = "O")
      : (this.currentPlayer = "X");
  }
  setGameOver(winner) {
    this.isGameActive = false;
    this.winner = winner;
    return this.winner;
  }

  setDraw() {
    this.isGameActive = false;
    this.winner = "draw";
  }
  reset() {
    this.currentPlayer = "X";
    this.isGameActive = true;
    this.winner = null;
  }

  isGameOver() {
    return !this.isGameActive;
  }
}
