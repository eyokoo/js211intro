//how do i execute callbacks

/**
 * this function will print a number, update it and print it again
 * @param{*} callback the function that defines how the number should be updated, takes in the original number
 * @param{*} number the number to print, and is passed to the callback to get updated
 * 
 */
let printAndUpdate = function(callback, number){
  
  console.log("The number before the update is", number);
  
  number = callback(number);

  console.log("The number after the update is", number);

}

//
// printAndUpdate(function(orig){
//   return orig*3;
// }, 4);


/**
 * 
 * @param {*} array the array to loop through
 * @param {*} callback the callback to execute on every element in the array
 */

 //for every loop in the array execute a callback
let myForEach = function(array, callback){
  //loop through the array that is passed in
  for(let i=0; i<array.length; i++){
    //and execute the callback function once for every element in the array
      callback(array[i],i)
  }
}

let fruit = ['apple','banana','clementine'];

myForEach(fruit,function(element){
  console.log(element);
});


