"use strict";
//named inport//na pocetku fajla
import { getevenNum, getOddNum } from "./utils.js";
import { getTwoDigitNums } from "./utils2.js";
import utils3Modul from "./utils3.js";

const numbers = [26, 9, 333, 44, 17, 7, 22, 133];

//moduls

console.log(getevenNum(numbers));
console.log(getOddNum(numbers));
console.log(getTwoDigitNums(numbers));
console.log(utils3Modul.getMaxNum(numbers));
