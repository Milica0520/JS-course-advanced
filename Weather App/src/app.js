"use strict";

import { getTemperature, getHumidity } from "./statistics.js";
import { getHourlyData } from "./hourly.js";
import { displayName } from "./about.js";
//task 1
const navLinks = document.querySelectorAll(".nav-link");
const pageDivs = document.querySelectorAll(".page");

const displayPage = function (id) {
  pageDivs.forEach((div) => (div.style.display = "none"));
  pageDivs[id].style.display = "block";
};

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
