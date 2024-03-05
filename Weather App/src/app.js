"use strict";
//task 1
const navLinks = document.querySelectorAll(".nav-link");
const pageDivs = document.querySelectorAll(".page");

// const displayPage = pageDivs.forEach((div) => (div.style.display = "block"));
// const hidePage = pageDivs.forEach((div) => (div.style.display = "none"));
//treba if clicked add active

const displayPage = function (id) {
  // console.log("clicked", id);
  pageDivs.forEach((div) => (div.style.display = "none"));

  pageDivs[id].style.display = "block";
};

// navLinks.forEach(function (link) {

// //  link.addEventListener("click", displayPage);
// });

const addEventsOnLinks = function () {
  for (let id = 0; id < navLinks.length; id++) {
    // console.log(id);
    const link = navLinks[id];
    link.addEventListener("click", () => {
      displayPage(id);
    });
  }
};
addEventsOnLinks();

//task 2

const searchBtn = document.getElementById("citySearchBtn");
searchBtn.addEventListener("click", function () {
  const sityInput = document.getElementById("citySearchInput");
  console.log(sityInput.value);
  sityInput.value = "";
});
