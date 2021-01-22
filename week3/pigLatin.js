// console.log("Loading JS file")

// // let translate = () =>{
// //   console.log("The button got clicked");
// // }

// //get the button element from the DOM
// let button = document.getElementById("inputButton");

// //attach the function to the 'click' event.
// //so when the button is clicked, the function gets called

// button.addEventListener('click',function(){
//   console.log("button got clicked")

// //get the input element from the DOM
//   let inputBox = document.getElementById("inputBox");

//   // read the actual input from the input element
//   let input = inputBox.value;
  
//   //console log the input, just to check and debug
//   console.log("the user entered", input);

//   //call the function to do the translation
//   let pigWord = pigLatin(input);

//   //grab the span that holds the translation from the DOM
//   let span = document.getElementById("translation");

//   //update the inputted word
//   span.innerText = pigWord;
// })


//get the button element from the DOM...dont need this??
// let inputButton = document.getElementById("inputButton")

inputButton.addEventListener ('click', function(){

  //we call the input element from the DOM
  let inputBox = document.getElementById("inputBox");

  let span = document.getElementById("translation");

  span.innerText = pigLatin(inputBox.value);
})


const pigLatin = (word) => {
  let cleanWord = word.trim().toLowerCase();

  let translation = "";
  
  let smallestNonNegative = (num1,num2) => {
    //if num1 is negative, return num2
      if(num1 < 0){
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

    let indexOfFirstVowel = (word) =>{
      let vowelIndex = -1; //to set as default

      //indexOf --> finds where the character appears is in the word.. in this case vowels
      //indexOf will give us the position of the vowel in a numeric value
      const aIndex = word.indexOf("a");
      const eIndex = word.indexOf("e");
      const iIndex = word.indexOf("i");
      const oIndex = word.indexOf("o");
      const uIndex = word.indexOf("u");
   

      //reasigning the vale of the variable vowelIndex
     vowelIndex = smallestNonNegative(vowelIndex, aIndex);
     vowelIndex = smallestNonNegative(vowelIndex, eIndex);
     vowelIndex = smallestNonNegative(vowelIndex, iIndex);
     vowelIndex = smallestNonNegative(vowelIndex, oIndex);
     vowelIndex = smallestNonNegative(vowelIndex, uIndex);
     
     return vowelIndex;
    }
// we create a variable named vowel which equals indexOfFirstVowel with cleanWord passed into it
    let vowel = indexOfFirstVowel(cleanWord);

  // part one: if word begins with a vowel
  if(vowel == 0){
    translation = cleanWord + "yay";

    return translation;
  } 
   //second part: if the word doesnt start with a vowel
  else{
    //.substring helps to separate the word from where the first vowel is found
    translation = cleanWord.substring(vowel) + cleanWord.substring(0,vowel) + "ay";

    return translation;
  } 
}