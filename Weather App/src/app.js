"use strict";
import { getTemperature, getHumidity } from "./statistics.js";
import { getHourlyData } from "./hourly.js";
import { displayName } from "./about.js";
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

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();

  getCityData(cityInput.value)
    .then((response) => {
      const dataList = response.list;
      getTemperature(dataList);
      getHumidity(dataList);
      getHourlyData(dataList);
      displayName();
    })
    .catch((error) => {
      console.log("Fetching country failed", error);
    });
});

//task 3

async function getCityData(city) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${
      city ? city : "Skopje"
    }&units=metric&APPID=dfd72d738665c3213358ca9a3b174bbe`
  ).then((responce) => responce.json());
}

// https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}
