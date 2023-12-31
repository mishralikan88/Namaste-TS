// let name22:string = "Amar"
// name22 = 22

const favHobbies = (hobbies: string | string[]) => {
  // return hobbies.map(()=>{})  //  We get an error here because map only works with array , hobbies could be either a string or strings array.
  // We have to be type specific to resolve this error. We have to narrow down the types to the specifc type with the help of Type guards.
  // We have to narrow down string and string array types to the required type on which we can perform operation,In our case it is a string array Type on which we can perform map operation.
  // Note - Type guard helps in type narrowing.

  if (typeof hobbies === "object") {
    // typeof Type guard in action.In TypeScript Array type is object.
    return hobbies.map(() => {});
  } else {
    console.log(hobbies);
  }
};

favHobbies("coding");
favHobbies(["coding", "gaming"]);
