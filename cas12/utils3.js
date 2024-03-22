"use strict";
const getMaxNum = (array) => {
  const copy = [...array];
  copy.sort((a, b) => b - a);
  return copy[0];
};
//default export
export default {
  getMaxNum,
};
//prevent default sprecava bubling moze i .stopPropagation()
