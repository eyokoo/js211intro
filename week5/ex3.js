/**
 * a class that represents a triangle
 */

class Rectangle {
  length;
  width;

  constructor(inputLength, inputWidth) {
    this.length = inputLength;
    this.width = inputWidth

  }
  //return the area of a rectangle
  area() {
    return this.length * this.width;
  }

  //return the perimeter of the rectangle
  perimeter() {
    return 2 * (this.length + this.width);
  }

  /**
   * Return true if the rectangle is a square
   */
  isSquare() {
    if (this.length == this.width) {
      return true;
    }
    else {
      return false;
    }
  }
}

let r1 = new Rectangle(5, 5)
console.log(r1.area())
console.log(r1.perimeter())
console.log(r1.isSquare())