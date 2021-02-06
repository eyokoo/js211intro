//you can use them as templates
//it is an easier way to create multiple obkects with the same properties
//there is built in methods and you can also create methods of your own

//the concept of a constructor

//diff between methods and functions


let assert = require("assert");
const { truncateSync } = require("fs");


class Car {
  //what is the efficiency of this car
  mpg;
  //the capacity of the gas tank in gallons
  tankCapacity;
  //current fuel level in gallons - how much gas my car has
  fuelLevel;
  //the id for this car
  id;
  //number of miles the car has travelled
  odometer;


  //this is the constructor
  //this method gets called, when the new instance is constructed

  constructor(inputMpg, inputTankCapacity) {
    //generate a random number between 0 and 1
    //multiply the number by 1000 to shift the decimal 4 places
    //round down, to get a whole number
    let randomNumber = Math.floor((Math.random() * 10000))
    this.id = randomNumber;

    this.tankCapacity = inputTankCapacity; //argument that is passed into the constructor
    this.mpg = inputMpg;

    this.fuelLevel = 0;
    this.odometer = 0;
  }
  //drive, affects fuel level and odometer
  //fuel up: affects fuel level

  //write a method tht will 'simulate' fueling up 
  /**
   * method will add gallons to fuel our tank
   * @param{*} gallons number of gallons of fuel to add
   */
  
  //our car is still letting you ride in an empty tank -- fix it!
  //you should not be able to drive more than what you have in your tank
  fuelUp(gallons) {
    
    let newGasLevel = this.fuelLevel + gallons;
    if (newGasLevel <= this.tankCapacity) {
      this.fuelLevel == newGasLevel;
      return this.fuelLevel;
    } else {
      console.log(`Gas tank will overfill!`);
    }
  }

  /**
   * This method returns the number of miles this car can drive before it runs out of gas
   */
  milesToEmpty() {
    //if my car is 26mpg car, and it has 1 gallon: 26 miles
    //if my car is 26mpg car, and it has 2 gallon: 52 miles
    //if my car is 26mpg car, and it has .5 gallon: 13 miles
    return this.mpg * this.fuelLevel;
  }

  /**
   * drive the car for a certain number of miles,
   * and update the fuel tank and odometer accordingly
   * @param distance: number of miles to drive
   */
  drive(distance) {
    this.odometer = this.odometer + distance;

    let fuelUsed = distance / this.mpg;
    this.fuelLevel = this.fuelLevel - fuelUsed;

    //mpg:20
    //fuelLevel: 10 gallons
    //drive: 20 miles
    //used up: 1 gallon

    //mpg:20
    //fuelLevel: 10 gallons
    //drive: 10 miles
    //used up: .5 gallon
  }
  
  //our car can drive forever -->fix it!
  //you shouldnt be able to add more gas than what  the tank can hold
  emptyFuel() {
    if (this.fuelLevel > 0) {
      return true;
    } else {
      return false;
    }
  }
}

let pinto = new Car(26, 11); // 26mpg car
console.log("After constructor", pinto);
pinto.fuelUp(27); //add 3 gallons of gas
console.log("After fueling up", pinto.fuelLevel, "gallons");
pinto.drive(13); // drive 13 miles
console.log("After driving,", pinto.fuelLevel, "gallons is the amount of fuel we have left."); //2.5 gallons left
console.log(pinto.emptyFuel());
console.log("After driving , the odometer reads", pinto.odometer, "miles."); //13 miles


// console.log("pinto constructed as ", pinto);
// // pinto.mpg = 26;
// // pinto.tankCapacity = 11;
// // pinto.id = 1;
// console.log("After all the properties are set ", pinto);

// let perla = new Car();
// perla.mpg = 45;
// perla.id = 2;
// perla.tankCapacity = 12;

// console.log(perla);


// describe("test set1", function () {
//   it("not over fill", function () {

//     let c1 = new Car(10, 2);
//     c1.addFuel(100);

//     let expected = 2;
//     assert.equal(c1.fuelLevel, expected);
//   })
//   it("not drive past empty", function () {
//     let c2 = new Car(10, 2);
//     c2.addFuel(2);
//     c2.drive(1000);

//     assert.equal(c2.odometer, 20);
//     assert.equal(c2.fuelLevel, 0);
//   })

// })


