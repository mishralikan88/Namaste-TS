let city = "Delhi"; // inferred as string

// let city: string = "Delhi";

let value: any = "hello";
value = 123; // allowed


// let input: unknown = "text";

// if (typeof input === "string") {
//   console.log(input.toUpperCase());
// }

function log(msg: string): void {
  console.log(msg);
}

function fail(): never {
  throw new Error("Crash!");
}


function greet(name: string) {
  return `Hi ${name}`;
}

// let result = greet("Likan");
// console.log(typeof result);


let data: any = "hello";

data.toUpperCase();  // ✅ Works
data.trim();         // ✅ Works
data();              // ✅ No error, even if it's not a function ❌
data.noSuchMethod(); // ✅ No error ❌


// let input: unknown = "hello";

// input.toUpperCase();  // ❌ Error: Object is of type 'unknown'

// // ✅ Safe usage with type check
// if (typeof input === "string") {
//   console.log(input.toUpperCase());
// }

function logMessage(msg: string): void {
  console.log(msg);
}

// function getNothing(): undefined {
//   return undefined; // ✅ Required
// }

function getNothing(): undefined {
  // Error: Not returning anything
}


// function sayHi(): void {
//   console.log("Hi!");
// }

const result = sayHi(); 
console.log(result); // Output: undefined

// function sayHi(): undefined {
//   return undefined; // ✅ Required
// }

function sayHi(): undefined {
  // Error: Function lacks ending return statement
}