'use strict'

let tall = true;
let handsome = true;


/**
 * Create a function that takes in
 * 2 inputs
 * @pram {Boolean} handsome
 * @pram {Boolean} tall
 * @returns some exclamation based on the different criteria for handsome and tall
 * 
 */
// if they are handsome and tall return "You hit the genetic jackpot"
// if they are not handsome and not tall return "Man tough luck"
// if they are either handsome or tall, but not both "It can be worse!"

const check = (handsome,tall)=>{
if (tall && handsome){
  return "you hit the jackpot";
} else if (tall || handsome){
  return "could be worse";
} else {
  return "tough luck";
}
}

const checkEmi = (handsome,tall)=>{
  if(handsome && tall) {
    return "Jackpot";
  }
  if(!handsome && !tall){
    return "tough luck"
  }
  if(handsome || tall) {
    return "could be worse";
  }
}

let output1 = checkEmi (true,true);
console.log("true and true =", checkEmi(true,true));
console.log("true and false =", checkEmi(true,false));
console.log("false and false =", checkEmi(false,false));



// if(tall && handsome) {
//     console.log("yes please");
// } else if (tall || handsome) {
//     console.log("sure thing")
// } else {
//     console.log("i am not sure");
// }

// let grade = 102

// if(grade >= 90){
//   // if the predicte is true, then this code runs
//     console.log("You made an A")
// } else if (grade >= 80) {
//     console.log("you made a B")
// }else if (grade >= 75) {
//     console.log("you made a C")
// }else if (grade >= 70) {
//     console.log("you made a C")
// }

/**
 * if you are single, and make less than 75000, you get $600
 * if you are married and together make less than 150000, you get $1200
 * for every child you have you get an additional $600
 * 
 */
/**
 * @param {number} income : the household income
 * @param {boolean} married: true if married, false if single
 * @param {number} numDependents : the number of dependents
 * @return your stimulus check amount base on the rules above
 */

function Stimulus(income, married, numDependents) {
  if (married === true) {
  if (income < 150000) {
    return (1200 + numDependents*600)
  } else {
  let limit = ((1200 + numDependents*600)-((income-150000)/100))
  if (limit >= 0) {
    return limit
  } else {
  return 0
  }
  }
  } else {
  if (income < 75000) {
    return (600 + numDependents*600)
  } else {
  let limit = ((600 + numDependents*600)-((income-75000)/100))
  if (limit >= 0) {
    return limit
  } else {
    return 0
  }
  }
  }
  }

  console.log(Stimulus(200000, true,1))
  console.log(Stimulus(200000, true,1))
  console.log(Stimulus(200000, false,0))
  console.log(Stimulus(200000, false,0))


  