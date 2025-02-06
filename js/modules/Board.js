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
    return this.isValidMove(index)
      ? ((this.board[index] = symbol), true)
      : false;
  }

  makeAiMove(symbol) {
    const availableMoves = this.board
      .map((cell, index) => index)
      .filter((index) => this.board[index] === null);

    if (availableMoves.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableMoves.length);
      const moveIndex = availableMoves[randomIndex];
      this.board[moveIndex] = symbol;
      return moveIndex;
    }
    return null;
  }

  isValidMove(index) {
    return this.board[index] === null;
  }

  checkWin(player) {
    for (let combination of this.winningCombinations) {
      if (
        this.board[combination[0]] === player &&
        this.board[combination[1]] === player &&
        this.board[combination[2]] === player
      ) {
        return { isWin: true, combination: combination };
      }
    }
    return { isWin: false, combination: null };
  }

  checkDraw() {
    return this.board.every((cell) => cell !== null);
  }

  reset() {
    this.board = Array(9).fill(null);
  }

  getCurrentState() {
    return this.board;
  }
}
