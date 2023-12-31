// MAP syntax - arr.map(callback)

const numArray: number[] = [1, 2, 3, 4, 5];

const doubleData = numArray.map((currValue: number) => currValue * 2);

const numberToString = numArray.map((currValue: number) =>
  currValue.toString()
);

// FILTER syntax - arr.filter(callback)

const evenNumbers: number[] = numArray.filter(
  (currValue: number) => currValue % 2 == 0
);

const numbersGreaterThanThree: number[] = numArray.filter(
  (currValue: number) => currValue > 3
);

// callback syntax - (currElement:Type)=> boolean expression / logic statament
