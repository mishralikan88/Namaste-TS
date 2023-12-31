
class Characteristics {
  public name: string; // name set to public
  protected age: number; // age set to protected
  private hobbies: string[]; // hobbies set to private

  constructor(NAME: string, AGE: number, HOBBIES: string[]) {
    this.name = NAME;
    this.age = AGE;
    this.hobbies = HOBBIES;
  }

  introduce(): string {
    return `Hi I am ${this.name} and I am ${ // name is accesible within the class
      this.age  // age is accessible within the class
    } years olf and my hobby is ${this.hobbies.join(", ")}`; // hobbies is accessible within the class as this is private
  }
}

class Students extends Characteristics {
  grade: number;
  constructor(NAME: string, AGE: number, HOBBIES: string[], GRADE: number) {
    super(NAME, AGE, HOBBIES); 
    this.grade = GRADE;
  }

  introduce(): string {
    return `Hi I am ${this.name} and I am ${ // name is accessible in the deried class.
      this.age // age is accessible within the sub class
    } years olf and my hobby is ${this.hobbies.join(", ")} and i am in grade ${  // hobbies is inaccessible within the sub class
      this.grade
    }`;
  }
}

const person: Characteristics = new Characteristics("Amar", 30, [
  "swimming",
  "BasketBall",
]);
const student: Characteristics = new Students(
  "Lycan",
  30,
  ["swimming", "gaming"],
  10
);
console.log(person.name); // name is accessible outside the class
console.log(person.age);  // age is inaccessible outside the classes as this is protected, only base and derived class can get access to it.
console.log(person.hobbies);  // hobbies is inaccessible outside the class
console.log(person.introduce());
console.log(student.introduce()); 




