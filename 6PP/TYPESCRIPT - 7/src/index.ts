// Type assertion - Type casting

// const btn = document.getElementById("btn");

// btn?.onclick // TypeScript does not know whether a button in the html exists or not,It could be either null or an html element thats why a question mark ? was given

// We have to tell typescript specificly that btn is an Html element .Thus there is no need to use ? operator.This concept is known as type assertion

// way 1 -Type assertion

// const btn = document.getElementById("btn") as HTMLElement;

// way2 - Type assertion

//const btn = <HTMLElement>document.getElementById("btn");

// way3 - Type assertion

//const btn = document.getElementById("btn")!;

// btn.onclick;

// const img = document.getElementById("myImg")!;
// img.src // src is not present in img element

// we have to tell type script specifically that img is html element.
// const img = document.getElementById("myImg") as HTMLImageElement;
// img.src;

// const form = document.getElementById("myForm") as HTMLFormElement;
// const myinput = document.querySelector("form > input") as HTMLInputElement;
// form.onsubmit = (e) => {
//   e.preventDefault(); // prevents default behavior of the browser like page refreshing and all
//   const value = Number(myinput.value);
//   // console.log(value);
//   // console.log(typeof value);
//   const h2 = document.createElement("h2")
//   h2.textContent=String(value+20)
//   const body = document.querySelector("body")!
//   body.append(h2)
// };

// =====================

// For dynamic object we can manipulate properties inside of it.We can add new properties , remove properties etc.
// while defining Type or interface , We useally define a general type for these properties.
// we provide a key with a type inside an array followed by the type of the value  key will receive.
// This rule applies to all properties with the same configuration.

// interface person {
//   [key: string]: string;
// }

// const myobj: person = {
//   name: "Amar",
//   email: "a@gmail.com",
// };

// const getName = (): String => {
//   return myobj["name"];
// };

// const getEmail = (): string => {
//   return myobj["email"];
// };
// console.log(">>>>>>>>>>>>>>>");
// console.log(getName());
// console.log(getEmail());

// console.log(">>>>>>>>>>>>>>>");

// const getData = (key: string): string => {
//   return myobj[key];
// };

// console.log(getData("name"))
// console.log(getData("email"))
// console.log(getData("lol")) // we dont have a key with name lol .undefined will be returned. we can put type guard to handle this case 

// ========================================================================================================
// Type guard in Action

interface person {
  name:string
  email:string
}

const myobj: person = {
  name: "Amar",
  email: "a@gmail.com",
};

const getName = (): String => {
  return myobj["name"];
};

const getEmail = (): string => {
  return myobj["email"];
};

// const getData = (key: "name" |"email"): string => { // added a type guard so that key would be either name or email . Other values are unacceptable.
//   return myobj[key];
// };

// Another way of using typeguard is by using key of operator with the interfacename or type name

const getData = (key: keyof person ): string => { 
  return myobj[key];
};

console.log(getData("name"))
console.log(getData("email"))

// console.log(getData("lasol")) // Type guard check


//=================================================================================================================


interface person1 {
  name:string
  email:string
}

const myobj1: person1 = {
  name: "Amar",
  email: "a@gmail.com",
};

// no error as const value wont change in the future and it has fixed value name which is one of the type defined inside interface person1
const key = "name"
myobj[key]


// error as let value will change in the future and it could be any type and what if the type is not defined in the interface Person1
let key1 = "name"
// myobj[key1]

// To fix this we use type assertion

let key2 = "name"
console.log(myobj[key2 as keyof person1]) // Amar will be console logged


let key3 = "ssss"
console.log(myobj[key3 as keyof person1]) // undefined as we dont have type ssss inside interface person1



//=================================================================================================
// If we are not sure about the interface name from which we defined types for the object in that case we use typeof operator of the
// object

interface person1 {
  name:string
  email:string
}

const myobj2: person1 = {
  name: "Amar",
  email: "a@gmail.com",
};



let keyx = "name"
console.log(myobj[keyx as keyof typeof myobj2]) 



