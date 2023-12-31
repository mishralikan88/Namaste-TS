"use strict";
// optional parameter and optional argument 
const func = (n, m, l) => {
    if (typeof l === "undefined") { // if no l is provided then l willl be undefined
        return n * m;
    }
    else {
        return n * m * l;
    }
};
const nolvalue = func(10, 20); // no value for l is passed
const withlvalue = func(10, 20, 40);
const funcdefault = (n, m, l = 20) => {
    if (typeof l === "undefined") {
        return n + m;
    }
    else {
        return n + m + l;
    }
};
const nolvaluepassedAsArgumernt = funcdefault(10, 20);
console.log(">>>>>>>", nolvaluepassedAsArgumernt);
const withlvaluepassedAsArgumernt = funcdefault(10, 20, 30);
console.log(">>>>>>", withlvaluepassedAsArgumernt);
// rest operator(...) . If we dont know about the number of arguments to be received by a function in that case we provide rest parameter 
// to the function so that the function will receive all arguments as an array
const funcrest = (...restparameters) => {
    return restparameters;
};
const arrayvalue = funcrest(25, 12, 12, 12, 12);
console.log(arrayvalue);
const funcrest1 = (...restparameters) => restparameters;
const arrayvalue1 = funcrest(25, 12, 12, 12, 12);
console.log(arrayvalue);
