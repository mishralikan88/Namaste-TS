// function add(a: number, b: number): number {
//   return a + b;
// }
// add(10, 20); // 30

// function add (a:string,b:string):string{
//     return a+b
// }
// add("Hello ","Boy") // Hello Boy

// function add(a: any, b: any): any { // Javascript Code
//     return a + b;
//   }

// ==============================================================================================================================

// Generics syntax -

//===============================================================================================================================

// Function taking one parameter of one Type.

// generic function declaraion syntax -

// function functionName <Type placeHolder>(parameter1:Type,parameter2:Type):returnType {//logic}

function add<T>(a: T, b: T): void {
  console.log(typeof a);
  console.log(typeof b);
}

const result1 = add<number>(10, 20); // generic function call Syntax - functionName<Type>(arg1,arg2) // <Type> is optional
const result2 = add("Amar ", "Super cool!");

// ================================================================================================================================

// Function taking multiple parameters of multiple Types

// generic function declaraion syntax -

// function functionName <Type1 placeHolder,Type2 placeHolder and so on.>(parameter1:Type1,parameter2:Type and so on):returnType {//logic}

function addExtended<T, U>(a: T, b: U): void {
  console.log(typeof a);
  console.log(typeof b);
}

const result1extended = addExtended<number, string>(10, "Amar"); // generic function call Syntax - functionName<Type>(arg1,arg2) // <Type> is optional

const result1extended1 = addExtended<string, number>("Amar", 10);

const result1extended2 = addExtended("Amar", 10); // If we dont specify the type here we can change the order and argument types

const result1extended3 = addExtended(10, "Amar");

// ================================================================================================================================

// Mixing generics with non-generic types

function mix<T, U>(a: T, b: U, c: boolean): void {
  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof c);
}

const result1extendedMix = mix<number, string>(10, "Amar", false); // boolean - non generic type , number and string - generic type
