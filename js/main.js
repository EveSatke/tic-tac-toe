import Game from "./modules/Game.js";
import Board from "./modules/Board.js";
import GameState from "./modules/GameState.js";
import UI from "./modules/UI.js";

class TicTacToe {
  constructor() {
    this.board = new Board();
    this.gameState = new GameState("X", null);
    this.ui = new UI();

    this.game = new Game(this.board, this.gameState, this.ui);
    this.game.init();
  }
}
document.addEventListener("DOMContentLoaded", () => {
  new TicTacToe();
});
