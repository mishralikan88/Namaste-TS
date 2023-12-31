// class Persons {
//   public name: string;
//   public age: number;
//   private hobbies: string[];
//   public nature: string;
//   public feature: string;

//   constructor(
//     name: string,
//     age: number,
//     hobbies: string[],
//     nature: string,
//     feature: string
//   ) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//     this.nature = nature;
//     this.feature = feature;
//   }
// }
// ==================================================================================================================================
// Short Hand properties => The above code turns into below code with short hand properties . In shorthand properties syntax, we dont have
// to declare properties inside of a class and we do not need to initialise them explicitly with in the constructor.
// short hand properties internally uses type inference.
// Access modifier is a must while using short hand property syntax.

class Persons {
  constructor(
    public name: string,
    public age: number,
    private hobbies: string[],
    public nature: string,
    public feature: string
  ) {}
}
