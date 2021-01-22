'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// creates and empty "board" for the user to see where marks can be placed.
// using let because the variable is expected to change with more 'X's and 'O's to add
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// assigns the first mark as 'X'
// using let because the variable is expected to change from 'X' to 'O' and back
let playerTurn = 'X';


// is a function that print the current status of the board using the variable - board
const printBoard = () => {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

const horizontalWin = () => {

  if (
    (board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') ||
    (board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') ||
    (board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X') ||
    (board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O') ||
    (board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O') ||
    (board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O')
    // (board[0][0] == board[0][1] && board[0][0] == board[0][2]) ||
    // (board[1][0] == board[1][1] && board[1][0] == board[1][2]) ||
    // (board[2][0] == board[2][1] && board[2][0] == board[2][2])
  ) {
    return true;
  }
}
const verticalWin = () => {
  if (
    (board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') ||
    (board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') ||
    (board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X') ||
    (board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O') ||
    (board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O') ||
    (board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O')
    // (board[0][0] == board[1][0] && board[0][0] == board[2][0]) ||
    // (board[0][1] == board[1][1] && board[0][1] == board[2][1]) ||
    // (board[0][2] == board[1][2] && board[0][2] == board[2][2]) 
  ) {
    return true;
  }
}

const diagonalWin = () => {
  if (
    (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') ||
    (board[2][0] == 'O' && board[1][1] == 'O' && board[0][2] == 'O') ||
    (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') ||
    (board[2][0] == 'X' && board[1][1] == 'X' && board[0][2] == 'X')
    // (board[0][0] == board[1][1] && board[0][0] == board[2][2]) ||
    // (board[2][0] == board[1][1] && board[2][0] == board[0][2])
  ) {
    return true;
  }
}

const checkForWin = () => {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    return true;
  }
}

const ticTacToe = (row, column) => {
  if (board[row][column] == ' ') {
    board[row][column] = playerTurn;
    if (checkForWin() == true) {
      console.log('Congrats! Player ' + playerTurn + ' wins!')
    }
    if (playerTurn == 'X') {
      playerTurn = 'O'
    } else {
      playerTurn = 'X'
    }
  } else {
    console.log("This space is taken - try again!")
  }
}

const getPrompt = () => {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [[' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' ']]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' ']]);
    });
    it('should check for vertical wins', () => {
      board = [[' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' ']];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' ']];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X']];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      ticTacToe(0, 0)
      ticTacToe(0, 1)
      ticTacToe(1, 1)
      ticTacToe(0, 2)
      ticTacToe(2, 2)
      assert.equal(checkForWin(), true);
    });
  });


  //additional test for RPS
// describe(`RPS Unit Test Assignment`,function(){
//   it(`should handle bad input`, function(){
//     let actual = rockPaperScissors(`Boot`, `Roach`);
//     let expected = `Boot`;
//     assert.equal(actual,expected);
//   })

//   it(`Should Handle Vulgar Language`, function(){
//     let actual = rockPaperScissors("private parts", "other private parts");
//     let expected = "No bad language please";
//     assert.equal(actual,expected);
//   })

//   it('should handle types of element', function(){
//     let actual = rockPaperScissors("emerald", "rice paper");
//     let expected = "Invalid input";
//     assert.equal(actual,expected);
//   })

//   it('should handle numbers', function(){
//     let actual = rockPaperScissors("0", "2");
//     let expected = "Please use words, not numbers";
//     assert.equal(actual,expected);
//   })

// it('should handle incorrect spelling', function(){
//     let actual = rockPaperScissors("roc", "sissors");
//     let expected = "Please check your spelling:)";
//     assert.equal(actual,expected);
//   })
// })

} else {

  getPrompt();

}

