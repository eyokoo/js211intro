//#1 .length 
let cars = ["Ford", "Nissan", "Toyota", "Ferrari"]
  console.log(cars.length)

//#2 .concat()
let moreCars = ["Subaru","Porche","Volzwagen","Honda"]

let totalCars = moreCars.concat(cars);
  console.log(totalCars);

//#3 .indexOf() and .lasIndexOf()
  console.log(totalCars.indexOf("Honda"));
  console.log(totalCars.lastIndexOf("Ford"));

//#4 .join()
let stringOfCars = cars.join();
  console.log(stringOfCars);

//#5 .split() split the string at every "," to put into its own indexes
let carsFromStrings = stringOfCars.split(",");
  console.log(carsFromStrings);

//#6 .reverse()
let carsInReverse = totalCars.reverse();
  console.log(carsInReverse);

//#7 .sort()
  console.log(carsInReverse.sort());
  console.log(carsInReverse.indexOf("Ferrari"));


//#8 .slice() 
//The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird'];
console.log(pets);
let reptiles = pets.slice(4, 6);
  console.log(reptiles);
  console.log(pets);

//#9 .splice() 
//The splice() method adds/removes items to/from an array, and returns the removed item(s)
let removedReptiles = pets.splice(4, 2, "hamster");
  console.log(removedReptiles);
  console.log(pets);

//#10 .pop()
let removedPet = pets.pop();
  console.log(pets)
  console.log(removedPet);

//#11 .push()
pets.push("bird")
  console.log(pets);

//#12 .shift()
pets.shift()
console.log(pets);

//#13 .unshift()
pets.unshift("turtle");
console.log(pets);

//#14 .forEach()
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

function addTwo (item,index,arr) {
  arr[index] = item + 2;
}

console.log(numbers)
numbers.forEach(addTwo)
console.log(numbers)