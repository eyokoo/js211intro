/**
 * Car class
 * -tanksize (how big the gas tank is)
 * -mpg (car's efficiency)
 * -fueLevel (current fuel level)
 * -odometer (distance driven)
 * 
 * drive(distance); drive the car the distance, and update the odometer and fuel level
 * addFuel(gallons): add fuel to the car, and update the fuel level
 * actualMpg(); returns the actual effciency for the car.
 */


class Car {
  tankSize;
  mpg;
  fuelLevel;
  odometer;

  constructor(tankSize, mpg) {
    this.tankSize = tankSize
    this.mpg = mpg
    this.fuelLevel = 0;
    this.odometer = 0;
  }

  addFuel(gallons) {
    //not checking that I am not overfilling the tank
    //this is your assignment...
    this.fuelLevel += gallons;
  }


  actualMpg() {
    if (this.odometer > 20000) {
      return this.mpg * .92;
    } else if (this.odometer > 10000) {
      return this.mpg * .95;
    } else {
      return this.mpg;
    }
  }
  drive(distance) {
    //not checking that i have enough fuel
    //this is your assignment...
    this.odometer += distance;
    let fuelUsed = distance / this.actualMpg();
    this.fuelLevel -= fuelUsed;
  }
}

/**Build a truck class which will extend the car class 
 * and add 1 attribute:
 * -isLoaded (true or false)
 * 
 * will add 2 methods
 * -load(); flip the loaded to true
 * -unload(); flip the loaded to false
 * 
 * we want to overide:
 * -actualMpg(); by making this method aware of the efficiency loss when the truck is loaded
 */

class Truck extends Car {
  isLoaded; //represents if my truck is full of dirt or not

  load() {
    this.isLoaded = true;
  }

  unload() {
    this.isLoaded = false;
  }

  actualMpg(){
    //if the truck is loaded, then just return 85% of the advertised efficiency
    if(this.isLoaded == true){
      return this.mpg * .85;
    } else{
    //otherwise, fall back to the parent classe's actualMpg() method
      return super.actualMpg();
    }
  }

}



let emisCar = new Car(11, 50);
for (let i = 0; i < 21; i++) {
  emisCar.addFuel(10);
  emisCar.drive(500);
}
// console.log("odometer: ", emisCar.odometer);
// console.log("actual mpg: ", emisCar.actualMpg());
// console.log("advertised mpg: ", emisCar.mpg);

let gilesTruck = new Truck(20, 25);
gilesTruck.addFuel(20); //add 20 gallons
gilesTruck.drive(50); //drive 50 miles

console.log("giles truck fuel level after driving 50 miles, unloaded", gilesTruck.fuelLevel); // less than 18 gallons

//gilesTruc.load() //load up with dirt
gilesTruck.drive(50);// dirve 50 miles

console.log('giles truck fuel level after driving 50 miles, loaded', gilesTruck.fuelLevel);

