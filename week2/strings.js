let a = 12;
let e = -1;
let u = 3;
let i = 5;
let o = -2;


/**Write a function, that takes in 2 numbers, 
 * and returns the smallest non-negative number
 * what should i do if both umbers are negative? just pick one of them
 */

 let smallestNonNegative = function(num1,num2){
//if num1 is negative, return num2
  if(num1<0){
    return num2;
  }
// if num2 is negative, return num1
  if(num2 < 0){
    return num1;
  }
//otherwise, return the smaller of the two
  if(num1 < num2){
    return num1;
  } else{
    return num2;
  }
}

console.log(smallestNonNegative(a,i)); //5
console.log(smallestNonNegative(u,e)); //3
console.log(smallestNonNegative(e,o));



// let word = "bobcat";
/**
 * write a function, that will return the position of the first vowel 
 * using the function smallestNonNegative, and indexOf()
 * 
 * this function will return the position of the first vowel of the word
 * that is passed in. return -1 if there is no vowel
 * @param {string} word the word to look for the vowel in
 */

 let indexOfFirstVowel = function(word){
   let vowelIndex = -1;

   const aIndex = word.indexOf("a");
   const eIndex = word.indexOf("e");
   const iIndex = word.indexOf("i");
   const oIndex = word.indexOf("o");
   const uIndex = word.indexOf("u");

  vowelIndex = smallestNonNegative(vowelIndex, aIndex);
  vowelIndex = smallestNonNegative(vowelIndex, eIndex);
  vowelIndex = smallestNonNegative(vowelIndex, iIndex);
  vowelIndex = smallestNonNegative(vowelIndex, oIndex);
  vowelIndex = smallestNonNegative(vowelIndex, uIndex);
  
  return vowelIndex;

 }

 let word1 = "bobcat";
 let word2 = "meow";
 let word3 = "elephant";
 let word4 = "TskTsk";
 

 indexOfFirstVowel(word1);//1
 indexOfFirstVowel(word2);//1
 indexOfFirstVowel(word3);//0
 indexOfFirstVowel(word4);//-1


 let word = "car";

 let part1 = word.substring(0,1);
 console.log(part1);

 let part2 = word.substring(1);
 console.log(part2)

 //returns the part of the string between the start and end indexes, or to the end of the string//
 //we have a method that can be used to split the word, at a index//

 //write a function that will take in a single word (as a string)
 //and return the piglatin translation of the word

 /**
  * Rules:
  * if the word starts with a vowel, add ~yay to the end
  * example : egg -> eggyay, eplhant -> elephantyay
  * if the word has a vowel, then split the word into 2 parts at the vowel
  * then swap the 2 parts, then concat (add) ~ay to the end
  * example: fox -> f + ox -> oxf -> oxfay
  *   conditional -> c + onditional -> onditionalc -> onditionalcay
  * 
  * if the word has no vowel, then add -ay to the end
  * tsk -> tskay
  * pftt -> pfttay
  */