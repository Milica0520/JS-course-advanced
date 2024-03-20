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
    const link = navLinks[id];
    link.addEventListener("click", () => {
      displayPage(id);
    });
  }
};
addEventsOnLinks();

//task 2

const searchBtn = document.getElementById("citySearchBtn");
const cityInput = document.getElementById("citySearchInput");
const statisticsResultDiv = document.getElementById("statisticsResult");

searchBtn.addEventListener("click", function () {
  // console.log(cityInput.value);
  getCityData(cityInput.value)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("Fetching country failed", error);
    });
});

//task 3

//	00ec0c43ebfcea97975cb11b53f52995

async function getCityData(city) {
  // console.log(cityInput.value);
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${
      city ? city : "Skopje"
    }&units=metric&APPID=dfd72d738665c3213358ca9a3b174bbe`
  ).then((responce) => responce.json());
}
