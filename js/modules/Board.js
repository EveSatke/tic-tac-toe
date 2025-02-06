export default class Board {
  constructor() {
    this.board = Array(9).fill(null);
    this.winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }
  makeMove(index, symbol) {
    if (this.isValidMove(index)) {
      this.board[index] = symbol;
      return true;
    } else {
      return false;
    }
  }

  isValidMove(index) {
    return this.board[index] === null;
  }

  checkWin(player) {
    for (let combination of this.winningCombinations) {
      if (
        this.board[combination[0]] === player.symbol &&
        this.board[combination[1]] === player.symbol &&
        this.board[combination[2]] === player.symbol
      ) {
        return true;
      }
    }
    return false;
  }

  checkDraw() {
    this.board.every((item) => item !== "null");
  }

  reset() {
    this.board.forEach((item) => (item = ""));
  }

  getCurrentState() {
    return this.board;
  }
}
