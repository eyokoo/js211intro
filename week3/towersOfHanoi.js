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
const movePiece = (startStack, endStack) => {
  // Your code here
  //this function should be responsible for moving a piece

  stacks[endStack].push(stacks[startStack].pop())
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
const isLegal = (startStack, endStack) => {
  // Your code here
  //should return true if the move is legal
  console.log(startStack + "," + endStack)
  if (!(stacks[endStack].length) || stacks[endStack][stacks[endStack].length - 1] > stacks[startStack][stacks[startStack].length - 1]) {
    return true;
  } else {
    return false;
  }
}

/**@returns true, if the board is in a winning state
 * or false if it is not
 */
const checkForWin = () => {
  // Your code here
  if (stacks["c"].length == 4 || stacks["b"].length == 4) {
    console.log(`You Win!`)
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
    return true;
  } else{
    return false;
  }
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
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack)
    checkForWin()
  } else {
    console.log(`Illegal Move Try Again!`)
  }
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

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}