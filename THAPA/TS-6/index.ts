// function declaration

// function greet(name: string, id: number):void {
//   console.log(`Welcome,${name} and your id is ${id}.`);
// }

// Function invocation

// greet("lycan", 1);

// using Arrow function

const greetArrow = (name: string, id: number): string => {
  return `Welcome,${name} and your id is ${id}.`;
};

greetArrow("Amar", 1);

// palindrome logic

const isPalindrome = (palin: string): boolean => {
  let mypalin = palin.split("").reverse().join("");
  return mypalin == palin;
};

console.log(isPalindrome("1221"));
