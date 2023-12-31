class MathOperations {
  public static PI: number = Math.PI; // PI is static property . We can access this prop by ClassName Math

  // static methods

  public static add(num1: number, num2: number): number {
    return num1 + num2;
  }
  public static sub(num1: number, num2: number): number {
    return num1 - num2;
  }

  public static mul(num1: number, num2: number): number {
    return num1 * num2;
  }

  public static div(num1: number, num2: number): number {
    return num1 / num2;
  }
}

console.log(MathOperations.PI); // we are not creating instance of the class to get an access to this static property.we can access to this property using the class Name.

console.log(MathOperations.add(5, 10));
console.log(MathOperations.sub(10, 5));
console.log(MathOperations.mul(5, 10));
console.log(MathOperations.div(5, 10));

// Advantage of static methods and properties over non-static/instance methods and properties .

// We dont have to create objects in order to access static data and methdos . static is memory effitient as static data and methods are accessible directly by class name.

// use cases  - when we have common data to be used across multiple scenarios, just make that data as static .

// example - Area of Circle (PI * r ** 2) and Perimeter of the circle (2 * PI * r ). Here PI is common . so make PI as static so that memory for PI wont be created by objects when the class is instantiated.
