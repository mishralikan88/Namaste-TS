// type User = {
//   name: string;
//   age: number;
// };


// interface User {
//   name: string;
//   age: number;
// }

// const person: User = {
//   name: "Likan",
//   age: 30
// };


// interface

// interface Book {
//   title: string;
// }

// interface Book {
//   author: string;	
// }

// // Final shape:
// const b: Book = {
//   title: "Atomic Habits",
//   author: "James Clear"
// };


// type

// type Book = {
//   title: string;
// };

// type Book = {
//   author: string;
// }; // ❌ Duplicate identifier error

// // Final shape:
// const b: Book = {
//   title: "Atomic Habits",
//   author: "James Clear"
// };


// type Status = "success" | "error" | "loading";


// ✅ type supports intersections:

// type Admin = { role: string };
// type User = { name: string };
// type AdminUser = Admin & User;



// interface Admin {
//   role: string;
// }

// interface User {
//   name: string;
// }

// type AdminUser = Admin & User;

// const person: AdminUser = {
//   role: "admin",
//   name: "Likan",
// };

// ❌ This is invalid — not allowed
// interface Status = "success" | "error" | "loading";



// ✅ Correct usage with type
// type Status = "success" | "error" | "loading";

type Keys = "name" | "email";

// 👇 Computed properties — looping over Keys
// type User = {
//   [K in Keys]: string;
// };

// Or 

// type User = {
//   name: string;
//   email: string;
// };

// interface User {
//   [K in Keys]: string; // ❌ Error: 'in' expressions are not allowed in interface
// }


// // ✅ Defining an interface
// interface Animal {
//   name: string;
// }

// // ✅ Class implements the interface
// class Dog implements Animal {
//   name = "Bruno"; // Must match the shape defined in the interface
// }


// ✅ Defining a type
// type Animal = {
//   name: string;
// };

// // ✅ Class implements the type
// class Cat implements Animal {
//   name = "Whiskers"; // Same behavior as with interface
// }

// interface A {
//   x: number;
// }

// interface B extends A {
//   y: number;
// }

// const p: B = { x: 1, y: 2 }; // ✅ Works fine

type A = {
  x: number;
};

type B = A & {
  y: number;
};

const p2: B = { x: 1, y: 2 }; // ✅ Works fine

type Result = string | number;

function print(result: Result) {
  if (typeof result === "string") {
    console.log(result.toUpperCase());
  } else {
    console.log(result.toFixed(2));
  }
}

interface Success {
  status: "success";  // ← 🏷️ Discriminant key
  data: string;
}

interface Error {
  status: "error";    // ← 🏷️ Discriminant key
  message: string;
}

type APIResponse = Success | Error;

function handle(res: APIResponse) {
  if (res.status === "success") {
    // ✅ TypeScript knows this is Success
    console.log(res.data);
  } else {
    // ✅ TypeScript knows this is Error
    console.log(res.message);
  }
}




