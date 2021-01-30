let cars =[{
  'make': 'Mazda',
  'cylenders': 4, 
  'model':"protege",
  'colors':['blue','red','cyan','green']
},{
  'make':'Ford',
  'cylenders': 4,
  'model':"Focus",
  "colors": ['blue','red','green']
},
{
  'make':'BMW',
  'cylenders':4,
  'model':"328",
  "colors": ['silver','black']
},
{
  'make':'Mazerati',
  'cylenders':8,
  'model':"X",
  "colors": ['orange','neon green']
},
{
  'make':'VW',
  'cylenders':2,
  'model':"Bug",
  "colors": ['yellow','rust']
}]

let myOptions = cars.filter(function(car){
  if(car.cylenders === 4){
    return true;
  }
}).filter(function(car){
  if(car.colors.indexOf('red')>-1){
    return true;
  }
}).map(function(car){
  //The BMW 328 is a nice 4 cylendar car that is available in silver and black
  
  return `The ${car.make} is a nice ${car.cyelnders} cylendar car that is available in ${car.colors.join(", ")}`;
}).forEach(function(description){
  console.log(description);
})

let someCar = cars.find(function(car){
    if(car.cylenders == 4){
      return true;
    }
})
console.log(someCar);


//The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.

//The filter() method creates a new array with all elements that pass the test implemented by the provided function.