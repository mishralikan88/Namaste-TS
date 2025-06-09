
function add(x: number, y: number): number {
  return x + y;
}

// function subtract(x: number, y: number): number {
//   return "not allowed"; // ❌ Error: Type 'string' is not assignable to type 'number'
// }


// function greet(name?: string): string {
//   return `Hello, ${name || "Guest"}`;
// }


// function multiply(a: number, b: number = 2): number {
//   return a * b;
// }


const divide = (a: number, b: number): number => {
  return a / b;
};

let calculator: (x: number, y: number) => number;

// calculator = function (a, b) {
//   return a + b + "hello";  // ❌ Error: Type 'string' is not assignable to type 'number'
// };


function compute(
  a: number,
  b: number,
  callback: (x: number, y: number) => number
): number {
  return callback(a, b);
}


// const result = compute(4, 2, (x, y) => x * y);
// console.log(result); // 8

compute(4, 2, multiply); // ✅ Correct

// compute(4, 2, multiply(4, 2)); // ❌ Incorrect

function multiply(x: number, y: number): number {
  return x * y;
}

const result = compute(5, 2, multiply); // multiply is passed as a reference
console.log(result); // 10


function process(n1: number, n2?: number): number {
  return n1 + (n2 ?? 0);
}

console.log(process(5));      // ?
console.log(process(5, 3));   // ?


// Overload Signatures:
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

// Single Implementation:
function combine(a: any, b: any): any {
  return a + b;
}

combine(1, 2);              // ➜ 3
combine("Likan", "Dev");    // ➜ "LikanDev"

combine(1, "Dev");  // ❌ Error: No matching overload signature




function log(message: string): void;
function log(message: string, userId: number): void;


function log(message: string, userId?: number): void {
  if (userId !== undefined) {
    console.log(`User ${userId}: ${message}`);
  } else {
    console.log(`Guest: ${message}`);
  }
}

log("Welcome");         // Guest: Welcome
log("Welcome", 123);    // User 123: Welcome


let userName: string | undefined = undefined;

let finalName = userName ?? "Guest";

console.log(finalName); // "Guest"


let count: number = 0;

let resultValue = count ?? 10;

console.log(resultValue); // 0 ✅


let x: any = "hello";
x.toUpperCase(); // ✅ okay
x.trim();        // ✅ okay
x();             // ❌ No error, even though x isn't a function!
x.asdf();        // ❌ No error


function greet(age: number, name?: string) {
  console.log(name ?? "Guest", age);
}

greet(30);           // Output: Guest 30
greet(30, "Likan");  // Output: Likan 30
