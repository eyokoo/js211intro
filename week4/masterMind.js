'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const printBoard = () => {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

const generateSolution = () => {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = (guess) => {
  // your code here //go through each index position and compare with the solution
  let arraySolution = solution.split("")
  let arrayGuess = guess.split("")

  let rightPlace = 0
  let rightLetter = 0

  for (let i = 0; i < arraySolution.length; i++) {
    if (arraySolution[i] == arrayGuess[i]) {
      rightPlace ++
      arraySolution[i] = null
    }
  }

  for (let i = 0; i < arraySolution.length; i++) {
    let index = arraySolution.indexOf(arrayGuess[i])
    if (index >= 0) {
      rightLetter ++
      arraySolution[index] = null
    }
  }
  return `${rightPlace}-${rightLetter}`;
}

// 0 1 2 3 (index)
// n B C D (convertSolution)
// A C B D (convertGuess)


// if arraySolution's index 3 (D)  == arrayGuess index 3 (D)
//then it would add +1 to varaible rightPlace  but it doesnt so it would be 0

// 1 - rightLetter (hint)

//if arraySolution's index 0 (A) == arrayGuess index 0 (B)
// 



const mastermind = (guess) => {

  if (solution == guess) {   //check if the user guessed correctly,
    console.log(`You guessed it!`)
    return `You guessed it!`;   //if they did, print out that they won
  }

  let hint = generateHint(guess);   //if they did not win, generate the hint

  board.push(`${guess},${hint}`);  //print out the hint


  if (board.length > 9) { //if they have guessed 10 times so far, then tell them the answer
    console.log(`You ran out of tries! Here's the answer --> ${solution}`)
    return `You ran out of tries! Here's the answer --> ${solution}`;
  }
}

const getPrompt = () => {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}