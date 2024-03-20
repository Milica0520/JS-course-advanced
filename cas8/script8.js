"use strict";

//pokazivac this

// console.log("root", this); //window

// function firstFunc() {
//   console.log("firstFunc -> this", this);
// }

// const student = {
//   name: "Niko Nikic",
//   displayStudent: function () {
//     console.log(this);
//   },
// };

// function Student(name, age) {
//   this.naem = name || "---";
//   this.age = age || 0;
// }

// const st1 = new Student("john", 20);
// console.log(st1.name); //john

//destricturing

//razlika izmedju map i destructuring?????????

//exampel 1
/*
const student = {
  id: 1001,
  name: "Alice",
  age: 20,
  address: {
    street: "456 Elm St",
    city: "Somewhere",
    country: "USA",
  },
  grades: {
    math: 90,
    science: 85,
    history: 95,
  },
};
// task 1
const {
  name,
  age = "0",
  address: { city = "---" },
} = student;

console.log(student);
*/
//task 2

// const {
//   grades: { math, science, history },
// } = student;

// const info = { math, science, history }; //to nije destructuring
// console.log(info);
// // console.log(student);
// const calcAverigeGrade = (math + science + history) / 3;

// console.log(calcAverigeGrade);

//array destrucruring
/*
const studentSubjects = ["Math", "Science", "History"];
const studentGrades = [90, 85, 95];

const [subject1, subject2, subject3] = studentSubjects;
const [grade1, grade2, grade3] = studentGrades;

console.log(`Subject 1 :${subject1} - ${grade1}`);
console.log(`Subject 2 :${subject2} - ${grade3}`);
console.log(`Subject 3 :${subject3} - ${grade3}`);
*/
//

function Car(brand, model, year, price) {
  this.brand = brand || "---";
  this.model = model || "---";
  this.year = Number(year) || "0";
  this.price = Number(price) || "0";
  this.owners = [];

  // this.displayOwners = function () {
  //   //uradi sama
  // };

  this.displayOwners = function () {
    if (this.owners.length) {
      this.owners.forEach((element) => {
        console.log(`Owners : ${element.fullName}`);
      });
    } else {
      console.log("This car is new. No previous owners.");
    }
  };
  this.displayDetails = function () {
    console.log(`${brand} ${model}`);
    console.log(`Year : ${year}`);
    console.log(`Price : ${price}`);
    this.displayOwners();
  };

  this.addOwner = function ({ id, fullName }) {
    this.owners.push({ id, fullName });
  };
}

const car1 = new Car("VW", "Golf VII", 2019, 15000);
const car2 = new Car("Audi", "A3", "2022", 24000);

const person1 = {
  id: 1,
  fullName: "Aida Pirusic",
  age: 12,
  favFood: ["chocolate", "water"],
};

const person2 = {
  id: 2,
  fullName: "Miroslav Popovic",
  age: 12,
  favFood: ["meat", "orange"],
};

const person3 = {
  id: 3,
  fullName: "Almir Vuk",
  age: 12,
  favFood: ["carrot", "water"],
};

car1.addOwner(person1);
console.log("\n");
car1.displayDetails();
console.log("\n");
car2.displayDetails();
