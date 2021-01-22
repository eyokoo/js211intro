

// while( not done ){
//  do work
//  check to see if done
// }

// console.log("Before the loop");
// let number = 0;
// while(number < 4){
//   console.log(number)
// }
// console.log("After the loop");

/**
 * will keep printing 0 over and over
 * need to add number++ to do an increment statement*/

// console.log("Before the loop");
// let number = 0;
// while(number < 4){
//   console.log(number)
//   number++;
// }
// console.log("After the loop");

/** p1: before the loop starts
 * p2: condition to run to code
 * p3: the code you want to run
 * p4: prepare for the next iteration
 * 
 */
    // for(p1;p2;p4){
    //   p3;
    // }

//can do just forLoop and can do just whileLoop
    // p1
    // while(p2){
    //   p3;
    //   p3
    // }

  // whileLoops give an English expression that tell you "while (blank), keep going"
  //forLoop is good when you know ahead of time when/what the end is

/*********************** */
  //print the numbers 10 through 1 backwards
  //using while loop

// let i = 10;
// while(i >= 1){
//   console.log(i);
//   i--;
// }


let fruit = [
  'apple',
  'banana',
  'cucumber',
  'dragon fruit',
  'elderberry'
]

// console.log(fruit[0])
// console.log(fruit[1])
// console.log(fruit[2])
// console.log(fruit[3])
// console.log(fruit[4])

for(let i=0; i<=4; i++){
  console.log(i)
  console.log(fruit[i]);
}

/**same thing as above */
for(let i=0; i<fruit.length; i++){
  console.log(i)
  console.log(fruit[i]);
}

/**if i want to do "less than or equal to" then put in -1 after fruit.length*/
for(let i=0; i<=fruit.length-1; i++){
  console.log(i)
  console.log(fruit[i]);
}

