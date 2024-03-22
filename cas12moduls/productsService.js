"use strict";

const getProductsByCategory = (array, category) => {
  return array
    .filter((product) => product.category === category)
    .map((element) => element.name);
};

const getSumOfPrices = (array) => {
  let sum = 0;
  array.forEach((product) => (sum += product.price));

  return sum;
};

const getAveragePrice = (array) => {
  const sum = getSumOfPrices(array);
  const averigePrice = sum / array.length;

  return averigePrice;
};

const getTheCheapestProduct = (array) => {
  const arrayCopy = [...array];
  const cheapestProduct = arrayCopy.sort((a, b) => a.price - b.price)[0].name;
  return cheapestProduct;
};
export default {
  getProductsByCategory,
  getSumOfPrices,
  getAveragePrice,
  getTheCheapestProduct,
};
