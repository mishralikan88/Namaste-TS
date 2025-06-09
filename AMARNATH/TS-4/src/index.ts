
// type User = { name: string; age: number };

// Array
// let users: User[] = [
//   { name: "Likan", age: 30 },
//   { name: "Tina", age: 25 }
// ];

// Tuple
// let user: [string, number] = ["Likan", 30];


// let user:[string, number]  = [30, "Likan"]; // ❌ wrong types


// let user:[string, number] = ["Likan", 30, true]; // ❌ too many values


// let person: { name: string; age: number } = {
//   name: "Likan",
//   age: 30
// };


// let book: { title: string; author?: string } = {
//   title: "You Don't Know JS" // author is optional to pass
// };

type Car = {
  readonly vin: string;
  model: string;
};

const myCar: Car = {
  vin: "ABC123",
  model: "Tesla"
};

// myCar.vin = "XYZ456"; // ❌ Error: Cannot assign to 'vin' because it is a read-only property


type Info = [string, number];
const info: Info = ["Age", 30];

console.log(info[0].toUpperCase());
console.log(info[1].toFixed(1));

let mix: (string | number)[] = ["Likan", 99];