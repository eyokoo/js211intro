//they use square brackets
//they hold strings, number, objects, booleans
//

// let fruit = [`apple`, `banana`, `cucumber`, `dragon fruit`];   

// if i want to swamp apple with another fruit

// fruit[0] = `berry`;

// consolelog(fruit[0]);

/**
 * write a function that takes in an array 
 * return true if the first 3 elements in the array are the same
 */

let same3 = (fruit) => {
  if(fruit.length > 3){

//if my basket has less than 3 fruit,
//and then the second is equal to the third,
//and the first is not empty
//then return true
  if (fruit[0] === fruit[1] && fruit[1] === fruit[2] && fruit[0] !=``) {
    return true;
  }

  return false;
}
}

/**want a function that will put a fruit in the position passed in
 * 
 * @param {*} position the position to add the fruit to
 * @param {*} toAdd the fruit that we need to add
 * @param {*} theFruitArray the array to add the fruit to
 */

 let addFruit = function(position, toAdd, theFruitArray){
   theFruitArray[position] = toAdd;
   //fruit[0] = `apple // emi gave me this earlier
 }


const assert = require (`assert`);

if(typeof describe == 'function'){

describe('array size 3', function () {
  it("all the same", function () {
  let actual = same3(['apple', 'apple', 'apple']);
  let expected = true;
  assert.equal(actual, expected)
  })
  
  it("2 the same", function () {
  let actual = same3(['apple', 'banana', 'apple']);
  let expected = false;
  assert.equal(actual, expected)
  })
  
  it("all different ", function () {
  let actual = same3(['kiwi', 'banana', 'apple']);
  let expected = false;
  assert.equal(actual, expected)
  })
  })
  
  describe('array bigger than 3', function () {
  it("first 3 the same", function () {
  let actual = same3(['apple', 'apple', 'apple', 'banana']);
  let expected = true;
  assert.equal(actual, expected)
  })
  
  it("first 3 different the same", function () {
  let actual = same3(['apple', 'banana', 'kiwiw', 'mellon']);
  let expected = false;
  assert.equal(actual, expected)
  })
  
  })
  
  describe('array less than 3', function () {
  it("size 2 ", function () {
  let actual = same3(['apple', 'banana']);
  let expected = false;
  assert.equal(actual, expected)
  })
  
  it("first 2 the same", function () {
  let actual = same3(['apple', 'apple']);
  let expected = false;
  assert.equal(actual, expected)
  })

})
}

let basket = [];
addFruit(0, `apple`, basket);
console.log(basket);

