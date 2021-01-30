'use strict'

let friends = [`john`, `jenny`, `jack`, `jill`];


/**
 * This is us defining what we want in an element
 * This function prints to the console whatever is passed to it
 * @param {*} something
 */

 let print = function(element, index){
   console.log(element, "is in position", index);
 }

 //this is how i would print every element myself
//  for(let i=0; i<friends.length; i++){
//    console.log(friends[i]);
//  }
//any function that you pass in to the forEach funtion must meet certain
//"contract" requirements
//1. the first input to the function passed in is the element of the array
//2. the second input to the function passed in is the index of the element in the array
//3. the third input to the function passed in is the array itself
 friends.forEach(print);

 friends.forEach = function(element, index){
  console.log(element, "is in position", index);
}




//ANOTHER EXAMPLE//
let students = ['mike', 'matt' , 'mary', 'marge'];

//Hi x, thanks for being in my class.

//for each method passing in a function in it:
students.forEach(function(element, index){
  console.log(`Hi ${element}, thanks for being in my class.`);
})

//when you pass a function to another function/method,
//the function being passed in, is generally called a "callback"

let numbers = [4,2,6,1,4,7,9,1,2,6,7]

/**
 * 1. use the forEach function, to print every number
 * 2. change the forEach function to only print the odd numbers
 */

  numbers.forEach(function(element,index){
    if(element % 2 !=0){ //the remainder of the element being devided by 2 is not 0
      console.log(element);
    }
    console.log()
  })

  //forEach, is used to perform 'instructions'
  //on every element of the array

  //filter, is used to filter "in" elements from the array

  let friends = ['John','Betty', 'Marge','Mark', 'James', 'Mary','Adam','Bob']

  /**
   * Writw a function, that takes in a string,
   * and returns true, if the first letter is an 'M'
   * and returns false, if the first letter is not an 'M'
   * */
  let startwithM = function(word){
    if(word[0] =='M'){
        return true;
    } else {
      return false;
    }
  }

  //OR////

  let startWithM = function(word){
    //if start with M, return true
    //else return false
    let startWithM = friends.filter((word) =>friends.startWithM("M"));

    console.log(startsWithM);

    if(element)
  }


//my original numbers
  let numbers = [2,3,6,2,4,6,9,3];

//filter down to just the odd numbers
  let odd = numbers.filter(function(element,index){
      if(element %2 == 0){
        return false;
      } else{
        return true;
      }
  })
//for every odd numnber print the sentence
  odd.forEach(function(element, index){
    console.log(element, "is an odd number");
  })


