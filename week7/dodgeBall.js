const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

//when a person in arrOfPeople is clicked they will be removed from that array and pushed into the array listOfPlayers
//display the the players into the DOM as available players to pick.
//add a button to each new player that will allow each one to be selected for the blue or red team
//Use the this keyword to assign each player to a team with an onclick. Assign them to either Blue Team or Red Team.
// Display the two teams in a new list in the DOM with appropriate titles.
// Create 3 tests for your application.

const listOfPlayers = []
const blueTeamArray = []
const redTeamArray = []

class Player {
  constructor(id, name) { 
    this.id = id //declaring local attribute inside the class
    this.name = name
  }
}

//the color attribute will be passed into the Teammate class
class Teammate {
  constructor(color) {
    this.color = color
  }
}

//the pickTeam function, with teamColor and id passed in, will loop through two if() statments
const pickTeam = (teamColor, id) => {

  const findId = (element) => element.id === id

  if (teamColor === "Blue Team") { //if the "Blue Team" button is clicked then it will run through the below function
    let blueVariable = listOfPlayers.splice(listOfPlayers.findIndex(findId), 1) //using the findIndex() method we are looking for a specific id inside listOfPlayers and removing it...this method will be called blueVariable (couldnt think of a better name)
    let bluePlayer = new Player(blueVariable[0].id, blueVariable[0].name) //create a new Player class called bluePlayer to take in the id and name blueVariable
    blueTeamArray.push(bluePlayer) //adding the new Player class, bluePlayer, into the blueTeamArray[]
    blueTeamList = document.getElementById('blue') //the variable blueTeamList will get access to the element named 'blue' found in the DOM

    blueTeamList.innerHTML = ""; //clear the DOM before looping through to add to the blueTeamList

    blueTeamArray.forEach(player => { //.forEach() method is executing the below function for each array element in the blueTeamArray. Each element will have a new li element, with the player's name appended into the DOM
      const blueLi = document.createElement("li")
      blueLi.appendChild(document.createTextNode(player.name))
      blueTeamList.append(blueLi)
    })
  }

  if (teamColor === "Red Team") {
    let redVariable = listOfPlayers.splice(listOfPlayers.findIndex(findId), 1)
    let redPlayer = new Player(redVariable[0].id, redVariable[0].name)
    redTeamArray.push(redPlayer)
    console.log(redTeamArray)
    redTeamList = document.getElementById('red')

    redTeamList.innerHTML = ""; 

    redTeamArray.forEach(player => {
      const redLi = document.createElement("li")
      redLi.appendChild(document.createTextNode(player.name))
      redTeamList.append(redLi)
    })
  }
///////////this code below clears whats listed in the DOM under the id "players" 
  const listPlayers = document.getElementById('players')
  listPlayers.innerHTML = "";

  listOfPlayers.forEach(player => {
    const playerLi = document.createElement("li")
    const blueButton = document.createElement("button")
    blueButton.innerHTML = "Blue Team"
    const redButton = document.createElement("button")
    redButton.innerHTML = "Red Team"
    playerLi.appendChild(blueButton)
    playerLi.appendChild(redButton)
    playerLi.appendChild(document.createTextNode(player.name))
    listPlayers.append(playerLi)
/////////////////////////////////////
    blueButton.addEventListener('click', function () { pickTeam("Blue Team", player.id) })
    redButton.addEventListener('click', function () { pickTeam("Red Team", player.id) }) 
  })
}


const listPeopleChoices = () => {
  const listElement = document.getElementById('people') //the variable listElement is getting access to the element with the id "people" from the DOM
  arrOfPeople.map(person => { //.map() is recreating a new array of arrOfPeople to have a button, the name of the person and their skillset into a new list of array
    const li = document.createElement("li") //creates a new li element in the DOm
    const button = document.createElement("button") //creates a new button element in the DOM
    button.innerHTML = "Make Player" //the new button element will be called "Make Player"
    button.addEventListener('click', function () { makePlayer(person.id) }) //put in an eventListener so that everytime the button is clicked it runs the makePlayer function
    li.appendChild(button) //appends the new button elemenet as a child element into the new li element that was created
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
  console.log(arrOfPeople)
}

const makePlayer = (id) => { //this makePlayer function is removing people objects from arrOfPeople and adding them into the empty array listOfPlayers

  const findId = (element) => element.id === id //ASK YOUSIF WHAT THIS CODE DOES***
  
  const splicedIndex = arrOfPeople.splice(arrOfPeople.findIndex(findId), 1) //using the findIndex() method we are looking for a specific id inside arrOfPeople and removing it...this method will be called splicedIndex
  
  let addPlayer = new Player(splicedIndex[0].id, splicedIndex[0].name) //create a new Player class called addPlayer to take in the id and name of the splicedIndex variable.
  listOfPlayers.push(addPlayer) //using the push() method we add the addPlayer variable into the listOfPlayers array

  const listPlayers = document.getElementById('players') //the variable listPlayers is getting access to the element with the id "players" from the DOM
 
  listPlayers.innerHTML = ""; //clear the DOM before looping through to add to the listOfPlayers

  listOfPlayers.forEach(player => { //.forEach() method is executing the below function for each array element in the listOfPlayers array. Each element will have a new li element with two buttons, "Blue Team" and "Red Team", and the Player's name. 
    const playerLi = document.createElement("li") 
    const blueButton = document.createElement("button")
    blueButton.innerHTML = "Blue Team"
    const redButton = document.createElement("button")
    redButton.innerHTML = "Red Team"
    playerLi.appendChild(blueButton)
    playerLi.appendChild(redButton)
    playerLi.appendChild(document.createTextNode(player.name))
    listPlayers.append(playerLi)
    // the new elements that were generated from the forEach() method will be appended into the new li element, after a button is clicked and the pickTeam function is run. 
    blueButton.addEventListener('click', function () { pickTeam("Blue Team", player.id) })
    redButton.addEventListener('click', function () { pickTeam("Red Team", player.id) })
  })

}