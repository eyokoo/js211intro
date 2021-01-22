// /**
//  * objects could be strings
//  * they can be added to arrays
//  * they have keys (properties) and values
//  * they can have any data type, numbers, strings, voolean, other objects, arrays
//  */

//  let myFriendName = 'John';
//  let myFriendAge = 36;
//  let myFriendsAddress = '123 Main Street Austin,TX 78704';
//  let myFriendIsMael = true;

//  let myFriend = {
//    name: 'John',
//    age: 36,
//    address: '123 Main Street Austin,TX 78704',
//    isMale: true,
//    bestFriend: false
//  }

//  let myOtherFriend = {
//   name: 'Jenny',
//   age: 39,
//   address: '987 Main Street Austin,TX 78704',
//   isMale: false,
//   bestFriend: true,
// }

// let friends = [{
//   name: 'John',
//   age: 36,
//   address: '123 Main Street Austin,TX 78704',
//   isMale: true,
//   bestFriend: false
// }
// ,
// {
//  name: 'Jenny',
//  age: 39,
//  address: '987 Main Street Austin,TX 78704',
//  isMale: false,
//  bestFriend: true,
// }
// ]


// //hi {name}, please text me when you get this.


// //generate the text for every friend in my array

// for(let index = 0; index < friends.length; index++){

//   let currentFriend = friends[index];

//   //hi {name}, please text me when you get this.

//   //generate the text for every friend in my array
//   let text = `Hi ${currentFriend.name}, please text me when you get this.`;
//   console.log(text);

// }



let fruit = [{
  name: 'apple', color: ["red", "green", "yellow"],
  properties: ["juicy", "tart", "sandy", "crunchy"]
},
{
  name: 'banana', color: ["yellow", "green", "black"],
  properties: ["squishy"]
},
{
  name: 'orange', color: ["orange"],
  properties: ["sour"]
},
{
  name: 'grape', color: ["green", "red", "black", "indigo"],
  properties: ["seedless", "juicy", "boozy"]
}]

//loop through the array of fruit,
//and print out the following description;

//for every fruit in the array print the following statement

//An {name} is an awesome fruit, that can be found in {number of colors} color.

// MY CODE:
// for (let i = 0; i < fruit.length; i++) {

//   let currentFruit = fruit[i];

//   if (fruit.color.length == 1) {

//     let singleText = `An ${currentFruit.name} is an awesome fruit, that can be found in ${currentFruit.color.length} color. Some unique attributes of ${currentFruit.name} is that they are  ${currentFruit.properties}.`;

//     console.log(singleText);
//   }
//   else {

//   }
//   let pluralText = `An ${currentFruit.name} is an awesome fruit, that can be found in ${currentFruit.color.length} colors. Some unique attributes of ${currentFruit.name} is that they are  ${currentFruit.properties}.`;

//   console.log(pluralText);
// }


for (let i = 0; i < fruit.length; i++) {

  let currentFruit = fruit[i];
  let numColors = currentFruit.color.length;
  let name = currentFruit.name;
  let properties = currentFruit.properties;

  let sentence = `The ${name} is an awesome fruit, that can be found in ${numColors}`;
  if(numColors >1){
    sentence += ' colors. ';
  } else{
    sentence += ' colors. ';
  }

  sentence += `Some of the unique properties of ${name}s is that they are ${properties}.`;

  // sentence = sentence + `Some of the unique properties of ${name}s is that they are ${properties.join(", ")}.`;
  console.log(sentence);

}