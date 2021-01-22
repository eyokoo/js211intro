/**what are they?
 *
 * loops through some code for however many times you specify, or until a certain is met
 *
 * run them on objects and arrays
 *
 * for of and for in loops, while loops, do-while, for loops
 *
 * they have 3-4 statements:
 * 1. a statement that is run before the loop starts, this is executed only once
 * 2. condition for when the loop should keep trying again. "should i go again?" --> true/false statements...if it resolves to true, then execute the iteration 1 more time
 * 3. the code that should be executed for every iteration
 * 4. what to do to prepare for the next iteration

        for(1;2;4){
          3
        }

        let us print the numers 1 thorugh 5
        1. sets a variable to hold the number 1
        2. ask if the variable is less than or eqials to 5
        3. print the variable
        4. increment the variable by 1

 */


//  for(let num = 1; num <= 5; num + 1 ){
//    console.log(num);
//  }

/*****
 * write a for loop, to print all the even numbers
 * between 1 and 100
 */

  // for(let i= 1; i <= 100; i=i+2){
  // console.log(i);
  // }

  // for(let i=1; i<= 100; i++){
  //   if(i % 2 === 0){
  //   }
  // }


//ACTIVITY*************
//  for the number 1, throught 45
// print fizz if the number is divisible by 3
// print buzz if the number is dividible by 5
// print fizzbuzz if the number is divisible by 3 and 5
// otherwise print the number

//Emi's code:
  // for(let i=1; i<=45; i++){
  //   if(i % 3 == 0 && i % 5 == 0){
  //   console.log("fizzbuzz")
  //   }else{
  //     if(i % 3 == 0)
  //       console.log("fizz")
  //         else{
  //           if(i % 5 == 0){
  //             console.log("buzz")
  //           }
  //           else{
  //             console.log (i);
  //           }
  //         }
  //       }
  //     }


  //instructor's code:
  for(let x = 1; x <= 45; x = x + 1){
      if(x % 15 == 0) {
          console.log("FizzBuzz");
        } else if (x % 3 == 0){
            console.log("Fizz");
          } else if (x % 5 == 0){
              console.log("Buzz");
            } else {
                console.log(x);
              }
              }
//has to be equal to zero because the remainder has to be equal to 0

//************************ */


