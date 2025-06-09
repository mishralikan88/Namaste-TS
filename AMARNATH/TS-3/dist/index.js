"use strict";
let city = "Delhi"; // inferred as string
// let city: string = "Delhi";
let value = "hello";
value = 123; // allowed
let input = "text";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
function log(msg) {
    console.log(msg);
}
function fail() {
    throw new Error("Crash!");
}
function greet(name) {
    return `Hi ${name}`;
}
let result = greet("Likan");
console.log(typeof result);
