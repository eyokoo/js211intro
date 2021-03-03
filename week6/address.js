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
    console.log(json.results);
    // console.log("Number of users", json.results.length);

    for (let i = 0; i <= json.results.length; i++) {
      console.log("list first name", json.results[i].name.first);

      //picture
      const picDiv = document.createElement("div");

      const picContent = document.createTextNode(json.results[i].picture.thumbnail);

      picDiv.appendChild(picContent);

      const currentPicDiv = document.getElementById("div1");

      document.body.insertBefore(picDiv, currentPicDiv);



      ///first name
      const newDiv = document.createElement("div");

      newDiv.setAttribute("id", "newDiv" + i)

      //update the html page to list the users on the page
      const newContent = document.createTextNode(json.results[i].name.first);

      // add the text node to the newly created div
      // add the text node to the div as a child element
      newDiv.appendChild(newContent);

      //finding where to put the content
      const currentDiv = document.getElementById("div1");

      document.body.insertBefore(newDiv, currentDiv);


      ////address
      newDiv.addEventListener('click', function () {

        const newDivAddress = document.createElement("div");

        const addressContent = document.createTextNode(json.results[i].email);

        newDivAddress.appendChild(addressContent);

        const currentDiv = document.getElementById("newDiv" + i);

        currentDiv.parentNode.insertBefore(newDivAddress, currentDiv.nextSibling)

      })


    }

  })

})
