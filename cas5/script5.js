"use strict";

// function getFullName(fname ,lname){
//   return `${fname} ${lane}`;
// }

// const getFullName = (fname, lname) => `${fname} ${lane}`;

// const numberState = [
//   (num) => (num % 2 === 0 ? "even" : "odd"),
//   (num) => (num >= 0 ? "even" : "odd"),
// ];
// numberState[0]();

// function onlinePayment() {
//   console.log("online");
// }

// function onlinePayment() {
//   console.log("cash");
// }

// const preferedWay = "online";

// function getPaymentMetod() {
//   if (preferedWay === "online") {
//     return onlinePayment;
//   }else if(preferedWay === "cash"){
//     return cashPayment;
//   }else{

//   }
// }

// function getLogestString() {
//   console.log("arguments", arguments);
//   let longest = "";

//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i].length >= longest.length) {
//       longest = arguments[i];
//     }
//   }
//   console.log("longest string is", longest);
// }

// getLogestString("Milica", "Goran", "Djordje");
// getLogestString("Milica", "Goran", "Djord", "Sava");
//arguments nije dostupno u arrow funkcijama, nema ni this

// const pets = ["bobby", "Cicko", "Rex", "Kitty"];

// const grades = [5, 4, 5, 3, 5, 2];

// const employees = [
//   { fname: "Bob", lName: "H", gender: "male",age : 18, salary: 1000 },
//   { fname: "Boby", lName: "Ha", gender: "male",age : 23, salary: 2000 },
//   { fname: "Hoby", lName: "Ha", gender: "female",age : 33, salary: 1500 },
//   { fname: "Jill", lName: "Ha", gender: "female",age : 24, salary: 1500 },
// ];

// const olderThen18 = employees.filter((el) => el.age > 18);

// const females = employees.filter((el) => el.gender === "female");

// //filter rezultat je daje niz
// // pets.filter((pet) => pet.startsWith("B"));
// pets.filter((pet) => {
//   // return pet.startsWith("B");
//   if (pet.startsWith("B")) {
//     return true;
//   }
//   return false;
// });

//foreach

// pets.forEach((pet) => {
//   console.log(pet);
// });
// let sumOfSalary = 0;
// employees.forEach((employee) => {
//   console.log(employee.fname, employee.lName);
//   sumOfSalary += employee.salary;
// });

//map-vraca novi niz -promjeni niz-  i ne mjenja ogrinalni niz ,broj el ostaje isti

//izvorni niz dolazi sa bekenda

// const pets = ["bobby", "Cicko", "Rex", "Kitty"];

// const grades = [5, 4, 5, 3, 5, 2];

// const employees = [
//   { fname: "Bob", lName: "H", gender: "male", age: 18, salary: 1000 },
//   { fname: "Boby", lName: "Ha", gender: "male", age: 23, salary: 2000 },
//   { fname: "Hoby", lName: "Ha", gender: "female", age: 33, salary: 1500 },
//   { fname: "Jill", lName: "Ha", gender: "female", age: 24, salary: 1500 },
// ];

// const toUpperCase = pets.map((el) => el.toLocaleUpperCase());
// console.log(toUpperCase);

// const multipliedBy3 = grades.map((el) => el * 3);
// console.log(multipliedBy3);

// const betterGrades = grades.map((el) => {
//   if (el === 5) {
//     return el;
//   } else {
//     return el + 1;
//   }
// });

//map vidi sta je to ekvivalent i C#

// const mappedEmpoyee = employees.map((el) => {
//   return {
//     ime: el.fname,
//     prezime: el.lName,
//     plata: el.salary,
//   };
// });
// console.log(mappedEmpoyee);

//pravljenje objekata sa zagradama,

//reduce za agregaciju - sumirate el nekog niza,prima prvo funk a drugi pocetnu vrijednost.

//sort//pitanje na inervijuma, ne vraca nista ali mjenja orginalni niz

//JSON
/*
fetch(
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
)
  .then(function (responce) {
    return responce.json();
  })
  .then((studentsData) => {
    // console.log(studentsData);

    const student = studentsData.filter((student) => {
      if (student.gender === "female" && student.averigegrade === 5) {
        return `${student.firstName} ${student.lastName} `;
      }
    });
    console.log(student);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
*/

//
// Exercise 1
// There is a JSON file with students. Make a call to the file and get the following data from it:

// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2

fetch(
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (responce) {
    console.log(responce);
    // All students with an average grade higher than 3
    const gradesHigherThen3 = responce.filter(
      (student) => student.averageGrade > 3
    );
    console.log(gradesHigherThen3);
    // All female student names with an average grade of 5
    const femaleStudentsGrade5 = responce
      .filter(
        (student) => student.averageGrade === 5 && student.gender === "Female"
      )
      .map((student) => student.firstName);
    console.log(femaleStudentsGrade5);
    // All male student full names who live in Skopje and are over 18 years old
    const maleStudents = responce
      .filter(
        (student) =>
          student.gender === "Male" &&
          student.age > 18 &&
          student.city === "Skopje"
      )
      .map((student) => `${student.firstName} ${student.lastName}`);
    console.log(maleStudents);
    // The average grades of all female students over the age of 24
    const femaleStudentsOlder24 = responce
      .filter((student) => student.age > 24 && student.gender === "Female")
      .map((student) => `${student.firstName} ${student.lastName}`);
    console.log(femaleStudentsOlder24);
    // All male students with a name starting with B and average grade over 2
    const studentsLetterB = responce
      .filter(
        (student) =>
          student.firstName.startsWith("B") &&
          student.averageGrade > 2 &&
          student.gender === "Male"
      )
      .map((student) => `${student.firstName} ${student.lastName}`);
    console.log(studentsLetterB);
  })

  .catch(function () {
    console.error("Route has been faled.");
  });
