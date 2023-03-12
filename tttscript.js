// Wait for the DOM to load before executing the code
document.addEventListener('DOMContentLoaded', function() {
    // Get all the cells on the board
    var cells = document.querySelectorAll('.cell');
    // Set up variables to keep track of whose turn it is and the current state of the board
    var currentPlayer = 'x';
    var gameState = ['', '', '', '', '', '', '', '', ''];
  
    // Add a click event listener to each cell on the board
    cells.forEach(function(cell, index) {
      cell.addEventListener('click', function() {
        // If the cell is already occupied, do nothing
        if (gameState[index] !== '') {
          return;
        }
  
        // Update the game state and the cell's text content
        gameState[index] = currentPlayer;
        cell.textContent = currentPlayer;
  
        // Check if the game is over
        if (checkForWin()) {
          alert('Player ' + currentPlayer + ' wins!');
          resetGame();
          return;
        }
  
        if (checkForTie()) {
          alert('It\'s a tie!');
          resetGame();
          return;
        }
  
        // Switch the current player
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
      });
    });
  
    // Check if the game is over
    function checkForWin() {
      // Check all possible winning combinations
      var winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      // Check if any of the winning combinations are true
      return winningCombos.some(function(combo) {
        return gameState[combo[0]] !== '' && gameState[combo[0]] === gameState[combo[1]] && gameState[combo[1]] === gameState[combo[2]];
      });
    }
  
    // Check if the game is a tie
    function checkForTie() {
      // If any cells are empty, the game is not a tie
      return gameState.every(function(cell) {
        return cell !== '';
      });
    }
  
    // Reset the game state and the cells on the board
    function resetGame() {
      gameState = ['', '', '', '', '', '', '', '', ''];
      cells.forEach(function(cell) {
        cell.textContent = '';
      });
      currentPlayer = 'x';
    }
  });
  