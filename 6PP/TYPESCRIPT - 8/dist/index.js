"use strict";
// Utility classes => Typescript provides utility classes which is very helpful for ease of access
const Useroptional = {
    // both properties are optional you may provide or may not provide.Here I am providing both
    name: "Lycan",
    email: "a@a.com",
};
const User2 = {
    // both properties are requires unless we get an error.
    name: "Lycan",
    email: "a@a.com",
};
const user = {
    // both properties are requires unless we get an error.
    name: "Amar",
    email: "a@gmail.com",
};
// for each and every property we must provide its sub type information . In our case interface properties for each indivisual union property
const users = {
    Amar: { age: 24 },
    Lycan: { age: 24 },
    Levi: { age: 24 },
    Lisa: { age: 24 },
};
//====================================================================================================================================
// Parameters<Type>
const myFunc = (a, b) => {
    console.log(a + b);
};
// ConstructorParameter<Type>
class SampleClass {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
// ReturnType<Type>
const myFuncreturned = (a, b) => {
    return a + b;
};
// InstanceType<Type>
class SampleClass2 {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
