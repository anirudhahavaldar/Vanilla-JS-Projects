const billEl = document.getElementById('bill-el');
const tipEl = document.getElementById('tip-el');
const totalEl = document.getElementById('total-el');
const calculateBtn = document.getElementById('calculate-btn');
let tip = 0;

calculateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (billEl.value !== null && tipEl.value !== null) {
    tip = (tipEl.value / 100) * billEl.value;
    totalEl.textContent = Number(billEl.value) + tip;
  } else {
    alert('Wrong input!');
  }
});
