"use strict";
// Defining a custom type for a typescript variable
let a = "some value in string"; // defining a variable of type generalType meaning the variable could take either string or a number but not undefined.
// or let a:generalType = 1234 or let a:string | number = "some value in string"
console.log(a);
const add = (n, m) => n + m; // no need to define type for n and m and return type for the function add because we have already defined these types in a type Username and we have set this type for the add function.
const additionresult = add(1, 2);
console.log(additionresult);
//==========================================================================================================================
const arr1 = [12, 24, 36, 48]; //  Array declaration and initialization
const arr2 = [12, 24, 36, 48]; // Array declaration and initialization with type declaration
const arr3 = [1, 2, 3]; // Array declaration and initialisation using generics
const arr4 = new Array(20); // Array declaration 
const arr5 = new Array(20); // Array declaration with multiple type annotations.Array will take the elements with the types specified. 
arr5[0] = "Amar";
arr5[1] = 2;
console.log("Array values", arr5);
// tuple 
const tuple1 = [2323, 2323, "Amar"];
//const tuple2:[number,number,string] = [2323,2323,"Amar","asd"] // error becuase for the 4th element we have not defined the type yet.
// Tuples are similar to arrays but more precise .we define the types in sequence for each element of the tuple.In array we can define type or types just once for all elements . This is the syntactical difference.
// ===============================================================================================================================
// objects
// object declaration and initialisation
const obj = {
    height: 343,
    weight: 245
};
// object declaration and initialisation with type annotations.
const objA = {
    height: 343,
    weight: 245,
    gender: "male"
};
const object = {
    height: 123,
    weight: 1222,
    gender: "Female" // gender is optional .you may provide egnder value or may not provide.Type script compiler wont throw error because we have set this property optional.
};
const objectI = {
    height: 123,
    weight: 1222,
    gender: "Female"
};
const girl = {
    height: 123,
    weight: 1222,
    gender: false,
    beautiful: true,
    func: (n, m) => { console.log(n * m); }
};
console.log(">>>>>>>>>>>>><<<<<<<<<<<<<");
girl.func(10, 20);
