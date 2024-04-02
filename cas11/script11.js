"use strict";
/*
class Person {
  constructor(id, name, gender) {
    this.id = Number(id) || 0;
    this.name = name || "---";
    this.gender = gender || "---";
  }

  set name(personName) {
    if (!personName || personName.lenght < 2 || !isNaN(personName)) {
      console.log("Setujes da ime ima vise od jednog slova i nemoze biti broj");
    } else {
      this._name = personName;
    }
  }

  get name() {
    return `The name is ${this._name}`;
  }

  displayDetails() {
    console.log(`Id : ${this.id}`);
    console.log(`Name : ${this.name}`);
    console.log(`Gender : ${this.gender}`);
  }

  static isFemale(obje) {
    return obje.gender.toLowerCase() === "female";
  }
}

const person1 = new Person(1, "Aida P", "femele");
const person2 = new Person(2, "Djordje L", "male");
console.log(person1.name);

person1.displayDetails();

class Student extends Person {
  constructor(id, name, gender, academyName, academyYear) {
    super(id, name, gender); //pozivamo konstruktor bazne klase

    this.academyName = academyName;
    this.academyYear = Number(academyYear) || 1;
  }

  displayInfo() {
    this.displayDetails();
    console.log(`${this.academyName}, ${this.academyYear}`);
  }
}

class Employee extends Person {
  constructor(id, name, gender, company, jobTitle) {
    super(id, name, gender);
    this.company = company;
    this.jobTitle = jobTitle;
  }

  displayDetails() {
    //overraiding methods
    super.displayDetails();
    console.log(`${this.company}, ${this.jobTitle}`);
  }
}

const emp1 = new Employee(
  4,
  "Tamara",
  "female",
  "Microsoft",
  "Frontend developer"
);

//static metode ili funkcije, poziva se nad klasom

Math.pow(3, 2); //pristupa se metodi preko klase a ne preko objekt

Person.isFemale(person1);

//instanceOf

console.log(emp1 instanceof Employee); //true
console.log(emp1 instanceof Person); //true
console.log(emp1 instanceof Student); //false

function whoAmI(obj) {
  if (obj instanceof Student) {
    console.log(`It is a student.`);
  } else if (obj instanceof Employee) {
    console.log(`It is a employee`);
  } else if (obj instanceof Person) {
    console.log(`It is a person`);
  } else {
    console.log(`Erorr`);
  }
}

//exampel

class Product {
  constructor(id, name, price) {
    this.id = Number(id) || 0;
    this.name = name || "---";
    this.price = Number(price) || 0;
  }

  displayDetails() {
    console.log(`Id: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Price: ${this.price} EUR`);
  }
}

class ElectricalDevice extends Product {
  constructor(id, name, price, brand, model) {
    super(id, name, price);

    this.brand = brand || "---";
    this.model = model || "---";
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
  }
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

//exempel

class Animal {
  constructor(name, type, age, weight) {
    this.name = name || "---";
    this.type = type || "---";
    this.age = Number(age) || 0;
    this.weight = Number(weight);
    this.isEaten = false;
  }
  set type(animalType) {
    const types = ["carnivore", "herbivore", "omnivore"];
    if (types.includes(animalType)) {
      this._type = animalType;
    }
  }

  get type() {
    return this._type;
  }

  eat(obj) {
    if (obj instanceof Animal && obj.type === "herbivore") {
      console.log(
        `The animal ${this.name} is a herbivore and does not eat other animals`
      );
    } else if (obj instanceof Animal && obj.type !== "herbivore") {
      this.isEaten = true;
      console.log(`The animal ${this.name} ate the ${obj.name}`);
    } else if (obj.weight * 2 > this.weight) {
      console.log(
        `The animal ${this.name} tried to eat the ${obj.name} but it was too large.`
      );
    } else {
      console.log(`The animal (${this.name} is eating ${obj.name}.`);
    }
  }
}

const cat1 = new Animal("Cile", "carnivore", 7, 4.5);
const cat2 = new Animal("Zeko", "herbivore", 4, 2);
cat1.eat(cat2);
*/
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName || "---";
    this.lastName = lastName || "---";
    this.age = Number(age) || 0;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, academyName, studentId) {
    super(firstName, lastName, age);
    this.academyName = academyName;
    this.studentId = studentId;
  }

  study() {
    console.log(
      `The student ${this.getFullName()} is studying in the ${this.academyName}`
    );
  }
}

const person1 = new Person("Milica", "Dujakovic", 40);
const student1 = new Student("Djordje", "Labudovic", 25, "Qinshift A", 2);

student1.getFullName();
student1.study();

//configuracija

function returnNum(num) {
  return num;
}

const number = returnNum(3);

console.log(number);
