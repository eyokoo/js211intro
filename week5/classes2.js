/**
 * class that represents a student in our school
 * Every student has a name, an id, a date of birth and a collection of grades
 * 
 * when a student instance is created,
 * set the name from the input,
 * set the date of birth from the input, 
 * generate a random id for the student
 * and instantiate the collection of grades as an empty array
 * 
 * methods:
 * getAvg(); this method should return the average grade of the student
 * getMin(); this methods should return the minimum grade for the student
 * isPassing() ; returns true if the student is passing 
 * (passing is when the avg grade is a 70 or above)
 * addGrade() ; this method will add the passed in grade to the students "gradebook"
 */


class Student {

  name;

  id;

  birthDate;

  arrayOfGrades;


  constructor(inputName, inputBirthDate) {
    this.name = inputName;

    let randomId = Math.floor((Math.random() * 10000))
    this.id = randomId;

    this.birthDate = inputBirthDate;

    this.arrayOfGrades = [];

  }

  getAvg() {
    let sum = 0
    for (let i = 0; i <= this.arrayOfGrades.length; i++) {
      sum = sum + this.arrayOfGrades[i]
    }
    return sum / this.arrayOfGrades.length;
  }

  getMin() {
    let min 
    for (let i = 0; i < this.arrayOfGrades.length; i++) {
      if(i = 0){
        return i
      }
      if (this.arrayOfGrades[i] < min) {
        min = this.arrayOfGrades[i]
      }
    }
    return min;
  }

  isPassing() {
    if (this.getAvg() > 70) {
      return true;
    } else {
      return false;
    }
  }

  addGrade(grade) {
    this.arrayOfGrades.push(grade)
  }
}

let newStudent = new Student('Emi','Jun 15, 1994');
newStudent.addGrade(98);
console.log(newStudent)