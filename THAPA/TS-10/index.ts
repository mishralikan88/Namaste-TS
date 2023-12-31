// Array Operations

const fruits: string[] = ["apple", "banana", "orange", "mango"];

// 1. Push - Adds element at the end of the array.

const newUpdatedFruits = fruits.push("Kiwi");
console.log(newUpdatedFruits); // prints the updated array length
console.log(fruits); // prints the updated array

// 2. Pop - Removing elements from the array

const lastData = fruits.pop();
console.log(lastData); // prints the last array element
console.log(fruits); // prints the updated array after the last element is removed.

// 3. Array Iteration  - For loop , For...of and ForEach method.

// for loop syntax - for (initialisation ; condition ; increment/decrement) {logic}

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for ..of  loop (Iteration over values ), syntax - for (element of collection) {logic}

for (const fruit of fruits) {
  console.log(fruit);
}

// for ..in  loop (Iteration over index ), syntax - for (elementIndex of collection ) {logic}

for (let fruitindex in fruits) {
  console.log(fruits[fruitindex]);
}

// foreach syntax - collection.forEach(callback)

fruits.forEach((currValue: string) => {
  console.log(currValue);
});
