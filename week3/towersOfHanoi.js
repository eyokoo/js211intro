/**
 * 20pts - your code correctly moves pieces
 * 20pts - your code correctly detects
 */

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
/**
 * This function assumes that the move is legal and has already been checked
 * and all if does, is move the top element from the startstack, to the endstack
 * 
 * @param{*} startStack the name of the stack to "pop" the top element from
 * @param{*} endStack the name of the stack to "push" the element to
 */
const movePiece = () => {
  // Your code here
  //this function should be responsible for moving a piece
}


/**
 * This function returns true, if the move is a legal move,
 * or false if the move is not a legal move
 * NOTE: it does not actually move the piece
 * 
 * @param{*} startStack the name of the stack that the element is being moved from
 * @param{*} endStack the name of the stack that the element is being moved to
 * @returns true if the move is legal, false if the move is not legal
 */
const isLegal = () => {
  // Your code here
  //should return true if the move is legal
}


/**@returns true, if the board is in a winning state
 * or false if it is not
 */
const checkForWin = () => {
  // Your code here
}



/**This function is the brain and it drives 1 turn of the game
 * 
 * @param{*} startStack the name of the stack to move the piece from
 * @param{*} endStack the name of the stack to move the piece to
 */

//should play 1 round of tower of hanoi
const towersOfHanoi = (startStack, endStack) => {
  // Your code here

  //check if the move is legal
  
  //if the move is legal, then make the move
  //after you make the move, check if the board is in a win state
  //if the board is in a win state, then print a nice congrats message
}



const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();