'use strict'

let getButton = document.getElementById("getUsersButton");

getButton.addEventListener('click', function () {
  let fetchResult = fetch("https://randomuser.me/api/?results=5");


  let jsonResponse = fetchResult.then(function (response) {
    //make the api call, and get a promise, to connect our call back to
    return response.json();
  })


  jsonResponse.then(function (json) {
    //print out the first name of the user
    console.log("json =", json["results"]);
    // console.log("Number of users", json.results.length);

    for (let i = 0; i <= json.results.length; i++) {
      console.log("list first name", json.results[i].name.first);
      processUser(json, i)
    }

  })

})


let processUser = function (user, id) {

  const newDiv = document.createElement("div");

  //update the html page to list the users on the page
  const newContent = document.createTextNode(user.results[id].name.first);

  // add the text node to the newly created div
  // add the text node to the div as a child element
  newDiv.appendChild(newContent);

  //finding where to put the content
  const currentDiv = document.getElementById("div");

  document.body.insertBefore(newDiv, currentDiv);


  const newButton = document.createElement("button");
  const newContent2 = document.createTextNode("Get Address");
  newButton.appendChild(newContent2);
  document.body.insertBefore(newButton, currentDiv);



  newButton.addEventListener('click', function () {

    // console.log("this button was clicked")
    processAddress(user.results[id].email)
  })

}


let processAddress = function (email) {

  // create new element
  const addressDiv = document.createElement("div");

  //update html page to list address
  const addressContent = document.createTextNode(email);

  //add the text node to the new div as a child element
  addressDiv.appendChild(addressContent);

  // find where to put the content
  const appendAddress = document.getElementById("div1");

  document.body.insertBefore(addressDiv, appendAddress);
}