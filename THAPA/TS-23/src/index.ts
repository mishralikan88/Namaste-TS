// class = blueprint of an object

class Person {
  name: string = "Lycan";
  age: number = 29;
  hobbies: string[] = ["reads", "paints"];
}

// object = instance of the class

const person1: Person = new Person(); //person1:Person => Person1 is a instance of class Person
console.log(person1);

// THe problem with this approach is we have information about one person . We cant get information from second person . If we do it willl
// be as similar as the first person. Everyone has different characteristics.

// ==============================================================================================================================

class characteristics {
  name: string;
  age: number;
  hobbies: string[];

  constructor(NAME: string, AGE: number, HOBBIES: string[]) {
    this.name = NAME; // this => current instance , this.name = NAME; => setting up name property of the object(this) with he value coming from object instantiation (this value we store in NAME parameter of the constructor). This is just like a reference.
    this.age = AGE;
    this.hobbies = HOBBIES;
  }
}

const person2: characteristics = new characteristics("Amar", 30, [
  "swimming",
  "gaming",
]); // when we create instance of the class characteristics,it automatically calls the constuctor.

// constructor is used to construct/initialise the object

const person3: characteristics = new characteristics("Lycan", 30, [
  "MindReader",
  "BodyBuilding",
]);

console.log(person2);
console.log(person3);
