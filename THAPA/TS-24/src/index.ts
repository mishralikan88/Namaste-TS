// // Inheritance and super.

// class Characteristics {
//   name: string;
//   age: number;
//   hobbies: string[];

//   constructor(NAME: string, AGE: number, HOBBIES: string[]) {
//     this.name = NAME;
//     this.age = AGE;
//     this.hobbies = HOBBIES;
//   }

//   // syntax - methodName():ReturnType{logic}

//   introduce(): string {
//     return `Hi I am ${this.name} and I am ${
//       this.age
//     } years olf and my hobby is ${this.hobbies.join(", ")}`;
//   }
// }
// // students class will hasve properties and methods from parent class Characteristics + its own properties and methods => Inheritance
// class Students extends Characteristics{} // Inheritance syntax - class childClass extends ParentClass {class defination}

// const person: Characteristics = new Characteristics("Amar", 30, ["swimming", "BasketBall"]);
// const student: Characteristics = new Students("Lycan", 30, ["swimming", "gaming"]);
// console.log(person.introduce());
// console.log(student.introduce()); // student object has access to method defiend in parent/base class Characteristic though it is an object of child/derived class Students

// ====================================================================================================================================

class Characteristics {
  name: string;
  age: number;
  hobbies: string[];

  constructor(NAME: string, AGE: number, HOBBIES: string[]) {
    this.name = NAME;
    this.age = AGE;
    this.hobbies = HOBBIES;
  }

  introduce(): string {
    return `Hi I am ${this.name} and I am ${
      this.age
    } years olf and my hobby is ${this.hobbies.join(", ")}`;
  }
}

class Students extends Characteristics {
  grade: number;
  // when we define a child class constructor , we must  initialise properties of parent class along with child's own property initialisation inside of it.
  constructor(NAME: string, AGE: number, HOBBIES: string[], GRADE: number) {
    // this.name = NAME;
    // this.age = AGE;
    // this.hobbies = HOBBIES;
    super(NAME, AGE, HOBBIES); // similar to above 3 lines of code.
    // We are already doing this props initialisation inside parent class constructor. Hence no need of initialising them again inside the child class constuctor explictly.
    // Make a super call  inside child class constructor which takes care of parent class properties initialisation.
    this.grade = GRADE;
  }

  introduce(): string {
    return `Hi I am ${this.name} and I am ${
      this.age
    } years olf and my hobby is ${this.hobbies.join(", ")} and i am in grade ${
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
console.log(person.introduce());
console.log(student.introduce()); // calls students introduce method . introduce() inside students class overrides  introduce() inside parent Characteristics class.=> method overriding 

// Note - common properties are defined inside base class and specific props are defined in specific derived classes.