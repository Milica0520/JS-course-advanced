"use strict";

export const getTwoDigitNums = (array) => {
  return array.filter((num) => Math.abs(num).toString().length === 2);
};
