"use strict";
// Type assertion - Type casting
const myobj = {
    name: "Amar",
    email: "a@gmail.com",
};
const getName = () => {
    return myobj["name"];
};
const getEmail = () => {
    return myobj["email"];
};
// const getData = (key: "name" |"email"): string => { // added a type guard so that key would be either name or email . Other values are unacceptable.
//   return myobj[key];
// };
// Another way of using typeguard is by using key of operator with the interfacename or type name
const getData = (key) => {
    return myobj[key];
};
console.log(getData("name"));
console.log(getData("email"));
const myobj1 = {
    name: "Amar",
    email: "a@gmail.com",
};
// no error as const value wont change in the future and it has fixed value name which is one of the type defined inside interface person1
const key = "name";
myobj[key];
// error as let value will change in the future and it could be any type and what if the type is not defined in the interface Person1
let key1 = "name";
// myobj[key1]
// To fix this we use type assertion
let key2 = "name";
console.log(myobj[key2]); // Amar will be console logged
let key3 = "ssss";
console.log(myobj[key3]); // undefined as we dont have type ssss inside interface person1
const myobj2 = {
    name: "Amar",
    email: "a@gmail.com",
};
let keyx = "name";
console.log(myobj[keyx]);
