// Tuple

type PersonInfo = readonly [string, number, boolean]; // defining tuple elements type. precise . readonly becuase tuple is mutable by default.readonly ensures tuple's immutability.

const person1: PersonInfo = ["Amar", 30, true]; // order matters

const person2: PersonInfo = [ 30, "Amar", true]; // wrong as order matters

const displayPersonInfo = (personObject: PersonInfo) => {
  const [name, age, hasDriverLicense] = personObject;
  console.log(`${name} ${age} ${hasDriverLicense ? "Yes" : "No"}`);
};

displayPersonInfo(person1);

// Array

type PersonInfo1 = any; // defining array elements type. not precise

const person11: PersonInfo1 = ["Amar", 30, true]; // order does not matters

const person22: PersonInfo1 = [30, "Amar", true]; // correct  as order does not matters
