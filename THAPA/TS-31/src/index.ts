// 1st Diffrence
// ================

// Type

// type stud = {
//   name: string;
//   age: number;
// };

// type studAddress = {
//   city: string;
//   state: string;
// };

// type data = stud | studAddress; // can be & => refer previous code snippets for explanations

// const bioData: data = {
//   name: "Amar",
//   age: 20,
//   city: "sambalpur",
// };

// console.log(bioData);

// Interface

// interface stud {
//   name: string;
//   age: number;
// }

// interface studAddress {
//   city: string;
//   state: string;
// }

// interface data extends stud, studAddress {} // extends allows  type & operation. With interface we cannot achieve union operation that we get in type.

// const bioData: data = {
//   name: "Amar",
//   age: 20,
//   city: "sambalpur",
//   state: "Odisha",
// };

// console.log(bioData);

// 2nd diffrence
// ====================

// type

// type stud = {
//   name: string;
//   age: number;
// };

// type stud = {
//   city: string;
//   state: string;
// };

// type data = stud; // we get error as duplicate identifier stud

// const bioData: data = {
//   name: "Amar",
//   age: 20,
//   city: "sambalpur",
//   state:"Odisha"
// };

// console.log(bioData);

// interface

// interface stud {
//   name: string;
//   age: number;
// }

// interface stud {
//   city: string;
//   state: string;
// }

// interface data extends stud {} // extends both stud interfcae properties

// const bioData: data = {
//   name: "Amar",
//   age: 20,
//   city: "sambalpur",
//   state: "Odisha",
// };

// console.log(bioData);

// classes - interfaces
//====================================

interface stud {
  name: string;
  age: number;
}

interface stud {
  city: string;
  state: string;
}

interface data extends stud {} // extends both stud interfcae properties

class BioData implements data {
  constructor(
    public name: string,
    public age: number,
    public city: string,
    public state: string
  ) {}
}

const std1 = new BioData("Amar", 30, "sambalpur", "Odisha");