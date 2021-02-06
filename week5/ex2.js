/**
 * we want to simulate a square
 * 
 */

class square {
  side;

  constructor(inputSide) {
    this.side = inputSide;
  }

  /**
   * return the perimeter of the square
   */
  perimeter() {
    return 4 * this.side;
  }

  /**
   * Returns the area of the square
   */
  area() {
    return this.side * this.side; //OR return Math.pow(this.side, 2);
  }
}

let s1 = new square(4);
let s2 = new square(2);

console.log(`S1 area = `, s1.area())
console.log(`S2 area = `, s2.perimeter())
