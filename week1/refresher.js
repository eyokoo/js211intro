// let name = "Emi"
// let favoriteNum = 27
// let isAlive = true;
// let address = {
//   street: "123 main street",
//   city: "austin",
//   state: "Texas",
//   zip: "78741"
// }

// let favFruits = ['Banana', 'Strawberry', 'Apple'];

// let x = 12;
// let y = 45;

// let z = x + y;
// console.log(z);

// let w = "45";
// let sum2 = x+ w;
// console.log(sum2);
// //this doesn't work because you can add a string to a number//

// let f1 = 'Bananas';
// let f2 = "Orange";
// let salad = f1+f2;
// console.log(salad); 
//concatination//

// print out a sentence, that introduces me//

// let sentence = `Hi my name is ${name} I love to eat  ${salad} smoothies.`

// console.log(sentence);

/** write a function, that will generate a happy b-day message
// this function should take in 3 variables
// name
// age*/

let age = 26
let birthdayMessage = (name, age) => {
  let message = `Hello ${name}, Oh my goodness, you turned ${age} today! Here's a promo code you can use in celebration of your birthday:)`

  return message;
}

let birthday1 = birthdayMessage ("Emi", 26);
console.log(birthday1)

let birthday2 = birthdayMessage ("Mr Smith", 102);
console.log(birthday2)

/**This funtion takes in the height and base of a triangle and returns the area
 * @param height of the triangle
 * @param base of the triangle
 * @return area of the triangle
 */

 let triangleArea = function(height,base){
  //  some code
  let area = (height * base) / 2;
  return area;
 }

 let answer1 = triangleArea (12,15);
 console.log(answer1);