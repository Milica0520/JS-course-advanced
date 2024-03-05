"use strict";

//1 .in JS :memory heap , call stack(last in first out task)
//2. web APIs

//3. callbeck Queue(first in first out)
//4. event loop
const myButton = document.getElementById("myButton");

const displayTEacherName = () => {
  console.log("Teacher : Aida P.");
};

const displayAcademyName = () => {
  console.log("Quinshift acedame 2024");
};
//asinhrono programiranje-veci broj taskovo da se izvrsavaju istovremeno
setTimeout(displayTEacherName, 3000); //on hold for 3sec, asinc//poziva funkciju samo jednom
displayAcademyName();
//tako mozemo napraviti sat
let counter = 1;
let intervalId;
const runTimer = () => {
  console.log(counter);
  counter++;

  if (counter === 6) {
    clearInterval(intervalId);
  }
};
// setInterval(runTimer, 2000); //poziva funkciju na svake 3 sekunde u beskonacnost ako ga ne zaustavimo

intervalId = setInterval(runTimer, 2000); //ova setinterval vraca jedinstveni id intervala

//weather app
