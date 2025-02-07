export default class Board {
  constructor(size = 3) {
    this.size = size;
    this.board = Array(size * size).fill(null);
    this.winningCombinations = this.generateWinningCombinations();
  }

  generateWinningCombinations() {
    const combinations = [];
    const size = this.size;

    // Rows
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(i * size + j);
      }
      combinations.push(row);
    }

    // Columns
    for (let i = 0; i < size; i++) {
      const col = [];
      for (let j = 0; j < size; j++) {
        col.push(j * size + i);
      }
      combinations.push(col);
    }

    // Diagonals
    const diagonal1 = [];
    const diagonal2 = [];
    for (let i = 0; i < size; i++) {
      diagonal1.push(i * size + i);
      diagonal2.push(i * size + (size - 1 - i));
    }
    combinations.push(diagonal1, diagonal2);

    return combinations;
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
      const isWin = combination.every((index) => this.board[index] === player);
      if (isWin) {
        return { isWin: true, combination: combination };
      }
    }
    return { isWin: false, combination: null };
  }

  checkDraw() {
    return this.board.every((cell) => cell !== null);
  }

  reset() {
    this.board = Array(this.size * this.size).fill(null);
  }

  getCurrentState() {
    return this.board;
  }
}
