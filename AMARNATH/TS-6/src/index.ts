
// union Type

// type Status = string | number | boolean;
// let currentStatus: Status;

// currentStatus = "Active";     // ✅ string
// currentStatus = 1;            // ✅ number
// currentStatus = false;        // ✅ boolean

// currentStatus = { value: 1 }; // ❌ Error — object not allowed


// type Status = "success" | "error" | "loading";

// let currentStatus: Status;

// currentStatus = "success";  // ✅ OK
// currentStatus = "error";    // ✅ OK
// currentStatus = "loading";  // ✅ OK
// currentStatus = "pending";   // ❌ Error: Type '"pending"' is not assignable to type 'Status'
// currentStatus = "Success";   // ❌ Error: case-sensitive
// currentStatus = "done";      // ❌ Error

// function printId(id: number | string): void {
//   console.log("Your ID is:", id);
// }


function printId(id: number | string): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}


// intersection Type

// Example 1 

// type User = {
//   name: string;
// };

// type Admin = {
//   role: string;
// };

// type AdminUser = User & Admin;

// const person: AdminUser = {
//   name: "Likan",
//   role: "superadmin"
// };



// Example 2 

type Contact = {
  email?: string;
};

type Profile = {
  username: string;
};

type Account = Contact & Profile;

const acc: Account = {
  username: "devuser",
  email: "test@example.com"
};




// Example 3

// type Shape = { area: () => number };
// type Color = { color: string };

// type ColoredShape = Shape & Color;

// function printShape(shape: ColoredShape) {
//   console.log("Color:", shape.color);
//   console.log("Area:", shape.area());
// }



// literal Type

// type Direction = "left" | "right" | "up" | "down";
// let move: Direction;
// move = "left";  // ✅
// move = "up";    // ✅
// move = "jump";  // ❌ Error



// type Mode = "dark" | "light";

// function setTheme(mode: Mode) {
//   console.log("Theme is:", mode);
// }

// setTheme("dark");      // ?
// setTheme("blue");      // ?

// type Status = "pending" | "success" | "error";

// function handle(status: Status) {
//   if (status === "success") {
//     console.log("✅ Task completed!");
//   }
// }

// enum Status {
//   Pending = "pending",
//   Success = "success",
//   Error = "error"
// }

// function handle(status: Status) {
//   if (status === Status.Success) {
//     console.log("✅ Task completed!");
//   }
// }


// type Admin = {
//   role: "admin";
//   name: string;
//   privileges: string[];
// };

// type User = {
//   role: "user";
//   name: string;
//   email: string;
// };


// type Admin = { role: "admin"; name: string; privileges: string[] };

// type User = { role: "user"; name: string; email: string };

// type Person = Admin | User;

// // valid 

// const p1: Person = {
//   role: "admin",
//   name: "Likan",
//   privileges: ["create", "delete"]
// };

// // valid

// const p2: Person = {
//   role: "user",
//   name: "Likan",
//   email: "likan@example.com"
// };

// Invalid
// const p: Person = {
//   role: "admin",
//   name: "Likan",
//   email: "likan@gmail.com" // ❌ Error: 'email' does not exist in Admin
// };



// type Admin = { role: "admin"; name: string; privileges: string[] };

// type User = { role: "user"; name: string; email: string };

// type Person = Admin | User;

// function greet(person: Person) {
//   console.log("Hello", person.name);

//   // person.privileges ❌ Error!
//   // person.email ❌ Error!

//   // Type Narrowing
  
//   if (person.role === "admin") {
//     console.log("Privileges:", person.privileges); // ✅ Safe now
//   }

//   if (person.role === "user") {
//     console.log("Email:", person.email); // ✅ Safe now
//   }
// }

// type Admin = { role: "admin"; name: string; privileges: string[] };

// type User = { role: "user"; name: string; email: string };

// type Person = Admin | User;

// function greet(person: Person) {
//   console.log("Hello", person.name);


//   if (person.role === "admin") {
//     console.log("Privileges:", person.privileges);
//   }

//   if (person.role === "user") {
//     console.log("Email:", person.email); 
//   }
// }

// const p1: Person = { role: "admin", name: "Likan", privileges: ["delete"] };
// const p2: Person = { role: "user", name: "Tina", email: "tina@example.com" };

// greet(p1); // → Hello Likan , Privileges: ["delete"]
// greet(p2); // → Hello Tina , Email: tina@example.com

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type person = Admin & Employee;

// const user: person = {
//   name: "Likan",
//   privileges: ["manage-users"]
// };
// // // ❌ Error: Property 'startDate' is missing

// const user: person = {
//   name: "Likan",
//   privileges: ["manage-users", "delete-records"],
//   startDate: new Date("2023-01-01")
// };
// // ✅ This is valid — because the object includes everything from both Admin and Employee.


type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type person = Admin & Employee;

const user: person = {
  name: "Likan",
  privileges: ["manage-users", "delete-records"],
  startDate: new Date("2023-01-01")
};

function printUser(user: person) {
  console.log("Name:", user.name);
  console.log("Privileges:", user.privileges.join(", "));
  console.log("Start Date:", user.startDate.toDateString());
}

printUser(user);

// Output:
// Name: Likan
// Privileges: manage-users, delete-records
// Start Date: Sun Jan 01 2023


type Mode = "light" | "dark";

function setMode(mode: Mode) {
  console.log("Mode set to", mode);
}

setMode("light"); // ✅
setMode("blue");  // ❌ Error

// Output:

// Mode set to light
// Then compile error: Argument of type '"blue"' is not assignable to parameter of type 'Mode'