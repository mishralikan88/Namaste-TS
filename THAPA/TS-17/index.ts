// | => union operator signifies variable could be more than of one types

const userInput = (value: string | number) => {
  if (typeof value === "number") {
    return value * 2;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return "any other type input you have supplied";
  }
};

userInput("Hello");
userInput(25);

// & = intersection

type Person = {
  name: string;
  age: number;
};

type Employee = {
  emp_id: number;
  department: string;
};

// type EmployeeDetails = Person & Employee // EmployeeDetails type will have all the properties of Person and Employee. EmployeeDetails = Person + Employee

// const employee: EmployeeDetails = {
//     name: "Amar",
//     age: 28,
//     emp_id: 125412,
//     department: "dept 1",
//   };

// | = Union

type EmployeeDetails = Person | Employee; // EmployeeDetails type will have all or wither one of the the properties of Person and Employee. EmployeeDetails = Person or Employee or both

// const employee: EmployeeDetails = {
//     name: "Amar",
//     age: 28,
//     emp_id: 125412,
//     department: "dept 1",
//   }; // or

//   const employee: EmployeeDetails = {
//     name: "Amar",
//     age: 28,
//   }; // or

const employee: EmployeeDetails = {
  emp_id: 125412,
  department: "dept 1",
};

// EXample 2

type User = {
  name: string;
  age: number;
};

type MyLocation = {
  city: string;
  country: string;
};

const user: User = {
  name: "Amar",
  age: 90,
};

const myLocation: MyLocation = {
  city: "Orissa",
  country: "India",
};

// const createUserProfile = (user: User, location: MyLocation) => {
//   return `myname is ${user.name} and I live in ${location.city}`;
// };

// createUserProfile(user,myLocation)

const createUserProfile = (
  user: User,
  location: MyLocation
): User & MyLocation => {
  return { ...user, ...location };
  // return type is an object  having all property Key value pairs from User and MyLocation type.
  // why? Because we have defined a variable in below line which only receives  an object of type  User & MyLocation as return type.
};

const myCompleteData: User & MyLocation = createUserProfile(user, myLocation);

// Use case of & => Intersection is used when we need complete Data
