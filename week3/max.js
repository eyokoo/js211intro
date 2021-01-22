/**
 * 1. Look at your list if your list has no numbers, then declare that the list is empty and there is no largest number to an empty list, and you are done
 * 2. If your list has atleast 1 numbers, then write the first number on the list on a peice of paper
 * 3. look at the next number on the list, and remeber it (we will refer to this number as "next number")
 * 4. compare "next number" to the number written down.
 * 5. if the "next number" is bigger than the number on our peice of paper, then erase the number on the paper, and write down 'next number' on the paper
 * 6. if the "next number" is not bigger than the number on the peice of paper, then do nothing
 * 7. repeat steps 3 through 6 untill there are no more numbers
 * 8. declare that the number on the peice of paper is the bigest number in the list
 */
  /**
   * This function takes in an array of numbers and returns the largest number in the array
   * if the array is empty, return null
   * 
   * @param {array} numbers : is an array of number
   * @returns largest number in the array, null if the array is empty or undefined
   *
   */

   let largest = (numbers) =>{
    // #1. checks for a null or undefined variable, if the array is empty
    if(!numbers){
      return null;
    }  
    // #1. explicitly check if the array is empty
    if(numbers.length == 0){
      return null;
    }

    // #2. write down the first number 
    let piecePaper = numbers[0];

    // #2. loop through all the subsequent numbers in the array
    for(let index = 1; numbers.length; index ++){
     // #3.
      let nextNumber = numbers [index];

      if(nextNumber > piecePaper){
        piecePaper = nextNumber;
      } else{
        //do nothing since the number on piece of paper is bigger

      }
      // at this point, we have looked at every number, and saved off the biggest on in the piece of paper.
      //so just return piecePaper
    }
    return piecePaper;

   }

   let test1 = [] //null

   let test2 = undefined; //null

   let test3 = [1,2,3,2,61,23,4,5,6,7,7,8,98,76,54,33] //98

   let test4 = [12]; //12

   let test5 = [-123,123,-12,-3,1,5] //123

   let test6 = [1,2,3,3,3,3,] //3