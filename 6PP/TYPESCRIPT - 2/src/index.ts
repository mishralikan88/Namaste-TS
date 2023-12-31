const a = 344

alert(a)

let x = 24

//x = "Hello" // invalid in typescript as typescript is not dynamically typed but this is valid in javascript because javaScript is dynamically typed.

console.log(x)

// Defining the type explicitly in Typescript

let nambo : string ="Hello" // or let nambov1=<string>"Hello"

let num : number = 343 // or let numV1 = <number>343

let check:boolean = true // or let checkV1 = <boolean>true

// console.log(">>>>>",checkV1)

console.log(nambo)
console.log(num)
console.log(check)

let anyTypeVar :any = "Hello" // avoid any as we have to be very type specific.when the type is undecided use any in extreme cases.use it for testing.

// If we expect the data to be of different types => Union type .  defining multiple data types for a variable at the time of declaration. 

let test : string | number 
test = 565 // or test = "Hello" ==> this test could be either a number or a string . we are defining its type at declation time.



// functions 
// while defining a function we must provide the types of the arguments the function is taking 
// we can definine the return types and this is optional . if we dont provide the return type , by default the returning value type will be decided for a function implicitly.This is dione by type script compiler.

const func = (n:number,m:number):void =>{
    console.log(n)
    console.log(m)
}
func(1,2)


const add = (n:number,m:number):number =>{
  return n+m
}
const additionresult=add(1,2)
console.log(additionresult)
