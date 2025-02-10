# Tic-tac-toe Game

A modern, responsive implementation of the classic Tic-tac-toe game built with vanilla JavaScript. Play against a friend or challenge the computer!

## Features

- 🎮 Two game modes:
  - Human vs Human
  - Human vs Computer
- 📐 Customizable board sizes:
  - 3x3 (classic)
  - 4x4 (extended)
- 🎯 Smart win detection for all board sizes
- 🎨 Modern and responsive UI with animations
- 🔄 Game state management
- 🎉 Victory highlighting and animations

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Modular architecture

## How to Play

1. Choose your preferred board size (3x3 or 4x4)
2. Select a game mode:
   - Human vs Computer: Challenge the AI
   - Human vs Human: Play with a friend
3. Click "Start" to begin
4. Players take turns placing their symbol (X or O)
5. Win by completing a row, column, or diagonal
6. Click "New game" to start over

## Game Controls

- Click on any empty cell to place your symbol
- Use the "New game" button to reset the current game
- Click the back arrow (←) to return to mode selection

## Development

The game is built using a modular architecture with the following key components:

- `Board`: Manages game board state and win detection
- `Game`: Controls game flow and player interactions
- `GameState`: Handles game state and turn management
- `Player`: Defines player properties and actions
- `UI`: Manages DOM interactions and visual updates

## Installation

1. Clone the repository
2. Open `index.html` in your web browser
3. No build process required - just pure JavaScript!

## License

This project is licensed under the MIT License.
