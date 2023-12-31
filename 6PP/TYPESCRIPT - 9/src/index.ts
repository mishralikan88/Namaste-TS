// Generics in Typescript

// what is generics and why generics ?

// If we are not sure about the incoming data from an API call and a function is using that data , in that case we used to define any type.
// But there are some flaws assotiated with any type which is in vs code we cant get intellisense for any type variables. second problem with any is the type itself  is weekly typed or loosely coupled with the variable. meaning we can pass anything to  variables of type any which might lead to a run time issue based on the logic defect.And its very difficult to debug our code.
// Generics solves these problems . Generics is strongly typed. Meaning at compiled time the type of the generic variable is determined.
// Generics also enables intellisense for those generic variables because we know the types of the variables.
// The whole point of typescript is to define types for variables, functions etc but any restricts that behavior.Generics comes to the rescue to fix this.Generics ensures type safety

// const func = (a: any): any => {
//   return a;
// };

// const val1 = func(1);
// const val2 = func("Amar");
// console.log(val1);

// // Generics in Action

// const genericFunc = <customType>(a: customType): customType => {
//   let text: customType = a; // customType type will be decied at run time. And this is dynamic.This is generics.
//   return text;
// };
// const genericVal1 = genericFunc(1); // customType is number
// const genericVal2 = genericFunc("Amar"); // customType is string
// console.log(genericVal1.toFixed); // customType allowed  toFixed number property to show in intellisense for genericVal1.This is the advantage of generic over any.Generics is strongly typed whereas any is weekly typed.
// console.log(genericVal2.charAt); // customType allowed charAt strings property to show in intellisense for genericVal2.This is the advantage of generic over any.Generics is strongly typed  whereas any is weekly typed.

//=========================================================================================================================

// using any

// const genericFunc = (a: any): any => {
//   let text: any = a;
//   return text;
// };

// type Person = {
//   name: string;
//   age: number;
// };

// const Human:Person={
//   name: "Amar",
//   age: 30
// }

// const ans = genericFunc(Human)
// console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
// console.log(ans,typeof ans) // ans wont show its intellisense as we are using any

// using Generics

// const genericFunc = <T>(a: T): T => { // T is of type Person
//   let text: T = a;
//   return text;
// };

// type Person = {
//   name: string;
//   age: number;
// };

// const Human:Person={
//   name: "Amar",
//   age: 30
// }

// const ans = genericFunc(Human) // or const ans = genericFunc<Person>(Human)

// console.log(">>>>>>>>>>>>>>>>>>>>>>>>")

// console.log(ans,typeof ans)

// ===============================================================================================================================

// const genericFunc = <T, U>(a: T, b: U):{a:T,b:U} => {
//   return {a,b};
// };

// const ans = genericFunc<number,string>(20,"lol")

// const genericFunc = <T, U extends T>(a: T, b: U):{a:T,b:U} => { // U type is coming from T type.U is inheriting its type from T .If T type is number then U type must be a number. U Type is dependent on T type => condition is if there is no type for U is defined explicitly or on the fly
//   return {a,b};
// };

// const ans = genericFunc<number,number>(20,30)

// type Person1 = {
//   name: string;
//   age: number;
// };

// type Person2 = {
//   name: string;
//   age: number;
//   email:string
// };

// const user1:Person1={
//   name: "Amar",
//   age: 28
// }

// const user2:Person2={
//   name: "Lycan",
//   age: 28,
//   email:"l@l.com"
// }

// const genericFunc = <T, U extends T>(a: T, b: U): { a: T; b: U } => {
//   return { a, b };
// };

// const ans = genericFunc<Person1, Person2>(user1, user2);

// ===================================================================================================================================

// type Person = {
//   name: string;
//   age: number;
// };


// const users: Person[] = [
//   { name: "Amar", age: 101 },
//   { name: "Anar", age: 102 },
//   { name: "Levi", age: 103 },
//   { name: "Lycan", age: 141 },
// ];

// const filterbyPeople = (arr: [], propertyKey: any, targetValue: any) => {

// arr.filter(item=>item[propertyKey]===targetValue)

// };


// const filteredPeopleByName = filterbyPeople(users,"name","Amar")

// Converting above code in generic

// revisit other links online for generics