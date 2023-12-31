function logAndReturn(value: number | string): number | string {
  console.log(value);
  return value;
}

const numberResult: number | string = logAndReturn(50);
const stringResult: number | string = logAndReturn("Hello");
console.log(numberResult);
console.log(stringResult);

// we keep adding the new types in union chain to support that type in the function parameter and return values.

// For example we added boolean to the union chain number | string so that our function function logAndReturnextended receives boolean value parameters  and return the same type values.

function logAndReturnextended(
  value: number | string | boolean
): number | string | boolean {
  console.log(value);
  return value;
}

const booleanResult: number | string | boolean = logAndReturnextended(true);
console.log(booleanResult);

// If any new type is introduced , lets say if an object type is introduced with in the function, we need to keep adding that type in
// the union chain of the function parameter and return values.

// ===============================================================================================================================

// Generics comes to the rescue.

function logAndReturnGenerics<T>(value: T): T {
  // no need to use union chain :)
  return value;
}

const genericbooleanResult = logAndReturnGenerics<boolean>(true);
const genericstringResult = logAndReturnGenerics<string>("stringValues");
const genericnumberResult = logAndReturnGenerics<number>(25);
const genericnumberResult1 = logAndReturnGenerics(25); // <number> is optional . Type inference kicks in.
