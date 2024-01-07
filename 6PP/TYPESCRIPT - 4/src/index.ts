// optional parameter & optional argument 


type FuncType = (n: number, m: number, l?: number) => number;

const func: FuncType = (n, m, l) => {
  if (typeof l === "undefined") {  // if no l is provided then l willl be undefined
    return n * m;
  } else {
    return n * m * l;
  }
};

const nolvalue=func(10, 20); // no value for l is passed
const withlvalue=func(10, 20, 40);

// default parameter 

type FuncTypedefault = (n: number, m: number, l?: number) => number;

const funcdefault: FuncTypedefault = (n, m, l=20) => {
  if (typeof l === "undefined") {
    return n + m;
  } else {
    return n + m + l;
  }
};

const nolvaluepassedAsArgumernt = funcdefault(10,20)
console.log(">>>>>>>",nolvaluepassedAsArgumernt)

const withlvaluepassedAsArgumernt = funcdefault(10,20,30)
console.log(">>>>>>",withlvaluepassedAsArgumernt)


// rest operator(...) . If we dont know about the number of arguments to be received by a function in that case we provide rest parameter 
// to the function so that the function will receive all arguments in an array


const funcrest = (...restparameters: number[]) => {
  return restparameters;
};

const arrayvalue = funcrest(25, 12, 12, 12, 12);
console.log(arrayvalue);



// The above code but using type this time.
type functionType = (...restparameters:number[]) => number[]
const funcrest1:functionType = (...restparameters) => restparameters;
const arrayvalue1 = funcrest(25, 12, 12, 12, 12);
console.log(arrayvalue);



