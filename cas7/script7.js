"use strict";

//Sinc code

// function getAcademyName() {
//   return "Quinshift academy";
// }

// function getTeacherName() {
//   return "Aida P.";
// }

// const academy = getAcademyName();
// const teacher = getTeacherName();

// console.log(`Academy : ${academy}`);
// console.log(`Teacher : ${teacher}`);

//Asinc functions
// funkcije koje vracaju promice//nece blokirati ui
/*
function isUserDataValid(username, password) {
  return new Promise((resolve, reject) => {
    //konstruktor new Promise
    setTimeout(() => {
      //samo zbog primjera da se vidi da se izvrsava kasnije a to se inace ne stavlja
      if (username === "aida" && password === "1234") {
        resolve("User data valid!"); //je then
      } else {
        reject("User data not valid!"); // je catch
      }
    }, 2000);
  });
}

isUserDataValid("aida", "1234") //izvrsila se druga
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  }); //valid

isUserDataValid("aida", "0000") //izvrsila se zadnja
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  }); //not valid

console.log(`Academy : ${getAcademyName()}`); //izvrsila se prava
*/
//example 1-serving dinner
/*
const groceriesCount = 4;
const canClean = false;

function getGroceries() {
  return new Promise((resolve, reject) => {
    console.log("Getting groceries...");
    if (groceriesCount > 0) {
      resolve(["meat", "paprika", "carrot", "peper"]);
    } else {
      reject("No enough groceries!");
    }
  });
}

function cleanGroceries() {
  return new Promise((resolve, reject) => {
    if (canClean) {
      resolve("Cleaned!!!");
    } else {
      reject("Groceries cannot be cleaned!");
    }
  });
}

function makeMeal() {
  return new Promise((resolve, reject) => {
    getGroceries()
      .then(() => {
        cleanGroceries()
          .then(() => {
            resolve("Meal is ready! Enjoy!");
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

makeMeal()
  .then((responce) => {
    console.log(responce);
  })
  .catch((error) => {
    console.error(error);
  });

//setTimeout, je koristila samo da nam malo bolje objasni kako se koj funkcija izvrsava.
*/
/*

const memoryFull = false;

function takePhoto() {
  return new Promise((resolve, reject) => {
    // console.log("Taking photo....");
    
      if (memoryFull) {
        reject("Phone memorty is full!");
      } else {
        resolve("Photo saved.");
      }
    };
  });
}

function editPhoto() {
  return new Promise((resolve, reject) => {
    console.log("Editing photo....");

    const answer = confirm("Do you want to edit photo? ");

    if (answer) {
      resolve("Photo is edited.");
    } else {
      reject("Photo not edited.");
    }
  });
}

function addPhotoToIG() {
  takePhoto()
    .then(() => {//ne mora biti response kakda ga ne koristimo
      editPhoto().finally(() => {
        console.log(
          "%cPhoto successfully added to IG!",
          "color:pink; font-size:16px;"
        );
      });
    })
    .catch((error) => {
      console.error("Photo not added to instagram", error);
    });
}

addPhotoToIG();
*/

//exercise 3 - Food ordering

/*
const isSelected = true;

function selectItemsFromMany() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSelected) {
        resolve("Items selected");
      } else {
        reject("Order not selected");
      }
    });
  });
}

function confirmOrder() {
  return new Promise((resolve, reject) => {
    const answer = confirm("Do you want to confirm order ?");

    if (answer) {
      resolve("Order confirmed!");
    } else {
      reject("Order not confirmed!");
    }
  });
}

function orderFood() {
  return new Promise((resolve, reject) => {
    selectItemsFromMany()
      .then(() => {
        confirmOrder()
          .then((res) => {
            console.log(res);
            resolve("Oder comfirmed");
          })
          .catch((err) => {
            console.error("Order is not confirmed", err);
            reject(err);
          });
      })
      .catch((err) => {
        console.error("{selectItemsFromMany faled", err);
        reject(err);
      });
  });
}
// orderFood();
*/
//async ES 6//ekma skript 6
/*
async function orderFood2() {
  try {
    const response = await selectItemsFromMany(); //selectItemsFromMany().then((res)=> {})
    console.log("response", response);
    const confirmedOrder = await confirmOrder();
    console.log(confirmedOrder);
  } catch (error) {
    console.error("Error has ocurred", error);
  }
}
*/
// orderFood2();
/*
async function orderFood2() {
  try {
    await selectItemsFromMany(); //selectItemsFromMany().then((res)=> {})
    await confirmOrder();
    console.log("%cOrder is ready. Enjoy your meal!", "color: green;");
  } catch (error) {
    console.error("Error has ocurred", error);
  }
}
*/
//exercise - country by code

//(https://restcountries.com/);

const country = "BIH";

async function getCountryByCode(countryCode) {
  return fetch(`https://restcountries.com/v2/alpha/${countryCode}`).then(
    (res) => res.json()
  );
}

function getBorderingCountries() {
  return new Promise((resolve, reject) => {
    getCountryByCode(country)
      .then((response) => {
        console.log(response);
        resolve(response.borders);
      })
      .catch((error) => {
        console.log("Fetching country failed", error);
        reject("An error has ocurred");
      });
  });
}

function renderCountries() {
  getBorderingCountries()
    .then((countries) => {
      console.log(countries);
      countries.forEach((country) => {
        getCountryByCode(country)
          .then((response) => {
            console.log(country, response.name);
          })
          .catch(() => {
            console.error("Api failed...");
          });
      });
    })
    .catch(() => {
      console.error("An error has ocurred with rendering countries.");
    });
}

renderCountries();
