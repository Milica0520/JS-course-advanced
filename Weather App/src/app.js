"use strict";
// import humidityModul from "./humidity.js";
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
  // console.log(cityInput.value);
  getCityData(cityInput.value)
    .then((response) => {
      // console.log(response);

      const dataList = response.list;
      console.log(dataList);

      const tempMin = dataList
        .map((el) => el.main.temp_min)
        .sort((a, b) => a - b)[0];
      const tempMax = dataList
        .map((el) => el.main.temp_max)
        .sort((a, b) => b - a)[0];

      let sumTemp = 0;
      const sumOfTemp = dataList
        .map((el) => el.main.temp)
        .forEach((el) => (sumTemp += el));

      const avgTemp = sumTemp / dataList.length;

      statisticsResultDiv.innerHTML = `<ul>
      <li>MIN TEMP: ${tempMin} °C</li>
      <li>AVG TEMP: ${avgTemp} °C</li>
      <li>MAX TEMP: ${tempMax} °C</li>
      </ul>`;

      const humMin = dataList
        .map((el) => el.main.humidity)
        .sort((a, b) => a - b)[0];
      console.log(humMin);
      const humMax = dataList
        .map((el) => el.main.humidity)
        .sort((a, b) => b - a)[0];
      console.log(humMax);

      let sumOfHum = 0;
      const humSum = dataList
        .map((el) => el.main.humidity)
        .forEach((el) => (sumOfHum += el));
      const avgHum = sumOfHum / dataList.length;

      console.log(avgHum);

      const humidityDiv = document.createElement("div");
      statisticsResultDiv.appendChild(humidityDiv);
      humidityDiv.innerHTML = `<ul>
      <li>MIN HUMD: ${humMin} %</li>
      <li>AVG HUMD: ${avgHum} %</li>
      <li>MAX HUMD: ${humMax} %</li>
      </ul>`;

      // const followingPeriodDiv = document.createElement("div");

      console.log(tempMax);

      // const currHumirity = response.main.humidity;
      // const date = new Date(response.dt * 1000).toLocaleString();

      // const table = document.createElement("table");
      // const tr = document.createElement("tr");
      // const td = document.createElement("td");
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
