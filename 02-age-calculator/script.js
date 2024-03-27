// 2024-03-12

const dateEl = document.getElementById('date-el');
const calculateBtn = document.getElementById('calculate-btn');
const yearEl = document.getElementById('year-el');
const currentDate = new Date().getUTCDate();
const currentMonth = new Date().getUTCMonth();
const currentYear = new Date().getUTCFullYear();

let age = 0;

calculateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const birthDate = new Date(dateEl.value).getUTCDate();
  const birthMonth = new Date(dateEl.value).getUTCMonth();
  const birthYear = new Date(dateEl.value).getUTCFullYear();

  if (birthYear !== currentYear) {
    if (birthMonth === currentMonth) {
      if (birthDate > currentDate) {
        age = currentYear - birthYear;
        console.log(age);
      } else {
        if (currentYear - birthYear > 0) {
          age = currentYear - birthYear - 1;
        } else {
          age = 0;
        }
      }
    } else if (birthMonth > currentMonth) {
      age = currentYear - birthYear - 1;
    } else {
      age = currentYear - birthYear;
    }
  }
  console.log(age);
  yearEl.textContent = age;
});
