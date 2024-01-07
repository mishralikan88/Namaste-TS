// Any vs Unknown vs never


// Any 
// any disables type checking,meaning we wont get compile time error checking.
// You can do anything with any type variable.
// any type variable is javascript variable.


let anyval:any = 1 // possible
anyval.toUpperCase() // not possible
anyval.xxx= 2  // not possible
anyval++ // not possible
anyval = true // possible



// Unknown 
// unknown is similar to any but it enables type checking, meaning we will get compile time error checking.
// We can't do anything with unknown type variable. 
// Before we operate on unknown type variable we gotta explicitly define the type of that variable.


let unknownVal:unknown = 1 // possible
unknownVal.toUpperCase() // not possible
unknownVal.xxx= 2  // not possible
unknownVal++ // not possible
unknownVal = true // not possible 
if (typeof unknownVal === 'boolean')  unknownVal= true // possible




// never - empty set in TS
// no possible value is of type never

const errorHandler = (): never => {
    // when we throw error in that case never type is returned. return type is never
    throw new Error();
};
  
const errorHandler2 = () => {
    return new Error(); // return type is Error
};


// any - I dont care. 
// unknown - I dont know , make the type specific before you do this or that . Ensures type safety.
// never - I dont even exist.


 