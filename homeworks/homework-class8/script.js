"use strict";

// Academy
function Academy(name, start, end) {
  this.name = name;
  this.students = [];
  this.subjects = [];
  this.start = new Date(start);
  this.end = new Date(end);

  this.printStudents = () => {
    this.students.forEach((student) => {
      console.log(student.firstName + " " + student.lastName);
    });
  };
  this.printSubjects = () => {
    this.subjects.forEach((subject) => {
      console.log(subject.title);
    });
  };
  this.NumberOfClasses = () => {
    return this.subjects.length * 10;
  };
}

// Subject
function Subject(title, isElective, academy) {
  this.title = title;
  this.isElective = isElective;
  this.academy = academy;
  this.students = [];
  this.numberOfClasses = 10;

  this.OverrideClasses = (number) => {
    if (number < 3) {
      console.log("Number of classes can't be smaller than 3.");
    } else {
      this.numberOfClasses = number;
    }
  };
}

// Student
function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.completedSubjects = [];
  this.academy = null;
  this.currentSubject = null;

  this.startAcademy = (academy) => {
    this.academy = academy;
    academy.students.push(this);
  };
  this.startSubject = (subject) => {
    if (this.currentSubject) {
      this.completedSubjects.push(this.currentSubject);
    }
    this.currentSubject = subject;
    subject.students.push(this);
  };
}

const student1 = new Student("Tamara", "Zdravkovic", 26);
const myacademy = new Academy("Qinshift Academy", "2023-11-26", "2024-11-26");
const subjectJS = new Subject("JS", false, myacademy);

student1.startAcademy(myacademy);

// console.log(myacademy.students);

student1.startSubject(subjectJS);

console.log(subjectJS.students);
console.log(student1.currentSubject);
console.log(student1.completedSubjects);

const subjectCss = new Subject("Css", false, myacademy);

student1.startSubject(subjectCss);

console.log(student1.completedSubjects);
