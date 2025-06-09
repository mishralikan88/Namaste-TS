
// type userStatus = "active" | "inactive" | "pending";

// let userState:userStatus = "actsive"; // ❌ typo!


// Without Enum


// // ❌ Union type — just a type, no runtime value
// type StatusType = "active" | "inactive" | "pending";

// // ❌ No runtime object
// console.log(StatusType); // ❌ Error: Not defined — it's only a type, not a JS object

// // ❌ No centralized reuse — keys must be retyped manually and are not type-safe
// const configUnion = {
//   "active": "Dashboard enabled",
//   "inactive": "Limited access",
//   "pending": "Approval needed"
// };

// // ❌ Can't loop easily without hardcoding
// for (const status of ["active", "inactive", "pending"]) {
//   console.log(status); // ❌ Manually typed strings — error-prone
// }

// // ❌ No auto-complete / IntelliSense
// // let status: StatusType = "a▌" 
// // Union types are not real values, so the editor can't suggest completions like "active"

// // ❌ No central source of truth — "active" is written in multiple places
// // If you rename "active" → "enabled", you must update every usage manually




// // ✅ With Enum

// // ✅ Enum — real JS object with named constants
// enum Status {
//   Active = "active",
//   Inactive = "inactive",
//   Pending = "pending"
// }

// // ✅ Runtime object exists
// console.log(Status); // ✅ Logs: { Active: "active", Inactive: "inactive", Pending: "pending" }

// // ✅ Centralized reuse — keys reused safely and type-checked
// const configEnum = {
//   [Status.Active]: "Dashboard enabled",
//   [Status.Inactive]: "Limited access",
//   [Status.Pending]: "Approval needed"
// };

// // ✅ Easy to loop using Object.values
// for (const status of Object.values(Status)) {
//   console.log(status); // ✅ Cleaner and dynamic
// }

// // ✅ Full IntelliSense and auto-complete
// let currentStatus: Status = Status.Active;
// // Typing "Status." suggests all enum values automatically

// // ✅ Central source of truth — change once, updates everywhere
// if (currentStatus === Status.Active) {
//   console.log("User is active");
// }



// enum Direction {
//   Up,     // 0
//   Down,   // 1
//   Left,   // 2
//   Right   // 3
// }

// console.log(Direction.Left); // 2

// Defaults to 0 and auto-increments by 1 for each subsequent member.



// enum Direction {
//   Up = 1,
//   Down,   // 2
//   Left,   // 3
//   Right   // 4
// }

// console.log(Direction.Down) // 2 

// enum Status {
//   Active = "active",
//   Inactive = "inactive",
//   Pending = "pending"
// }

// let user: Status = Status.Active;

// enum Status {
//   Success = 0,
//   Failure = 1
// }

// console.log(Status.Success); // 0 (forward)
// console.log(Status[0]);      // "Success" (reverse ✅)

// enum Status {
//   Success = "SUCCESS",
//   Failure = "FAILURE"
// }

// console.log(Status.Success);    // ✅ "SUCCESS" (forward lookup)
// console.log(Status["SUCCESS"]); // ❌ (no reverse mapping) , Property 'SUCCESS' does not exist on type 'typeof Status'.
// console.log(Status[0]); //  ❌ Property '0' does not exist on type 'typeof Status'.





// enum APIStatus {
//   Success = "success",
//   Error = "error",
//   Timeout = "timeout"
// }

// A function to handle response based on status.

// function handleResponse(status: APIStatus) {
//   if (status === APIStatus.Success) {
//     console.log("🎉 All good!");
//   } else if (status === APIStatus.Error) {
//     console.log("❌ Something went wrong.");
//   } else if (status === APIStatus.Timeout) {
//     console.log("⏳ Request timed out.");
//   }
// }



// const enum Color {
//   Red,
//   Green,
//   Blue
// }

// console.log(Color.Red) // 0

// const enum Color {
//   Red = 1,
//   Green,
//   Blue
// }

// console.log(Color.Green) // 2


// ✅ Const enum declaration
const enum LogLevel {
  Info = 1,
  Warning,
  Error
}


// ✅ You can access specific values — this will be replaced by a literal number during compilation
console.log(LogLevel.Warning);  // ✅ Prints: 2

// ❌ You CANNOT log the entire enum — it doesn't exist in the final JavaScript output
// console.log(LogLevel); 
// ❌ Error: 'const' enums are erased at compile time, so LogLevel is not a real object


// ❌ Reverse mapping doesn’t work — const enums don’t support it
// console.log(LogLevel[2]);
// ❌ Error: Property '2' does not exist on type 'typeof LogLevel'

// ❌ Only numeric values allowed.String values not allowed in const enums
/*
const enum Response {
  Success = "SUCCESS" // ❌ Error: const enum members can only be literal numbers
}
*/
