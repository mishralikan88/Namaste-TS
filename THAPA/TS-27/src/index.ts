// class Persons {
//   constructor(
//     public name: string,
//     public age: number,
//     protected hobbies: string[]
//   ) {
//     if (this.age > 150 || this.age < 0) {
//       throw new Error("Invalid Age supplied");
//     }
//   }

//   introduceParent(): string {
//     return `Hi,I'm ${this.name} and I'm ${
//       this.age
//     } years old.I love ${this.hobbies.join(",")}.`;
//   }
// }

// const Person1 : Persons = new Persons("Amar",30,["footbal","gym"]) // validation for Age is applied inside constructor

// But we can still modify this age property out side of the class

// Person1.age = 500 // In reality age cannot be > 150 .How do we fix this situation?

// ==================================================================================================================================

// Setter() comes to the rescue to fix this validation issue.

class Persons {
  constructor(
    public name: string,
    private _age: number, // age is restricted while getting accessed outside of the class.We have to put proper validation for this in setter.
    protected hobbies: string[]
  ) {}

  introduceParent(): string {
    return `Hi,I'm ${this.name} and I'm ${
      this._age
    } years old.I love ${this.hobbies.join(",")}.`;
  }

  // Setter

  public set Age(age: number) {
    // Age is the setter method.But while setting the value outside of the class we dont have to call them like function/method.

    // We call setters like property.age is the value being set to the setter.

    if (age > 150 || age < 0) {
      throw new Error("Invalid Age supplied");
    }
    this._age = age;
  }

  // Getter

  public get getAge(): number {
    if (this._age === undefined) {
      throw new Error("Age not defined");
    } else {
      return this._age;
    }
  }
}

const Person1: Persons = new Persons("Amar", 30, ["footbal", "gym"]);

//   Person1.age = 500  // validation is bypassed as we have defiend validation inside constructor and construcor is not getting called here.

Person1.Age = 500; // error

Person1.Age = 12; // All checks passed. this._age is being set for the object Person1

// 500 and 12 are the value for age being set to setter Age.

// We have set the age Now we need to get the age using getter

console.log(Person1.getAge); // _age of current object Person1