var city = "Delhi"; // inferred as string
// let city: string = "Delhi";
var value = "hello";
value = 123; // allowed
var input = "text";
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
    return "Hi ".concat(name);
}
var result = greet("Likan");
console.log(typeof result);
