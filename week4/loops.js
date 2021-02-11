// 1. Use a do...while loop to console.log the numbers from 1 to 1000.
// let num = 0
// do{
//   num +=1;
// console.log(num)
// }while (num <1000)


// 2. Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female"

let person ={
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};


// 3. Create a function that logs out the keys of the object using Object.keys().

console.log(Object.keys(person));


// 4. Create a function that logs out the keys and values of the object using Object.entries().
console.log(Object.entries(person));


//5. Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
let arrayOfPersons = [{
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
},
{
  firstName: "Emi",
  lastName: "Yokoo",
  birthDate: "Jun 15, 1985",
  gender: "female"
},
{
  firstName: "Christian",
  lastName: "Mantilla",
  birthDate: "Jun 1, 1992",
  gender: "male"
},
{
  firstName: "John",
  lastName: "Smith",
  birthDate: "Mar 5, 1995",
  gender: "male"
},
];

//6. Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.

// FOR LOOP & IF:
    // for(i=0; i < persons.length; i++){
    // let oddYear = parseInt(persons[i].birthDate.slice(-4))
    // if(oddYear % 2 == 1){
    // console.log(oddYear)
    // }
    // };

for (const element of arrayOfPersons){
  let oddYear = parseInt(element.birthDate.slice(-4))
   if(oddYear % 2 == 1){
  console.log(oddYear)
  }
};

//7. Use .map() to map over the arrayOfPersons and console.log() their information.

let myFriend = (i) => {
  let friendName = [i.firstName,i.lastName,i.birthDate,i.gender].join(" ");
  return friendName;
}
console.log(arrayOfPersons.map(myFriend));


//8. Use .filter() to filter the arrayOfPersons array and console.log only males in the array.

const checkGender = arrayOfPersons.filter(i => i.gender == `male`);

console.log(checkGender)

//9. Create a function that returns true if the value of birthDate is before Jan 1, 1990.

const checkBirthDate = (element) => {
  let birthYear = parseInt(element.birthDate.slice(-4))
   if(birthYear < 1990){
     return true
  }
};

//10. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const checkYear = arrayOfPersons.filter(i => checkBirthDate(i))
console.log(checkYear)


// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.
// BONUS - .filter() out the people in the array who are younger than 21.