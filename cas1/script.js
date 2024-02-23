// const student = {
//   firstName: "Milica",
//   lastName: "Dujakovic",
//   years: 40,

//   getFullName: function () {
//     // return this.firstName + " " + this.lastName;
//     return `Student je : ${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(student.getFullName());

// const student = new Object();

// student.firstName = "Niko";
// student.lastName = "Nikic";
// student.years = 18;
// student.getFullName = function () {
//       // return this.firstName + " " + this.lastName;
//       return `Student je : ${this.firstName} ${this.lastName}`;
//     }

// function Student(firstName, lastName, years) {
//   //this.firstName ? firstName : "---";
//   // this.firstName = !firstName === undefined ? "---" : firstName; //provjera radi i za null, i za undefined i za prazan string
//   this.firstName = firstName || "---"; //kao prvi primjer napisano jednostavnije, najbolji nacin
//   this.lastName = !lastName === undefined ? "---" : lastName;
//   this.years = !years === undefined ? 0 : years;

//   (this.getFullName = function () {
//     // return this.firstName + " " + this.lastName;
//     return `Student je : ${this.firstName} ${this.lastName}`;
//   }),
//     (this.displayInfo = function () {
//       console.log(
//         `Student je : ${this.getFullName()} ima ${this.year} godina.`
//       );
//     });
// }

// const student1 = new Student("Niko", "Nikic", 18);
// const student2 = new Student("Aida", "Perusic", 20);

// student1.displayInfo();
// student2.displayInfo();

//reference

//kopiranje po referenci
// const original = new Student("Niko", "Nikic", 18);
// //ako hocu dva razlicita objekta

// const copy = { ...original };

// // const copy = original; //pretvori original u kopiju.
// //ne pravi novi objekat nego zauzimaju isto mjsto u
// //  memoriji objekat dobija ime original,copy

// copy.years = 20;
// console.log(copy, original);
/*
function Student(firstName, lastName, age, email) {
  this.firstName = firstName || "...";
  this.lastName = lastName || "...";
  this.age = Number(age) || 0;
  this.email = email || "no email";
}

const database = [];

const btnAdd = document.getElementById("btn");
const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");

btnAdd.onclick = function () {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const age = ageInput.value;
  const email = emailInput.value;

  let isFormValide = true;
  //validacija
  if (!firstName) {
    console.warn("First name not entered");
    isFormValide = false;
  }

  if (!lastName) {
    console.warn("Last name not entered");
    isFormValide = false;
  }

  if (!age) {
    console.warn("Age not entered");
    isFormValide = false;
  }

  if (!email) {
    console.warn("Email  not entered");
    isFormValide = false;
  }

  if (isFormValide) {
    const newStudent = new Student(firstName, lastName, age, email);
    database.push(newStudent);
    console.log("database", database);

    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
  }
};
*/
//arrays
//nizovi i objecti uvjek sa const
/*
const numbers = [12,-2,10];
delete numbers[1];//12, undefined, 10
console.log("first element", numbers[0]);
console.log("last element", numbers[2]);
console.log("count element", numbers.length);
console.log("last element", numbers[numbers.length-1]);


numbers.push(17);
console.log("array", numbers);
numbers.unshift(7);
numbers.pop();
numbers.shift();//uklanja prvi element
*/
//loops,mehanizam da ces bilo koji kod izvrsavati onoliko puta koliko tebi treba
//while
/*
let i = 1;
while (i <= 5) {
  console.log(i);
  i += 1;
}

let broj;

while (broj != 0) {broj = Number(prompt("Unsite broj"))};
do{
  broj = Number(prompt("Unsite broj"));
}while(broj != 0);
*/
//for

// for(let i = 1 ; i <= 5; i++){
// console.log(i);
// }

//for of//sa nizovima npr. objekata

// for(let element of database){
//console.log(element);
// };

//foreach

// array.foreach(function (el) {
//   console.log(el);
// });

// //array references

// const numbers = [3, 14, 23];
// const copy = [...numbers];

//exercises

// 3 - 1000

// const array1 = [];
// const array2 = [];
// for (let i = 1; i <= 1000; i++) {
//   if (i % 3 === 0) {
//     array1.push(i);
//   } else if (i % 4 === 0) {
//     array2.push(i);
//   }
// }
// console.log(array1);
// console.log(array2);

const array3 = [];

for (let i = 1; i <= 1000; i++) {
  if (i % 10 === 1) {
    array3.push(i);
  }
}
console.log(array3);
//uradi ovo sa endsWith

//3 zadatak

let test = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];

// while (test.length > 0) {
//   test.pop();
// }

// console.log(test);
//prvi primjer je typeof
//drugi foreach

// onlyStrings =  test.filter(function(el){
//   return (typeof el === "string");
// })
// // arrayNew = test.map((number) => String(number));//nije dobro
// const onlyNums = [];
// onlyNums =  test.filter(function(el){
//   if(typeof el === "number"){
//     onlyNums.push(el);
//   }
// })

// const nonFalsayArray = [];
// test.forEach(function (el){
//   if(el){
//     nonFalsayArray.push(el);
//   }
// })
// console.log(nonFalsayArray);
