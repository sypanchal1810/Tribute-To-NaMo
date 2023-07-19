///////////////////////////////////////////////////////////
// Set Age
const ageEl = document.querySelector(".age");
const birthDate = new Date("1950-09-17");
const currentDate = new Date();
const age = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24 * 365));
ageEl.textContent = age;

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
