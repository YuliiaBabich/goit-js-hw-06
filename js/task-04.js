//const buttons = document.querySelectorAll('button');
//buttons.forEach(button => button.addEventListener("click", () => {
//    console.log("Button was clicked");
//}));


const plusBtn = document.querySelector("[data-action='increment']");
const minusBtn = document.querySelector("[data-action='decrement']");

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  document.getElementById('value').textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  document.getElementById('value').textContent = counterValue;
};
plusBtn.addEventListener('click', increment); // викликаємо функцію щоб лічильник рахував
minusBtn.addEventListener('click', decrement);