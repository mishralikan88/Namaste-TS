"use strict";
// classes in typescript.
// Access Specifier
// public
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.random() * 1000);
        this.getId = () => this.id;
    }
}
const product = new Product("Macbook", 2000, 20);
console.log("x>>>>>>>>>>>>");
console.log(product.getId());
console.log(product.name);
// Abstract classes - check online - use case is less likely
