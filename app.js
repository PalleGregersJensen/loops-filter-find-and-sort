"use strict";

window.addEventListener("load", initApp);

// ========== Global Variables ========== //

const names = [
  "Peter",
  "Magdalena",
  "Frederikke",
  "Oskar",
  "Rasmus",
  "Sofie",
  "Anders",
  "Birgitte",
];

const years = [2003, 2032, 1990, 1966, 1998, 1989, 1975, 2023, 1933];

const teachers = [
  {
    name: "Magdalena Maria Otap",
    mail: "mago@kea.dk",
    phone: "77880000",
    title: "Lecturer",
    age: 36,
    image: "https://share.cederdorff.com/images/mago.jpg",
  },
  {
    name: "Birgitte Jensen",
    mail: "birgitte@mail.dk",
    phone: "77226010",
    title: "Senior Lecturer",
    age: 49,
    image:
      "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921541630000&format=webp",
  },
  {
    name: "Dan Nielsen",
    mail: "dan@mail.dk",
    phone: "77226027",
    title: "Lecturer",
    age: 36,
    image:
      "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
  },
  {
    name: "Rasmus Cederdorff",
    mail: "race@kea.dk",
    phone: "72286318",
    title: "Senior Lecturer",
    age: 33,
    image: "https://share.cederdorff.com/images/race.jpg",
  },
  {
    name: "Martin Hansen",
    mail: "martin@mail.dk",
    phone: "77886620",
    title: "Lecturer",
    age: 34,
    image:
      "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921658800000&format=webp",
  },
  {
    name: "Peter Lind",
    mail: "petl@kea.dk",
    phone: "77886699",
    title: "Senior Lecturer",
    age: 46,
    image: "https://share.cederdorff.com/images/petl.jpg",
  },
];

const teacher = {
  name: "Peter Lind",
  mail: "petl@kea.dk",
  phone: "77886699",
  title: "Senior Lecturer",
  age: 46,
  image: "https://share.cederdorff.com/images/petl.jpg",
};

// ========== initApp ========== //

function initApp() {
  console.log("initApp: app.js is running 🎉");
  loopThroughNames(names);

  loopThroughYears(years);

  loopThroughFiveFirtsYears(years);

  loopThroughFivelastYears(years);

  logNumbers();
}
// array
console.log(names);
// array
console.log(years);
// object
console.log(teacher);
// array
console.log(teachers);

// ========== forEach ========== //

function loopThroughNames() {
  names.forEach(logName);
}

function logName(name, index) {
  if (index === 0) {
    console.log("Dette er det første index");
  }
  if (index === names.length - 1) {
    console.log("Dette er det sidste index");
  }

  let n = index;
  if (n % 2 === 0) {
    console.log(n + " is even");
  } else {
    console.log(n + " is odd");
  }

  console.log(name);
  console.log(index);
}

// ========== for loop ========== //
function loopThroughYears() {
  for (let index = 0; index < years.length; index++) {
    const year = years[index];
    console.log(year);
    console.log(index);

    if (index === years.length - 1) {
      console.log("This is the last year in the list");
    }
    if (year == 2023) {
      console.log("Current year");
    }
  }
}

function loopThroughFiveFirtsYears() {
  for (let index = 0; index < 5; index++) {
    const year = years[index];
    console.log(year);
    console.log(index);
  }
}

function loopThroughFivelastYears() {
  for (let index = 4; index < years.length; index++) {
    const year = years[index];
    console.log(year);
    console.log(index);
  }
}

function logNumbers() {
  for (let index = 0; index <= 9; index++) {
    console.log(index);
  }

  for (let index = 1; index <= 10; index++) {
    console.log(index);
  }

  for (let index = 10; index > -1; index--) {
    console.log(index);
    if (index === 0) {
      console.log("liftoff");
    }
  }

  // Loop der printer de ulige tal fra 1 til 19
  for (let i = 1; i <= 19; i += 2) {
    console.log(i);
  }

  // Fra 1 til 16777216, men du skal fordoble tallet hver gang (2, 4, 8, 16 …).
  for (let index = 1; index <= 16777216; index *= 2) {
    console.log(index);
  }

  // Fra 111 til 138, i steps af 3 (dvs at tal nummer 2 er 114 (111+3)).
  for (let index = 111; index <= 138; index += 3) {
    console.log(index);
  }

  // Fra 100 ned til 0 i 10 steps
  for (let index = 100; index >= 0; index -=10) {
    console.log(index);
  }
}
// ========== for of loop ========== //

// ========== for in loop ========== //

// ========== while loops ========== //

// ========== Filter items: array.filter(...) ========== //

// ========== Sorting: array.sort() ========== //