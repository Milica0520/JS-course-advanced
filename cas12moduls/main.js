"use strict";
// import module1 from "./animalsService.js";

// class Animal {
//   constructor(name, gender, age) {
//     this.name = name;
//     this.gender = gender;
//     this.age = age;
//     this.id = Math.random();
//   }
// }

// const animals = [
//   new Animal("Kitty", "female", 2),
//   new Animal("Rex", "male", 3),
//   new Animal("Bobby", "male", 4),
//   new Animal("Micka", "female", 1),
// ];

// console.log(Array.isArray(animals));

import modul1 from "./productsService.js";

class Product {
  constructor(name, category, price) {
    this.id = Math.random();
    this.name = name;
    this.category = category;
    this.price = price;
  }
}
const products = [
  new Product("Laptop", "Electronics", 1700),
  new Product("Dress", "Clothing", 35),
  new Product("T-Shirt", "Clothing", 15),
  new Product("Vacuum cleaner", "Electronics", 70),
  new Product("Headphones", "Electronics", 60),
];

console.log(modul1.getProductsByCategory(products, "Electronics"));
console.log(`Sum of prices ${modul1.getSumOfPrices(products)}`);
console.log(`Averige price ${modul1.getAveragePrice(products)}`);
console.log(`The sheapest product ${modul1.getTheCheapestProduct(products)}`);
