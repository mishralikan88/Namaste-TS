// Boolean

let isMyNameAmar: boolean = true;
let isAmarFemale: boolean = false;
// isAmarFemale = "Yes" // string cant be assigned on variable of type boolean

function isEVen(a: number): boolean {
  return a % 2 === 0;
}
console.log(isEVen(10));

// BigInt - > 2^53 number is considered as bigInt .

// The number ends with suffix n to denote the number as bigInt number.In tsconfig set "target": "ES2020"

let bigNumber: bigint = 90000000000000000000000000000000n; // Initialising bigInt number using bigint type explictly.the number should end with a suffix n.

let anotherbigNumber = BigInt("90000000000000000000000000000000n"); // Initialising bigInt number using BigInt Constructor.

let sum = bigNumber + anotherbigNumber;
let substract = bigNumber - anotherbigNumber;
let divide = bigNumber / anotherbigNumber;
let multiply = bigNumber * anotherbigNumber;

console.log(sum);
console.log(substract);
console.log(divide);
console.log(multiply);
