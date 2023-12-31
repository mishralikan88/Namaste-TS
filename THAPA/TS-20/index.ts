// interface Greet {
//   name: string;
//   age: number;
// }

// const greets: Greet = {
//   name: "vinod",
//   age: 30,
// };

interface Products {
  name: string;
  price: number;
  quantity: number;
}

const product1: Products = {
  name: "LenovoLaptop",
  price: 1000,
  quantity: 5,
};

const calculateTotalPrice = (productObj: Products): number => {
  const { price, quantity } = productObj;
  return price * quantity;
};

calculateTotalPrice(product1);
