'use strict'

let jokeButton = document.getElementById("jokeButton");
jokeButton.addEventListener('click',function(){
  
  let fetchJoke = fetch("https://api.jokes.one/jod");

  let jokeResponse = fetchJoke.then(function (response){
    console.log("Processing results", response);
    return response.json();
  })

  jokeResponse.then(function(json){
    console.log("json =", json);
    processJoke(json.contents.jokes[0].joke.text);
  
  })

})


let processJoke = function(joke){

  //create TextNode give it some content
  const newContent = document.createTextNode(joke);
  
  //finding where to put the content
  const currentDiv = document.getElementById("div1");

  // add the text node to the div as a child element
  currentDiv.appendChild(newContent);

  
}


