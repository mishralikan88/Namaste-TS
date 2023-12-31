// ANY type - javascript behavior

let myFavNum: any = 5;
myFavNum = "Amar"; // ts bypass the type checking of a variable with type any. All types of value we can pass to a any type variable.
myFavNum = true;

// UNKNOWN type

let myFavNum1: unknown;
myFavNum1 = "Lycan";
myFavNum1 = true;

// UNKNOWN enforcing type checking

if (typeof myFavNum1 === "number") {
  console.log(myFavNum1 + 1); // no output as myFavNum1 is boolean with value true
} else if (typeof myFavNum1 === "boolean") {
  console.log(myFavNum1);
}
