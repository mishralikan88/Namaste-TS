// Function with objects

// type getDataType = (product: {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
// }) => void;

// const getData: getDataType = (product) => {
//   console.log(product);
// };

// const productone = {
//   name: "Macbook",
//   stock: 46,
//   price: 9999,
//   photo: "SamplePhotos",
// };

// console.log(">>>>>>>>>>>")
// getData(productone)

// getData({
//     name: "Macbook",
//     stock: 46,
//     price: 9999,
//     photo: "SamplePhotos",
//   })

// using interface

interface Product {
  // type can also be used in place of interface
  name: string;
  stock: number;
  price: number;
  photo: string;
  readonly id: string;
}

type getDataType = (product: Product) => void;

const getData: getDataType = (product) => {
  console.log(">>>>>>>>>>");
//   product.id = "asdasdasasdasdad"; // cannot be changed as this is read only property being set in interface
  console.log(product);
};

const productone: Product = {
  name: "Macbook",
  stock: 46,
  price: 9999,
  photo: "SamplePhotos",
  id: "asdasd",
};

getData(productone);

// any - This type is commonly used when we expect some API data to be returned and we dont know the types of of the returned value.

// ============================
// Never type

const errorHandler = ():never => { // when we throw error in that case never type is returned.return type = never    
  throw new Error();
};

const errorHandler2 = () => {
    return new Error(); // return type is Error
  };

  // ===============
  type themeMode = "light" | "dark"
  const mode:themeMode = "light"
  // const mode2:themeMode = "asdasdasd" // error 
