"use strict";

//objects pt2

//prototype

//__proto__
/*
function Product(id, name, price) {
  this.id = Number(id) || 0;
  this.name = name || "---";
  this.price = Number(price) || 0;

  this.displayDetails = () => {
    console.log(`Id: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Price: ${this.price} $`);
  };
}

function ElectricalDevice(id, name, price, brand, model) {
  Object.setPrototypeOf(this, new Product(id, name, price));
  this.brand = brand || "---";
  this.model = model || "---";

  this.displayDetails = () => {
    Object.getPrototypeOf(this).displayDetails();
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
  };
}

function Laptop(id, name, price, brand, model, processor, isTouchScreen) {
  Object.setPrototypeOf(
    this,
    new ElectricalDevice(id, name, price, brand, model)
  );

  this.processor = processor || "---";
  this.isTouchScreen = isTouchScreen || false;

  this.info = () => {
    Object.getPrototypeOf(this).displayDetails();
    console.log(`Processor: ${processor}`);
    console.log(isTouchScreen ? "Touch screen" : "Regular screen");
  };
}

function Clothes(id, name, price, size, material) {
  Object.setPrototypeOf(this, new Product(id, name, price));

  this.size = size || "---";
  this.material = material || "---";

  this.displayDetails = () => {
    Object.getPrototypeOf(this).displayDetails();
    console.log(`Size: ${size}`);
    console.log(`Material: ${material}`);
  };
}

console.log("PRODUCT:");
const product = new Product(1, "Dress", 35);
product.displayDetails();

console.log("\nELECTRICAL DEVICE:");

const elDevice = new ElectricalDevice(
  2,
  "Headphones",
  100,
  "Philips",
  "Fidelio L3"
);
elDevice.displayDetails();

console.log("\nClothes");
const dress = new Clothes(3, "Little Black Dress", 35, "S", "cotton");
dress.displayDetails();

console.log("\nLaptop");
const laptop = new Laptop(
  4,
  "Laptop",
  1700,
  "HP",
  "Notebook - 15-ac650tu",
  "Intel Core i5",
  true
);
console.log(laptop.name);
laptop.info();
/*
// Koliko dana puzu treba da izadje iz bunara?
// Za jedan dan puz se popne 7 stopa, a nocu se vrati 2 stope.
// Bunar je dubok 31 stopu.
*/
// BEGIN

// VARIABLE stope, stopeNazad,ukupnoStopa, dubinaBunara, dan
/*
const stope = 7;

const stopeNazad = 2;

const dubinaBunara = 31;

let dan = 0;
let ukupnoStopa = 0;

while (ukupnoStopa <= dubinaBunara) {
  ukupnoStopa = ukupnoStopa + stope;
  dan++;
  ukupnoStopa = ukupnoStopa - stopeNazad;
}

console.log(`Puzu je potrebno ${dan} dana da izdje iz bunara`);
*/
/*
function Animal(id, species) {
  this.id = Number(id) || 0;
  this.species = species || "---";

  this.info = () => {
    console.log(`Id: ${this.id}`);
    console.log(`Species: ${this.species}`);
  };
}

function DomesticAnimal(id, species, name, age, vacinationDate) {
  Object.setPrototypeOf(this, new Animal(id, species));

  this.name = name || "---";
  this.age = Number(age);
  this.vacinationDate = vacinationDate || "";

  this.displayDetails = () => {
    Object.getPrototypeOf(this).info();

    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Vacination date: ${this.vacinationDate}`);
  };
}

function Cat(id, species, name, age, vacinationDate, breed) {
  Object.setPrototypeOf(
    this,
    new DomesticAnimal(id, species, name, age, vacinationDate)
  );

  this.breed = breed || "---";

  this.displayInformation = () => {
    Object.getPrototypeOf(this).displayDetails();

    console.log(`Breed: ${this.breed}`);
  };
}

const cat = new Cat(1, "cat", "Kitty", 2, "14.3.2024.", "Persian");
*/

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.getFullName = () => {
    return this.firstName + " " + this.lastName;
  };
}

// const person1 = new Person("Milica", "Dujakovic", 40);

// console.log(person1.getFullName());

function Student(firstName, lastName, age, academyName, studentId) {
  Object.setPrototypeOf(this, new Person(firstName, lastName, age));
  this.academyName = academyName;
  this.studentId = studentId;

  this.study = () => {
    console.log(
      `The student ${Object.getPrototypeOf(
        this
      ).getFullName()} is studying in the ${this.academyName}.`
    );
  };
}

const student1 = new Student("Milica", "Dujakovic", 40, "Qinshift Academy", 1);
console.log(student1);
student1.study();

function DesignStudent(
  firstName,
  lastName,
  age,
  academyName,
  studentId,
  isStudentOfTheMonth
) {
  Object.setPrototypeOf(
    this,
    new Student(firstName, lastName, age, academyName, studentId)
  );

  this.isStudentOfTheMonth = isStudentOfTheMonth || false;

  this.attendAdobeExam = () => {
    Object.getPrototypeOf(this).getFullName();
    console.log(`The student ${this.firstName} is doing an adobe exam!`);
  };
}

const student2 = new DesignStudent(
  "Djordje",
  "DJ",
  27,
  "Qinshift Academy",
  2,
  true
);

console.log(student2.firstName);

function CodeStudent(
  firstName,
  lastName,
  age,
  academyName,
  studentId,
  hasIndividualProject,
  hasGroupProject
) {
  Object.setPrototypeOf(
    this,
    new Student(firstName, lastName, age, academyName, studentId)
  );
  this.hasIndividualProject = hasIndividualProject || false;
  this.hasGroupProject = hasGroupProject || false;

  this.doProject = (type) => {
    if (type === "individual") {
      console.log(`${this.firstName} has ${type} project.`);
    } else if (type === "group") {
      console.log(`${this.firstName} has ${type} project.`);
    }
  };
}

const student3 = new CodeStudent(
  "Tamara",
  "Zdravkovic",
  26,
  "Qinshift Academy",
  3,
  true,
  false
);

console.log(student3.firstName);

student3.doProject("individual");
student3.doProject("group");

function NetworkStudent(
  firstName,
  lastName,
  age,
  academyName,
  studentId,
  academyPart
) {
  Object.setPrototypeOf(
    this,
    new Student(firstName, lastName, age, academyName, studentId)
  );
  this.academyPart = Number(academyPart) || 0;

  this.attendCiscoExam = () => {
    console.log(`The student${this.firstName} is doing a cisco exam!`);
  };
}

const student4 = new NetworkStudent(
  "Goran",
  "Radenkovic",
  29,
  "Qinshift Academy",
  4,
  1
);

console.log(student4);
