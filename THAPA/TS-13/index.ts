// type alias . First letter should be capital.The object where we define types with key as attributes and value as types separated by (:).Each type declaration ends with a semicolon(;)

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  gender?: boolean; // optional property/attribute
  address: {
    city: string;
    country: string;
  };
};

const person1: Person = {
  name: "Amar",
  age: 28,
  isStudent: true,
  address: {
    city: "Orissa",
    country: "India",
  },
};

const person2: Person = {
  name: "Lycan",
  age: 30,
  isStudent: false, // optional property gender can be initialised. It is optional.
  address: {
    city: "OrissaA",
    country: "EastIndia",
  },
};

console.log(person1.address.city);
console.log(person2.address.city);

// example 2

type Product = {
  name: string;
  price: number;
  quantity: number;
};
const product: Product = {
  name: "laptop",
  price: 1000,
  quantity: 5,
};

const calculateToralPrice = (product: Product) =>
  product.price * product.quantity;

calculateToralPrice(product);
