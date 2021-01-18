
/** 
 * Write a function, that takes in the height and base of a triangle,
 * and returns the area of the triangle
 * 
 * @param {number} base: base of the triangle
 * @param {number} height: the height of the triangle
 * @returns the area of the triangle
 * 
 */

 let triangleArea = (base,height) => {

  return (base * height)/2;
  
 }

 console.log(triangleArea(1,1));


 //height; 1, base:1 , area .5
 //height; 2, base:1 , area 1
 //height; 0 base:1, area 0
 //height; 1, base: 0, area 0
 //height; 4, base: 2 , area: 4
 //height; -1, base:1 , area NaN
 //height;2 , base:-1, area NaN

 const assert = require (`assert`);
 describe (`Testing Valid Triangles`, function(){

  it(`Testing the Unit Triangle`, function(){
      triangleArea(1,1);
      let actual = triangleArea(1,1);
      let expected = .5;
      assert.equal(actual,expected);
  })
 
  it(`height greater than 1`, function(){
    let actual = triangleArea(1,2);
    let expected = 1;
    assert.equal(actual,expected);
  })

  it(`base greater than 1`, function(){
    let actual = triangleArea(2,1);
    let expected =1;
    assert.equal(actual,expected);
  })
  it(`both height and base greater than1`, function(){
    let actual = triangleArea(2,2);
    let expected =2;
    assert.equal(actual,expected);
  })

})

describe(`testing invalid input`, function(){
  it(`negative height`, function(){
    let actual = triangleArea(2,-2);
    let expected = 2;
    assert.equal(actual, expected);
  })
}