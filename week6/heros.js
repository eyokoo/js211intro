/**
 * Simple class that represents a person
 * -name attribute that holds the person name
 * -job attribute that holds the persons' title and name
 * 
 */


//parent class or base class
class Person {

  name;
  title;

  constructor(inputName, inputTitle) {
    this.name = inputName
    this.title = inputTitle
  }
  hi() {
    return `Hi my name is ${this.name}. Nice to meet you!`;
  }

}

//child class
class Hero extends Person {

  superpower;

  constructor(inputName, inputTitle, inputSuperpower) {

    super(inputName, inputTitle) // pass the 2 attributes to be handles by the base classes constructor
    this.superpower = inputSuperpower
  }
}

class Villains extends Person {

  weakness;

  constructor(inputName, inputWeakness) {
    super(inputName, "Villains") //using the super keyword is how you call the parent class's constructor
    this.weakness = inputWeakness
  }

  //method overiding 
  hi() {
    return `I am ${this.name}. This is going to be a bad day for you!`;
  }
}

let mike = new Person("Mike", "Trainer");
let batman = new Hero("Bruce", "Hero", "Resourceful");
let greenGoblin = new Villains("Green Goblin", "Spiderman")

console.log(mike.hi());
console.log(batman.hi());
console.log(greenGoblin.hi());

