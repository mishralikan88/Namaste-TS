// classes in typescript.
// Access Specifier
// public

// class Player {
// properties
//   height; // public by default , accessible anywhere in our code
//   weight;

//   constructor(height: number, weight: number) {
//     this.height = height;
//     this.weight = weight;
//   }
// }

// const amar = new Player(100,150)
// console.log(">>>>>>>>>>>>>")
// console.log(amar.height)
// console.log(amar.weight)

// ===================================================================================================
// Private

// class Player {
//     private height;  // private property , cant be accessible outside the class
//     weight;

//     constructor(height: number, weight: number) {
//       this.height = height;
//       this.weight = weight;
//     }

//     myHeight = () => {
//         return this.height // private property is only accesible inside a class
//     }
//   }

//   const amar = new Player(100,150)
//   console.log(amar.height) // error as the scope of this property is with in the class as this is private property of the class
//   console.log(amar.weight)

// ====================================================================================================================
// Protected

// class Player {
//   public readonly id: string | undefined; // accessible outside the class but we can not modify this once initialised.best place to initialise this value is within the contsructor.
//   constructor(
//     private height: number,
//     public weight: number,
//     protected power?: number
//   ) {
//     this.id = String(Math.random() * 100);
//   }
//   getHeight = () => this.height;
// }

// class superPlayer extends Player {
//   special: boolean;

//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power); // invokes base class Player constructor
//     this.special = special;
//   }
//   getMyPower = () => this.power; // this.power is only accesible to derived classes and base class
// }

// const amar = new superPlayer(100, 150, 23, true);
// console.log(amar.getHeight);
// console.log(amar.special);
// console.log(amar.weight);
// console.log(amar.getMyPower);
// //amar.id = 1111111 // cant do as readonly public
// console.log(amar.id)

//    console.log(amar.power) // cannot be accessible outside of the class, only accessible inside the base class and its derived classes since protected.

// ===================================================================================================================

// Short-hand syntax

//   class Player {
//     constructor(private height: number, public weight: number) {}    // Short hand syntax
//     myHeight = () => {
//       return this.height;
//     };
//   }

//   const amar = new Player(100, 150);
//   console.log(amar.weight);

//===================================================================================================================
// getter and setter

// class Player {
//   public readonly id: string | undefined;
//   constructor(
//     private height: number,
//     public weight: number,
//     protected power?: number
//   ) {
//     this.id = String(Math.random() * 100);
//   }

 //   getHeight = () => this.height;
  

// getter  - gets the value.This is a getter version of above function .
// The difference is  while accessing getter outside of the class we can use this as a property not as a function.

//   get getHeight(): number {
//     return this.height;
//   }

// setter - sets the value 
//   set changeHeight(val: number) {
//     this.height = val;
//   }
// }

// const amar = new Player(100, 150);
// console.log("My height", amar.getHeight);

// amar.changeHeight=500 // setter in Action.Setting the value of private property outside of the class indirectly using setter.
// console.log("My height now", amar.getHeight);

// =============================================================================================================================
// class and interface

// interface productType {
//   name: string;
//   price: number;
//   stock: number;
//   id: string;
//   offer?: boolean;
// }

// class Product implements productType{
//     public name:string;
//     public price:number;
//     public stock:number;
//     public id:string = String(Math.random()*1000);

//     constructor(name:string,price:number,stock:number){
//         this.name = name;
//         this.price = price;
//         this.stock= stock;
//     }
// }

// short hand syntax

// interface productType {
//     name: string;
//     price: number;
//     stock: number;
//     getId:()=>string
//     offer?: boolean;
//   }
  
//   class Product implements productType{
  
//       private id:string = String(Math.random()*1000);
  
//       constructor(public name:string, public price:number,public stock:number){}

//       getId = () => this.id;
//   }


//   const product = new Product("Macbook",2000,20)
//   console.log(product.getId)
//   console.log(product.name)


  // =====================================================================================================

  interface productType {
    name: string;
    price: number;
    stock: number;
    offer?: boolean;
  }


  interface GiveId{

    getId:()=>string
  }
  
  class Product implements productType,GiveId{
  
      private id:string = String(Math.random()*1000);
  
      constructor(public name:string, public price:number,public stock:number){}

      getId = () => this.id;
  }


  const product = new Product("Macbook",2000,20)
  console.log("x>>>>>>>>>>>>")
  console.log(product.getId()) 
  console.log(product.name)


  // Abstract classes 