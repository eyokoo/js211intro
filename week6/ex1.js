/**
 * make a rectangle class that has the following attributes
 * -length
 * -width
 * 
 * has the following methods:
 * area()
 * perimeter()
 */

class Rectangle {
  length;
  width;

  constructor(inputLength, inputWidth) {
    this.length = inputLength
    this.width = inputWidth
  }

  area() {
    return this.legnth * this.width;
  }

  perimeter() {
    return this.length * 2 + this.width;
  }
}

class Square extends Rectangle {

  constructor(side) {
    super(side, side);
  }
}

let a = new Rectangle(3,2);
let b = new Square(3);

console.log("square area ; ", b.area())
console.log("rectangle area ; ", a.area())