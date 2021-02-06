/**
 * 2 classes:
 * 
 * CrewMember
 * attribute title: titles of the crew member (captain, engineer, driver)
 * attribute name: name of the crew member
 * method enterVehicle(vehicle): add this crew member to the vehicle that is passed in
 * **extra part** crew should know, which vehicle this instance is asigned to, --> attribute called assignedVehicle (the vehicle this crew is assigned to)
 * 
 * 
 * Vehicle
 * attribute type:type of the vehicle
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



 class CrewMember{

   constructor(){

   }

   assignVehicle(/**class... */){
    //you should have the entire vehicle available
    //assign to crew member
   }

   class Vehicle {

    constructor(){
    }
   
    isReady(){

    }
  
  }
 
  let plane1 = new Vehicle("Big Bertha", "Plane");
  let plane2 = new Vehicle("Tiny Tim", "Plane");

  let train1 = new Vehicle("Thomas", "Train")
  let bus = new Vehicle("Big Red", "Bus");

  let c1 = new CrewMember("John","Pilot");
  let c2 = new CrewMewmber("MadMax","Engineer");

  console.log(plane1.isReady())//false

  c1.assignVehicle(bus);
  console.log(bus.isReady()) //false
}