// Defining a custom type for a typescript variable

type generalType = string | number // defining a type generalType which could be either string or a number

let a:generalType = "some value in string"  // defining a variable of type generalType meaning the variable could take either string or a number but not undefined.

// or let a:generalType = 1234 or let a:string | number = "some value in string"

console.log(a)

//================================================================================================================

// Defining type for a function expression 

type additionType = (n:number,m:number) => number

const add:additionType = (n,m) => n + m // No need to define type explicitly for n and m & return type because we have already defined these types in type additionType & we have set this type for add function.

const additionresult = add(1,2)

console.log(additionresult)


//==========================================================================================================================

const arr4:Array<number> = new Array(20)  // Array declaration using Generics.

const arr3:Array<number> = [1,2,3] // Array declaration with initialisation using Generics.

const arr1 = [12,24,36,48]  // Array declaration with initialization.

const arr2:number[] = [12,24,36,48] // Array declaration with initialization with Type annotation.

const arr5:Array<number|string> = new Array(20)  // Array declaration with multiple type annotations.Array will take the elements with the types specified. 

arr5[0] = "Amar" 

arr5[1] = 2

console.log("Array values",arr5)


// tuple 
const tuple1:[number,number,string] = [2323,2323,"Amar"]

//const tuple2:[number,number,string] = [2323,2323,"Amar","asd"] // error becuase for the 4th element we have not defined the type yet.


// Tuples are similar to arrays but more precise .we define the types in sequence for each element of the tuple.In array we can define type or types just once for all elements . This is the syntactical difference.



// ===============================================================================================================================

// objects

// object declaration and initialisation
const obj = {   
  height:343,
  weight:245 
}

// object declaration and initialisation with type annotations.
const objA:{
  height:number,
  weight:number,
  gender:string
} = {   
  height:343,
  weight:245,
  gender:"male" 
}

// defining object type explicitly using type

type obj ={
  height:number,
  weight:number,
  gender?:string
}

const object:obj = {
  height:123,
  weight:1222,
  gender:"Female" // gender is optional .you may provide egnder value or may not provide.Type script compiler wont throw error because we have set this property optional.
}


// defining object type explicitly using interface

interface objI {
  height:number,
  weight:number,
  gender?:string
}

const objectI:objI = {
  height:123,
  weight:1222,
  gender:"Female" 
}



interface ObjA{
  height:number,
  weight:number,
  gender?:boolean
}

interface ObjB extends ObjA{ // interface inheritance in action. ObjB child can extend its types to its current type +  types present in its parent.
  beautiful:boolean
  func:(n:number,m:number)=>void
}

const girl:ObjB = {
  height:123,
  weight:1222,
  gender:false,
  beautiful:true,
  func:(n,m)=>{console.log(n*m)} 
}
console.log(">>>>>>>>>>>>><<<<<<<<<<<<<")
girl.func(10,20)


