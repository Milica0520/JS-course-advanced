"use strict";

//task 1
//pitanje za iduci cas razlike izmedju objekta i niza i njihovih metoda??
/*
let page = 1;
function show10planets() {
  fetch(`https://swapi.dev/api/planets/?page=${page}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      // console.log("response is : ", responseData);
      // console.log("type of responseData  : ", typeof responseData);
      const table = document.createElement("table");
      const trKeys = document.createElement("tr");

      // console.log(responseData.results);
      //niz od 10 planeta
      const firstTenPlanets = responseData.results.map((planet) => ({
        name: planet.name,
        population: planet.population,
        climate: planet.climate,
        gravity: planet.gravity,
      }));
      // console.log(firstTenPlanets);
      //ispisuje zaglavlje tabele , tj, nazive kljuceva(pitanje kako da preimenujem kljuceve u tabeli?)!!!!!
      for (let kay in firstTenPlanets[0]) {
        const th = document.createElement("th");
        th.innerHTML = kay;
        trKeys.appendChild(th);
      }
      table.appendChild(trKeys);
      //iszlistava planete i puni tabelu
      firstTenPlanets.forEach((planet) => {
        const trValues = document.createElement("tr");
        for (let kay in planet) {
          const td = document.createElement("td");
          td.innerHTML = planet[kay];
          trValues.appendChild(td);
        }
        table.appendChild(trValues);
      });

      document.body.appendChild(table);
      //
      const showDataBtn = document.getElementById("showDataBtn");
      showDataBtn.style.display = "none";
      //
      const previousBtn = document.createElement("button");
      document.body.appendChild(previousBtn);
      previousBtn.innerHTML = "Previous page";
      previousBtn.addEventListener("click", showPreviousPage);
      //novo dugme za next 10
      const nextBtn = document.createElement("button");
      nextBtn.innerHTML = "Next 10";
      document.body.appendChild(nextBtn);
      //
      nextBtn.addEventListener("click", function () {
        page++;
        // console.log(page);
        // Uklanja prethodni sadržaj tabele
        document.body.removeChild(table);
        show10planets();
        document.body.removeChild(nextBtn);
        document.body.removeChild(previousBtn);
      });

      function showPreviousPage() {
        // alert("clicked");
        // console.log(page);
        page--;
        // Uklanja prethodni sadržaj tabele
        document.body.removeChild(table);
        show10planets();
        document.body.removeChild(nextBtn);
        document.body.removeChild(previousBtn);
      }
    })
    .catch(function () {
      console.error("Route has failed");
    });
}
*/

let page = 1;

function getTableHeader() {
  const keyNames = ["Planet name", "Population", "Climate", "Gravity"];
  const trKeys = document.createElement("tr");

  for (let key of keyNames) {
    const th = document.createElement("th");
    th.innerHTML = key;
    trKeys.appendChild(th);
  }
  return trKeys;
}

function getTableRow(planet) {
  const trValues = document.createElement("tr");
  for (let key in planet) {
    const td = document.createElement("td");
    td.innerHTML = planet[key];
    trValues.appendChild(td);
  }
  return trValues;
}

function generateTable(planets) {
  const table = document.createElement("table");
  const trKeys = getTableHeader();
  table.appendChild(trKeys);

  planets.forEach((planet) => {
    const trValues = getTableRow(planet);
    table.appendChild(trValues);
  });

  document.body.appendChild(table);
}

function hideShowDataBtn() {
  const showDataBtn = document.getElementById("showDataBtn");
  if (showDataBtn) {
    showDataBtn.style.display = "none";
  }
}

function showPreviousPage() {
  page--;

  document.body.removeChild = "";
  show10planets();
}

function generatePreviousButton() {
  const previousBtn = document.createElement("button");
  document.body.appendChild(previousBtn);
  previousBtn.innerHTML = "Previous page";
  previousBtn.addEventListener("click", showPreviousPage);
}

function generateNextButton() {
  const nextBtn = document.createElement("button");
  nextBtn.innerHTML = "Next 10";
  document.body.appendChild(nextBtn);
  nextBtn.addEventListener("click", function () {
    page++;
    document.body.innerHTML = "";
    show10planets();
  });
}

function show10planets() {
  fetch(`https://swapi.dev/api/planets/?page=${page}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      const firstTenPlanets = responseData.results.map((planet) => ({
        name: planet.name,
        population: planet.population,
        climate: planet.climate,
        gravity: planet.gravity,
      }));
      generateTable(firstTenPlanets);
      hideShowDataBtn();
      generatePreviousButton();
      generateNextButton();
    })
    .catch(function () {
      console.error("Route has failed");
    });
}
