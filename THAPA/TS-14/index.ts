// type student = {
//   name: string;
//   age: number;
//   gender?: string;
// };

// const student1: student = {
//   name: "Amar",
//   age: 30,
// };

// const introduction = (studentobj: student): string => {
//   const { name, age } = studentobj;
//   return `my name is ${name} and I am ${age} `;
// };

// console.log(introduction(student1));

// Call Signature - defining type for function/method in Ts is called Call Signature

type student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string; // method call signature - syntax : methodName:(parameter1:type,paratemeter2:type,....) => returnType
  // (country: string) : string;  // pure method call signature
};

const student1: student = {
  name: "Amar",
  age: 30,
  greet: (country) => `I am from ${country}`, // method defination
};

console.log(student1.greet("INDIA")); // method call
