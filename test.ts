// ✅ Type definition
type User = {
  id: number;
  name: string;
  email: string;
};

// ✅ Reusable generic function using keyof
function getField<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]; // No hardcoded Key string. Key must be one of the keys in the object type
}

// ✅ Valid object matching the User type
const user: User = {
  id: 1,
  name: "Likan",
  email: "likan@example.com"
};

console.log(getField(user, "name"));   // ✅ Type-safe, DRY
console.log(getField(user, "email"));  // ✅ Also safe

// ❌ Invalid key example
// console.log(getField(user, "fullName")); 
// ❌ TS Error: Argument of type '"fullName"' is not assignable to parameter of type '"id" | "name" | "email"'


