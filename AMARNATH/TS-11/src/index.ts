// type Shape =
//   | { kind: "circle"; radius: number }
//   | { kind: "square"; side: number };

// function area(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius ** 2;
//   } else if (shape.kind === "square") {
//     return shape.side * shape.side;
//   } else {
//     const _exhaustive: never = shape; // ❌ Compile error if a kind is missed
//     return _exhaustive;
//   }
// }


// const s1: Shape = { kind: "circle", radius: 5 };
// const s2: Shape = { kind: "square", side: 4 };

// console.log(area(s1)); // Output: 78.54
// console.log(area(s2)); // Output: 16


// 👥 Define three roles with unique properties
type User = { role: "user"; name: string };
type Admin = { role: "admin"; accessLevel: number };
type SuperAdmin = { role: "superadmin"; rootAccess: boolean };

// 🔗 Create a union of all possible roles
type Person = User | Admin | SuperAdmin;

// 🛡️ Custom Type Guard #1 – isAdmin
function isAdmin(person: Person): person is Admin {
  return person.role === "admin"; // ✅ Narrows person to Admin
}

// 🛡️ Custom Type Guard #2 – isUser
function isUser(person: Person): person is User {
  return person.role === "user"; // ✅ Narrows person to User
}

// 🛡️ Custom Type Guard #3 – isSuperAdmin
function isSuperAdmin(person: Person): person is SuperAdmin {
  return person.role === "superadmin"; // ✅ Narrows person to SuperAdmin
}

// 🔍 Now handle access based on the narrowed type
function access(person: Person) {
  if (isUser(person)) {
    console.log("👤 User:", person.name); // ✅ Safe: only User has 'name'
  } else if (isAdmin(person)) {
    console.log("🛡️ Admin access level:", person.accessLevel); // ✅ Safe: only Admin has 'accessLevel'
  } else if (isSuperAdmin(person)) {
    console.log("👑 Super Admin:", person.rootAccess ? "Full access" : "Restricted"); // ✅ Safe: only SuperAdmin has 'rootAccess'
  } else {
    // 🔒 Exhaustive check (optional)
    const _never: never = person; // ❌ Compile error if any type is not handled
    return _never;
  }
}

// 🧪 Simulate calls
access({ role: "user", name: "Likan" });            // 👤 User: Likan
access({ role: "admin", accessLevel: 3 });          // 🛡️ Admin access level: 3
access({ role: "superadmin", rootAccess: true });   // 👑 Super Admin: Full access
 
