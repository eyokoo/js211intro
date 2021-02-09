'use strict';

const assert = require('assert');

/**
 * 2 classes:
 * 
 * CrewMember
 * attribute title: titles of the crew member (captain, engineer, driver)
 * attribute name: name of the crew member
 * attribute assignedVehicle (for extra practice): the vehicle this crew is assigned to
 * 
 * 
 * Vehicle
 * attribute type:type of the vehicle (ship, bus, train)
 * attribute name: name of the vehicle
 * attribute assignedCrew: an array of crew members assigned to the vehicle
 * 
 * method isReady(): this method should return true, if the vehicle is ready to go.
 *          :a vehicle is ready to go, if there is the correct crewmember onboard the vehicle
 */

//for extra practice; a crew cannot be in more than 1 vehicle at a time

/**if you have extra time */
// let jobs = {
//   "Driver" : "Bus",
//   "Pilot" : "Plane",
//   "Engineer": "Train"
// };

class CrewMember {

  crewName;
  crewTitle;
  // assignedVehicle;

  constructor(inputCrewName, inputCrewTitle) {
    this.crewName = inputCrewName
    this.crewTitle = inputCrewTitle
  }
  // enterVehicle(vehicle) {
  //   //  add this crew member to the vehicle that is passed in
  //   //you should have the entire vehicle available
  //   //assign to crew member
  // }
}

class Vehicle {

  vehicleType;
  vehicleName;
  assignedCrew;

  constructor(inputVehicleName, inputVehicleType) {
    this.vehicleName = inputVehicleName
    this.vehicleType = inputVehicleType
    this.assignedCrew = [];
  }

  isReady() {
    //this method should return true, if the vehicle is ready to go.
    // a vehicle is ready to go, if there is the correct crewmember onboard the vehicle
    if(this.vehicleType === "Plane"){
      for(let i=0; i <= this.assignedCrew.length; i++){
        if(this.assignedCrew[i].crewTitle === "Pilot"){
          return true;
        }
        else{
          return false;
        }
      }
    }
    if(this.vehicleType === "Bus"){
      for(let i=0; i <= this.assignedCrew.length; i++){
        if(this.assignedCrew[i].crewTitle === "Driver"){
          return true;
        }
        else{
          return false;
        }
      }
    }
    if(this.vehicleType === "Train"){
      for(let i=0; i <= this.assignedCrew.length; i++){
        if(this.assignedCrew[i].crewTitle === "Engineer"){
          return true;
        }
        else{
          return false;
        }
      }
    }
  }

  addCrew(crew){
    this.assignedCrew.push(crew)
  }
}

let plane1 = new Vehicle("Big Bertha", "Plane");
let plane2 = new Vehicle("Tiny Tim", "Plane");

let train1 = new Vehicle("Thomas", "Train")
let bus = new Vehicle("Big Red", "Bus");

let c1 = new CrewMember("John", "Pilot");
let c2 = new CrewMember("MadMax", "Engineer");


// plane1.addCrew(c1)
// plane1.addCrew(c2)
// console.log(plane1.isReady())

// train1.addCrew(c2)

// console.log(bus.isReady()) 

if (typeof describe === 'function') {

  describe('CrewMember', () => {
    it('should have a name and title of the crew member', () => {
      const crew1 = new CrewMember ('John','Pilot');
      assert.equal(crew1.crewName, 'John');
      assert.equal(crew1.crewTitle,'Pilot');
    });
  });

  describe('Vehicle', () => {
    it('should have the type and name of the vehicle', () => {
      const vehicle1 = new Vehicle ('Tiny Tim','Plane');
      assert.equal(vehicle1.vehicleType, 'Plane');
      assert.equal(vehicle1.vehicleName,'Tiny Tim');
    });
  });

  describe('addCrew', () => {
    it('vehicle should be able to assign a crew member', () => {
      let crew1 = new CrewMember('John','Pilot');
      let vehicle1 = new Vehicle ('Tiny Tim','Plane');
      vehicle1.addCrew(crew1);
      assert.equal(vehicle1.addCrew.length,1);
    });
  });
}