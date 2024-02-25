"use strict";
//cas 3
//JSAON
//AJAX

/*
const studentsHtml = document.getElementById("students");
const sendRequestBtn = document.getElementById("sendRequest");

sendRequestBtn.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("xhr - success");
      console.log("response", xhr.response);
      const studentsResponse = JSON.parse(xhr.response);
      const li = document.createElement("li");
      li.innerHTML = studentsResponse.students;
      studentsHtml.appendChild(li);
      console.log(studentsResponse);
    } else {
      console.error("xhr error");
    }
  };

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json"
  );
  xhr.send();
});
*/
//http s protokol
/*
let xhr = new XMLHttpRequest();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log("xhr sucess");
    console.log("response", xhr.response);
    const students = JSON.parse(xhr.response);
    console.log(students);
  } else {
    console.error("xhr error");
  }
  //staus moze biti :
  //200 - 300/zahtjev uspio
  //400+/nije
  //500+/nije
};
//GET,POST,PUT(ZA EDIT),DELETE
xhr.open(
  "GET",
  "https://github.com/sedc-codecademy/rsbawd02-04-ajs/blob/main/Class%2003/Materials/Exercises.md"
);

xhr.send();
*/

//drugi nacin

// $.ajax(){
//   url: " https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json",
//   success: function(){
//     console.log("jQuery  -success");
//     const
//   }
// }

/*
$.ajax({
  url: "https://github.com/sedc-codecademy/rsbawd02-04-ajs/blob/main/Class%2003/Materials/Exercises.md",
  success :function (){
    console.log("jQuery - success");
    const students = JSON.parse(responce);
    console.log(students);

  },
  error: function(){
    console.error('jQueri - error');
  }
});
*/

//fech metoda
/*
fetch(
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json"
)
  .then(function (response) {
    console.log("fetch success");
    console.log("response ", response);
    return response.json();
  })
  //pretvotri u java skript taj js, to je ovaj drugi then,kao .parse
  .then(function (jsResponse) {
    console.log(jsResponse);
  })
  .catch(function () {
    console.error("fetch - error");
  });
*/
/*
const astroList = document.getElementById("astros");
fetch("http://api.open-notify.org/astros.json")
  .then(function (responce) {
    return responce.json();
  })
  .then(function (spaceData) {
    console.log(spaceData);
    spaceData.people.forEach((astronaut) => {
      const li = document.createElement("li");
      li.innerHTML = astronaut.name;
      astroList.appendChild(li);
    });
  })
  .catch(function () {
    console.error("Route has failed");
  });
*/
const starWarsBtn = document.getElementById("starWarsbtn");
const h1 = document.getElementById("name");

const requiredData = ["height", "mass", "hair_color", "eye_color"];

starWarsBtn.addEventListener("click", function () {
  fetch("https://swapi.dev/api/people/1")
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      // console.log(responseData);
      h1.innerHTML = responseData.name;

      const table = document.createElement("table");
      const trKays = document.createElement("tr");
      const trValues = document.createElement("tr");
      const fiteredKays = Object.keys(responseData).filter((kay) =>
        requiredData.includes(kay)
      );
      fiteredKays.forEach((kay) => {
        const th = document.createElement("th");
        th.textContent = kay;
        trKays.appendChild(th);

        const td = document.createElement("td");
        td.textContent = responseData[kay];
        trValues.appendChild(td);

        // console.log(`${kay}${responseData[kay]}`);
      });
      table.appendChild(trKays);
      table.appendChild(trValues);
      document.body.appendChild(table);
      // console.log(fiteredKays);
    })
    .catch(function () {
      console.error("Route has failed");
    });
});
