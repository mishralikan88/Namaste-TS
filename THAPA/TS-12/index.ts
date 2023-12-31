// const person = {
//   name: "Amar",
//   age: 28,
//   isSTudent: true,
//   address: {
//     city: "Orissa",
//     country: "India",
//   },
// };

// console.log(person.address.city);

// person.address.city = "BBSR";
// console.log(person.address.city);

// person.address.city = 123; // valid in JS . invalid in Ts because of type inference.
// console.log(person.address.city);

// Typescript Type annotation

const person: {
  // object schema/structure type
  name: string;
  age: number;
  isStudent: boolean;
  address: {
    city: string;
    country: string;
  };
} = {
  name: "Amar",
  age: 28,
  isStudent: true,
  address: {
    city: "Orissa",
    country: "India",
  },
};

console.log(person.address.city);
person.address.city = "BBSR";
console.log(person.address.city);
// person.address.city = 123; // valid in JS . invalid in Ts because of type inference.
console.log(person.address.city);
