//
"use strict";
// const title = document.getElementById("title");

// title.innerText = "Class 02- - DOM and Events";

// // title.style.color= "red";
// title.style.backgroundColor = "blue";
// title.classList.add("red-text"); //dodaje klasu red-text
// // title.classList.remove("red-text");//uklanjanje  klase
// // title.classList.toggle("red-text");//ako ima brise , ako nema dodaje

// const listItems1 = document.getElementsByTagName("li"); //dobijamo kolekciju
// //najbolje je queryselectorAll
// const listItems = document.querySelectorAll("list-group-item"); // listu nodova i mozemo da koristimo motede za array

//fali nam prompt Const index
// if (index > listItems.length || index <= 0) {
//   console.log("Index not valid");
// } else {
//   listItems[index - 1].classList.add("active");
// }
//oba pristupa dodavanje eventa su jednako dobra

//vrijednost inputa .value
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.addEventListener("DOMContentLoaded", function () {
//   let color = randomColor();
//   document.body.style.backgroundColor = color;
//   const newEl = document.createElement("p");
//   newEl.innerText = color;
//   document.body.appendChild(newEl);
// });

//list generator from an array

// const names = ["Djordje", "Aida", "Goran", "Sava", "Tamara"];
// const nameList = document.getElementById("nameList");
// console.log(nameList);

// function addName() {
//   names.forEach(function (el) {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = el;
//     nameList.appendChild(listItem);
//   });
// }

// const nameList = document.getElementById("nameList");
// const names = ["Djordje", "Aida", "Goran", "Sava", "Tamara"];
// let currentIndex = 0;

// function addName() {
//   if (currentIndex < names.length) {
//     const listItem = document.createElement("li");
//     listItem.textContent = names[currentIndex];
//     nameList.appendChild(listItem);
//     currentIndex++;
//   } else {
//     alert("All names have been added!");
//   }
// }

//list generator
/*
const colorInput = document.getElementById("colorInput");
const fontInput = document.getElementById("fontSizeInput");
const itemsInput = document.getElementById("itemsInput");

function generateList(event) {
  event.preventDefault();
  const itemsArray = itemsInput.value.split(",");
  const list = document.createElement("ul");
  const isFormValid = true;
  if (!colorInput.value) {
    console.warn("Color required!");
    isFormValid = false;
  }
  if (!fontInput.value) {
    console.warn("Font required!");
    isFormValid = false;
  }
  if (!itemsInput.value) {
    console.warn("Items  required!");
    isFormValid = false;
  }
  if (isFormValid) {
    itemsArray.forEach((element) => {
      const item = document.createElement("li");
      item.innerHTML = element;
      item.style.color = colorInput.value;
      item.style.fontSize = fontInput.value;
      list.appendChild(item);
    });
    document.body.appendChild(list);

    colorInput.value = "";
    fontInput.value = "";
    itemsInput.value = "";
  }
}
*/

//Movies renting App

// Create a movie renting app
// There should be an array of movie names
// There should be an input and a search button
// When the person enters a name of a movie it should search the array
// If the name exists it should show an H1 element that says: "The movie can be rented" in green text
// If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
// The input should not be case sensitive ( it should find the movie regardless of capital or small letters )
/*
const movieTitles = [
  "Inception",
  "The Shawshank Redemption",
  "The Godfather",
  "Pulp Fiction",
  "The Dark Knight",
  "Forrest Gump",
  "The Matrix",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Fight Club",
  "Star Wars: Episode V - The Empire Strikes Back",
];
const h1 = document.createElement("h1");
const movieInput = document.getElementById("movieInput");

function searchMovie(event) {
  event.preventDefault();
  const isFormValid = true;
  if (!movieInput.value) {
    console.warn("Color required!");
    isFormValid = false;
  }
  if (isFormValid) {
    let faund = false;
    movieTitles.forEach((elMovie) => {
      if (elMovie === movieInput.value) {
        h1.innerText = `The "${movieInput.value}" can be rented.`;
        h1.style.color = "green";
        faund = true;
      }
      if (!faund) {
        h1.innerText = `The "${movieInput.value}" can't be rented`;
        h1.style.color = "red";
      }
    });
  }
  document.body.appendChild(h1);
  movieInput.value = "";
}
*/

///Reminder App

// Create a reminder app
// There should be:
// An input for entering the title
// An input for entering priority
// An input for color
// A textarea for adding a description
// A button for adding the reminder
// A button for showing all reminders
// When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
// The object should then be added to an array of reminders
// When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
// The title should be the color of the "color" property
const remindersArr = [];
const noteTitleIn = document.getElementById("noteInput");
const notePriorityIn = document.getElementById("priorityInput");
const noteColorIn = document.getElementById("colorInput");
const noteDescriptionIn = document.getElementById("noteContent");

const Note = function (title, priority, color, description) {
  this.title = title;
  this.priority = priority;
  this.color = color;
  this.description = description;
};

function createNoteObject(event) {
  event.preventDefault();
  const title = noteTitleIn.value;
  const priority = notePriorityIn.value;
  const color = noteColorIn.value;
  const description = noteDescriptionIn.value;

  const newNote = new Note(title, priority, color, description);
  remindersArr.push(newNote);
  console.log(remindersArr);
}
console.log(remindersArr);
// When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
// The title should be the color of the "color" property

// const table = document.createElement("tr");
// const currentNote = 0;
// function displayReminders(event) {
//   event.preventDefault();

//   if (currentNote < remindersArr.length) {
//     const row = document.createElement("tr");
//     row.textContent = remindersArr[currentNote];
//     table.appendChild(row);
//     currentNote++;
//   }
// }
// const table = document.createElement("tr"); //u njega treba da idu td
// noteTitleIn.value = "";
// notePriorityIn.value = "";
// noteColorIn.value = "";
// noteDescriptionIn.value = "";
