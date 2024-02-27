//funktions

// function getFullName(fName, lName) {
//   //deklaracija//parametri
//   return `${fName} ${lName}`;
// }

// const fullName = getFullName("Milica", " Dj"); //zagrede se//arguments
// getFullName("Tamara", " D"); //zagrede se

// function validateEmail(email) {
//   return email.incudes("@");
// }
// console.log(fullName);

// //anonimne funkcije
// //prvi nacin
// // const getFullNmae = function(fname, lname){
// //   return `${fName} ${lName}`;
// // }

// function displayStudentInfo(student) {
//   console.log(getFullName(student.firstName, student.lastName)); //poziv ili inicijalizacija
//   console.log(student.age);
// }

// const obj = {
//   firstName: "Aida",
//   lastName: "P",
//   age: 18,
// };

// displayStudentInfo(obj);
/*
const getSum = (num1, num2) => {
  console.log(num1 + num2);
};

getSum(2, 3);

function validateEmail(email) {
  return email.includes("@");
}

const validateEmail2 = (email) => {
  return email.includes("@");
};

const validateEmail3 = (email) => email.includes("@");

console.log("validateEmail", validateEmail("dujakovic@gmail.com"));
console.log("validateEmail2", validateEmail2("dujakovic@gmail.com"));
console.log("validateEmail3", validateEmail3("dujakovicgmail.com"));
*/

//scope

//local scope(function scope)

// function generateFullN (fname,lname){
//   var fullName = `${fname} ${lname}`;
//   console.lof(fullName);
// }

// console.log(fullName);

//gblock scope
//var je globalna varijabla //nemaju block scope//moze se od svakud pristupiti

// {
//   var tax = 17;
// }
// console.log(tax);
// {
//   var tax = 23;
// }
// console.log(tax);

//let, const vaze samo unutar bloka
// {
//   let tax = 17;
// }
// console.log(tax);

// //Hoisting pitanje na intervijuima

// myFunc(); //radi

// const myFunc = () => {
//   console.log("test");
// };

// //varijable isto tako hoisting vazi

// console.log(test);
// let test = 12;

///exercise 1

//1.

//pretvara u apsolutnu brijednos

// const digits = function (number) {
//   return Math.abs(number).toString().length;
// };

/*
const num = -25;

const digits = (number) => Math.abs(number).toString().length;

// console.log(digits(num));
//2;

// if (number % 2 === 0) {
//   return `${number} is even`;
// }

const evenOrOdd = (number) =>
  Math.abs(number % 2 === 0) ? `${number} is even` : `${number} is odd`;
// console.log(evenOrodd(2));

const posOrNeg = (number) =>
  number > 0 ? `${number} is positive` : `${number} is negative`;
// console.log(posOrNeg(2));

const callFunctions = function (number) {
  return ` ${digits(number)}  ${evenOrOdd(number)}  ${posOrNeg(number)} `;
};

console.log(callFunctions(num));
*/

//2 exercise
const header = document.getElementById("myHeader");
const textSizeInp = document.getElementById("textSizeInp");
const textColorInp = document.getElementById("textColorInp");

const genTextColor = (element, color) => {
  element.style.color = color ? color : "black";
};

const genTextSize = (element, textSize) => {
  element.style.fontSize = textSize ? textSize + "px" : "24 px"; //greska sa font size i sa pikselima zato sto je taj stil mora imat neku jedinicu
};

function handleStyle() {
  genTextColor(header, textColorInp.value);
  genTextSize(header, textSizeInp.value);
}
