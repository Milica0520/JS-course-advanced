"use strict";

const getevenNum = (array) => array.filter((num) => num % 2 === 0);
const getOddNum = (array) => array.filter((num) => num % 2 !== 0);

//named export//obicno na dno fajla
export { getevenNum, getOddNum };
