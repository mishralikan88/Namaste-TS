"use strict";
// Function with objects
const getData = (product) => {
    console.log(">>>>>>>>>>");
    //   product.id = "asdasdasasdasdad"; // cannot be changed as this is read only property being set in interface
    console.log(product);
};
const productone = {
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
const errorHandler = () => {
    throw new Error();
};
const errorHandler2 = () => {
    return new Error(); // return type is Error
};
const mode = "light";
// const mode2:themeMode = "asdasdasd" // error 
