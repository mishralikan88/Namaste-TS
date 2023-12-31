// Default parameter

// const greet3 = (name: string, id: number = 1): string => {
// id is default parameter
//   return `Welcome ${name} and your id is ${id}`;
// };

// greet3("Amar"); // 1 will be assigned on id if we dont pass id here.
// greet3("Amar", 3); // id 1 is replaced by passed id 3

//Optional Parameter

const greet3 = (name: string, id?: number): string => {
  return `Welcome ${name} and your id is ${id}`;
};

// id can be passed or cannot be passed . It is optional to pass.
greet3("Amar"); // not passing id
greet3("Amar", 3); // passing id
